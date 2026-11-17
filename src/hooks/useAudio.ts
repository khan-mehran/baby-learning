import { useCallback, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Speech } from '../types';

const hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window;

// Browsers load their voice list in the background, so keep it up to date.
let voices: SpeechSynthesisVoice[] = [];
function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}
if (hasSpeech) {
  loadVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

/** Android reports "ur_PK", everyone else "ur-PK". */
const normalise = (lang: string) => lang.toLowerCase().replace('_', '-');

function findVoice(...prefixes: string[]): SpeechSynthesisVoice | undefined {
  if (voices.length === 0) loadVoices();
  for (const prefix of prefixes) {
    const voice = voices.find((v) => normalise(v.lang).startsWith(prefix));
    if (voice) return voice;
  }
  return undefined;
}

/** A recording to play once the words have been spoken. */
export interface SoundAfter {
  src: string;
  /** Spoken instead if the recording cannot be played (e.g. "Woof! Woof!"). */
  fallback: string;
}

interface Attempt {
  text: string;
  voice?: SpeechSynthesisVoice;
}

/** A voice that cannot read the text "finishes" almost instantly without a sound. */
const SILENT_MS = 150;

// Every speak() gets a new turn number; callbacks from older turns are ignored.
let turn = 0;
let player: HTMLAudioElement | null = null;
// Chrome can garbage-collect an utterance mid-speech and never fire its events.
let liveUtterance: SpeechSynthesisUtterance | null = null;

function stopAll() {
  turn++;
  if (hasSpeech) window.speechSynthesis.cancel();
  player?.pause();
}

/** Say the attempts in order until one of them actually makes a sound. */
function sayFirstThatWorks(attempts: Attempt[], myTurn: number, onDone?: () => void, index = 0) {
  const { text, voice } = attempts[index];
  const hasNext = index + 1 < attempts.length;
  const tryNext = () => sayFirstThatWorks(attempts, myTurn, onDone, index + 1);

  const utterance = new SpeechSynthesisUtterance(text);
  if (voice) utterance.voice = voice;
  utterance.lang = voice ? voice.lang.replace('_', '-') : 'en-US';
  utterance.rate = 0.8;
  utterance.pitch = 1.1;

  const startedAt = performance.now();
  utterance.onend = () => {
    if (myTurn !== turn) return;
    if (hasNext && performance.now() - startedAt < SILENT_MS) tryNext();
    else onDone?.();
  };
  utterance.onerror = (e) => {
    if (myTurn !== turn || e.error === 'interrupted' || e.error === 'canceled') return;
    if (hasNext) tryNext();
    else onDone?.();
  };

  liveUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

export function useAudio() {
  const isMuted = useAppStore((s) => s.isMuted);

  useEffect(() => {
    if (isMuted) stopAll();
  }, [isMuted]);

  const speak = useCallback(
    (speech: Speech, lang: 'en' | 'ur', after?: SoundAfter) => {
      if (isMuted) return;
      stopAll();
      const myTurn = turn;

      // The voice used for Urdu: a real Urdu voice, else a Hindi one.
      const urduVoice = findVoice('ur');
      const hindiVoice = findVoice('hi');
      const englishVoice = findVoice('en-in', 'en-us', 'en-gb', 'en');

      const attempts: Attempt[] = [];
      if (lang === 'ur') {
        // An English voice stays silent when handed Urdu script, so try, in order:
        //   1. an Urdu voice reading Urdu script
        //   2. a Hindi voice reading the same sounds in Devanagari
        //   3. an English voice reading the Roman spelling
        if (urduVoice && speech.ur) attempts.push({ text: speech.ur, voice: urduVoice });
        else if (hindiVoice && speech.hi) attempts.push({ text: speech.hi, voice: hindiVoice });
      } else {
        // English and Math use the same voice as Urdu so the whole app sounds
        // like one person. If that voice cannot read English, the English
        // voice below takes over.
        const sameVoice = urduVoice ?? hindiVoice;
        if (sameVoice) attempts.push({ text: speech.text, voice: sameVoice });
      }
      attempts.push({ text: speech.text, voice: englishVoice });

      // Recording to play after the words (animal sounds).
      let playSound: (() => void) | undefined;
      if (after) {
        const audio = (player ??= new Audio());
        audio.src = after.src;
        let realPlayStarted = false;

        // iPhones only let a page start audio during a tap. Start it silently
        // now, while we are still inside the tap, so it may play later.
        audio.muted = true;
        audio
          .play()
          .then(() => {
            if (realPlayStarted || myTurn !== turn) return;
            audio.pause();
            audio.currentTime = 0;
          })
          .catch(() => {});

        playSound = () => {
          if (myTurn !== turn) return;
          realPlayStarted = true;
          audio.muted = false;
          audio.currentTime = 0;
          audio.play().catch(() => {
            // No recording, or the browser refused: say the sound instead.
            if (myTurn === turn && hasSpeech) {
              sayFirstThatWorks([{ text: after.fallback, voice: englishVoice }], myTurn);
            }
          });
        };
      }

      if (hasSpeech) sayFirstThatWorks(attempts, myTurn, playSound);
      else playSound?.();
    },
    [isMuted],
  );

  return { speak, stop: stopAll };
}
