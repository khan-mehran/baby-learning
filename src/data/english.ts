import { Topic } from '../types';
import { pastel } from '../utils/colors';

const ALPHABET: Array<[letter: string, word: string, emoji: string]> = [
  ['A', 'Apple', '🍎'],
  ['B', 'Ball', '⚽'],
  ['C', 'Cat', '🐱'],
  ['D', 'Dog', '🐶'],
  ['E', 'Elephant', '🐘'],
  ['F', 'Fish', '🐟'],
  ['G', 'Goat', '🐐'],
  ['H', 'Hat', '🎩'],
  ['I', 'Ice Cream', '🍦'],
  ['J', 'Juice', '🧃'],
  ['K', 'Kite', '🪁'],
  ['L', 'Lion', '🦁'],
  ['M', 'Mango', '🥭'],
  ['N', 'Nose', '👃'],
  ['O', 'Orange', '🍊'],
  ['P', 'Parrot', '🦜'],
  ['Q', 'Queen', '👸'],
  ['R', 'Rabbit', '🐰'],
  ['S', 'Sun', '🌞'],
  ['T', 'Tiger', '🐯'],
  ['U', 'Umbrella', '☔'],
  ['V', 'Van', '🚐'],
  ['W', 'Whale', '🐋'],
  ['X', 'Xylophone', '🎵'],
  ['Y', 'Yo-yo', '🪀'],
  ['Z', 'Zebra', '🦓'],
];

const english: Topic = {
  id: 'english',
  title: 'English',
  emoji: '🔤',
  lang: 'en',
  kind: 'letters',
  tabs: ['🔤 A to Z', '🍎 A for Apple'],
  items: ALPHABET.map(([letter, word, emoji], i) => ({
    id: `en_${letter}`,
    character: letter,
    word,
    emoji,
    color: pastel(i),
    say: {
      char: { text: letter },
      full: { text: `${letter} for ${word}` },
    },
  })),
};

export default english;
