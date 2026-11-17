import { Topic } from '../types';
import { pastel } from '../utils/colors';

type Row = [name: string, emoji: string, sentence: string, sound?: string];

function makeTopic(id: string, title: string, emoji: string, rows: Row[]): Topic {
  return {
    id,
    title,
    emoji,
    lang: 'en',
    kind: 'things',
    tabs: ['📚 See All', '🎴 One by One'],
    items: rows.map(([name, itemEmoji, sentence, sound], i) => ({
      id: `${id}_${i + 1}`,
      character: name,
      word: sentence,
      emoji: itemEmoji,
      color: pastel(i),
      sound,
      say: {
        char: { text: name },
        // With a recording, only the name is spoken and the recording follows.
        full: { text: sound ? name : `${name}. ${sentence}` },
      },
    })),
  };
}

export const GK_TOPICS: Topic[] = [
  makeTopic('animals', 'Animals', '🐶', [
    // One by One shows the animal, says its name, then plays its sound: a real
    // recording from public/sounds where we have one, otherwise the voice says
    // the third column. To add a recording, put the file in public/sounds and
    // add its path as a fourth value. Sources are listed in public/sounds/CREDITS.md.
    ['Dog', '🐶', 'Woof! Woof!', '/sounds/dog.wav'],
    ['Cat', '🐱', 'Meow! Meow!', '/sounds/cat.wav'],
    ['Cow', '🐄', 'Moo! Moo!'],
    ['Duck', '🦆', 'Quack! Quack!'],
    ['Lion', '🦁', 'Roar! Roar!', '/sounds/lion.wav'],
    ['Monkey', '🐵', 'Ooh ooh, ah ah!'],
  ]),
  makeTopic('fruits', 'Fruits', '🍎', [
    ['Apple', '🍎', 'An apple is red and crunchy.'],
    ['Banana', '🍌', 'A banana is long and yellow.'],
    ['Mango', '🥭', 'The mango is the king of fruits.'],
    ['Orange', '🍊', 'An orange is round and juicy.'],
    ['Grapes', '🍇', 'Grapes grow in a bunch.'],
    ['Watermelon', '🍉', 'A watermelon is green outside and red inside.'],
  ]),
  makeTopic('colors', 'Colors', '🎨', [
    ['Red', '🔴', 'An apple is red.'],
    ['Blue', '🔵', 'The sky is blue.'],
    ['Green', '🟢', 'Grass is green.'],
    ['Yellow', '🟡', 'The sun is yellow.'],
    ['Orange', '🟠', 'A carrot is orange.'],
    ['Purple', '🟣', 'Grapes are purple.'],
  ]),
  makeTopic('shapes', 'Shapes', '🔺', [
    ['Circle', '🔴', 'A ball is a circle.'],
    ['Square', '🟦', 'A square has four equal sides.'],
    ['Triangle', '🔺', 'A triangle has three sides.'],
    ['Star', '⭐', 'A star has five points.'],
    ['Heart', '❤️', 'A heart means love.'],
    ['Diamond', '🔷', 'A kite looks like a diamond.'],
  ]),
];
