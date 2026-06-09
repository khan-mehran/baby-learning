import { useCallback } from 'react';
import { useAppStore } from '../store/useAppStore';
import { LearningItem } from '../types';
import { Subject } from '../types';

export function useAudio() {
  const isMuted = useAppStore((s) => s.isMuted);

  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }, []);

  const speakText = useCallback(
    (text: string) => {
      if (isMuted || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    },
    [isMuted],
  );

  const speakItem = useCallback(
    (item: LearningItem, subject: Subject) => {
      if (isMuted) return;
      let text: string;
      if (subject === 'urdu') {
        text = item.wordRoman ? `${item.wordRoman}. ${item.word}` : item.character;
      } else {
        text = `${item.character}. ${item.word}`;
      }
      speakText(text);
    },
    [isMuted, speakText],
  );

  return { speakItem, speakText, stopSpeech };
}
