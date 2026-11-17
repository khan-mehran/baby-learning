/**
 * What to say out loud.
 * `text` is English, or Urdu written in Roman letters, and works with any voice.
 * `ur` is the same thing in Urdu script, used only when the device has an Urdu voice.
 * `hi` is the same sound written in Devanagari, for devices that only have a Hindi voice.
 */
export interface Speech {
  text: string;
  ur?: string;
  hi?: string;
}

export interface LearningItem {
  id: string;
  /** The big thing on the card: a letter, a number or a name. */
  character: string;
  emoji: string;
  word: string;
  wordRoman?: string;
  color: string;
  /** Recording played after the words in One by One, e.g. a dog barking. */
  sound?: string;
  say: {
    /** First tab: just the letter / number / name. */
    char: Speech;
    /** Second tab: the letter with its word, e.g. "A for Apple". */
    full: Speech;
  };
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  lang: 'en' | 'ur';
  /** 'letters' shows only the character in the grid; 'things' shows a picture with its name. */
  kind: 'letters' | 'things';
  /** Labels of the two tabs: [see everything, learn one by one]. */
  tabs: [string, string];
  items: LearningItem[];
}
