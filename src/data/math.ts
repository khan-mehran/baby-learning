import { Topic } from '../types';
import { pastel } from '../utils/colors';

const NUMBERS: Array<[name: string, emoji: string, one: string, many: string]> = [
  ['One', '🍎', 'Apple', 'Apples'],
  ['Two', '⚽', 'Ball', 'Balls'],
  ['Three', '🐱', 'Cat', 'Cats'],
  ['Four', '🌸', 'Flower', 'Flowers'],
  ['Five', '🎈', 'Balloon', 'Balloons'],
  ['Six', '🐟', 'Fish', 'Fish'],
  ['Seven', '⭐', 'Star', 'Stars'],
  ['Eight', '🦋', 'Butterfly', 'Butterflies'],
  ['Nine', '🍓', 'Strawberry', 'Strawberries'],
  ['Ten', '🍌', 'Banana', 'Bananas'],
  ['Eleven', '🍊', 'Orange', 'Oranges'],
  ['Twelve', '🥚', 'Egg', 'Eggs'],
  ['Thirteen', '🍪', 'Cookie', 'Cookies'],
  ['Fourteen', '🐥', 'Chick', 'Chicks'],
  ['Fifteen', '🍬', 'Candy', 'Candies'],
  ['Sixteen', '🚗', 'Car', 'Cars'],
  ['Seventeen', '🍇', 'Grape', 'Grapes'],
  ['Eighteen', '🐞', 'Ladybug', 'Ladybugs'],
  ['Nineteen', '🍒', 'Cherry', 'Cherries'],
  ['Twenty', '💎', 'Diamond', 'Diamonds'],
];

const math: Topic = {
  id: 'math',
  title: 'Math',
  emoji: '🔢',
  lang: 'en',
  kind: 'letters',
  tabs: ['🔢 1 to 20', '🍎 Count'],
  items: NUMBERS.map(([name, emoji, one, many], i) => {
    const n = i + 1;
    const phrase = `${name} ${n === 1 ? one : many}`;
    return {
      id: `math_${n}`,
      character: String(n),
      word: phrase,
      emoji: emoji.repeat(n),
      color: pastel(i),
      say: {
        char: { text: name },
        full: { text: `${name}. ${phrase}` },
      },
    };
  }),
};

export default math;
