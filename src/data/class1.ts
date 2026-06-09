import { ClassCurriculum, LearningItem } from '../types';
import { pastel } from '../utils/colors';

const english: LearningItem[] = [
  { id: 'c1_en_1',  character: 'cat', word: 'The cat sat on a mat.',   emoji: '🐱', color: pastel(0) },
  { id: 'c1_en_2',  character: 'bat', word: 'I hit the bat hard.',     emoji: '🏏', color: pastel(1) },
  { id: 'c1_en_3',  character: 'hat', word: 'She wore a red hat.',     emoji: '🎩', color: pastel(2) },
  { id: 'c1_en_4',  character: 'mat', word: 'Sit on the mat.',         emoji: '🧘', color: pastel(3) },
  { id: 'c1_en_5',  character: 'rat', word: 'A rat ran fast.',         emoji: '🐀', color: pastel(4) },
  { id: 'c1_en_6',  character: 'cup', word: 'Fill the cup with milk.', emoji: '🥛', color: pastel(5) },
  { id: 'c1_en_7',  character: 'jug', word: 'A jug of water.',         emoji: '🫗', color: pastel(6) },
  { id: 'c1_en_8',  character: 'bus', word: 'I go by bus.',            emoji: '🚌', color: pastel(7) },
  { id: 'c1_en_9',  character: 'sun', word: 'The sun is bright.',      emoji: '☀️', color: pastel(8) },
  { id: 'c1_en_10', character: 'run', word: 'I can run fast.',         emoji: '🏃', color: pastel(9) },
  { id: 'c1_en_11', character: 'big', word: 'An elephant is big.',     emoji: '🐘', color: pastel(0) },
  { id: 'c1_en_12', character: 'dig', word: 'Dogs dig in the mud.',    emoji: '🐕', color: pastel(1) },
  { id: 'c1_en_13', character: 'sit', word: 'Please sit down.',        emoji: '🪑', color: pastel(2) },
  { id: 'c1_en_14', character: 'hit', word: 'Hit the ball hard.',      emoji: '⚾', color: pastel(3) },
  { id: 'c1_en_15', character: 'hop', word: 'Bunny likes to hop.',     emoji: '🐰', color: pastel(4) },
  { id: 'c1_en_16', character: 'top', word: 'Spin the top around.',    emoji: '🌀', color: pastel(5) },
  { id: 'c1_en_17', character: 'pot', word: 'Cook in the pot.',        emoji: '🍲', color: pastel(6) },
  { id: 'c1_en_18', character: 'hot', word: 'The sun is hot.',         emoji: '🌡️', color: pastel(7) },
  { id: 'c1_en_19', character: 'bed', word: 'I sleep in my bed.',      emoji: '🛏️', color: pastel(8) },
  { id: 'c1_en_20', character: 'red', word: 'Roses are red.',          emoji: '🌹', color: pastel(9) },
];

function makeTable(table: number, max = 10): LearningItem[] {
  return Array.from({ length: max }, (_, i) => {
    const n = i + 1;
    const result = table * n;
    return {
      id: `c1_t${table}_${n}`,
      character: `${table} × ${n}`,
      word: `= ${result}`,
      emoji: ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'][Math.min(result, 10)],
      color: pastel(i),
    };
  });
}

const math: LearningItem[] = [
  ...makeTable(2),
  ...makeTable(3),
  ...makeTable(4),
  ...makeTable(5),
];

const urdu: LearningItem[] = [
  { id: 'c1_ur_1',  character: 'میں اسکول جاتا ہوں۔',   word: 'I go to school.',       wordRoman: 'Main school jata hoon.', emoji: '🏫', color: pastel(0) },
  { id: 'c1_ur_2',  character: 'یہ میری کتاب ہے۔',      word: 'This is my book.',      wordRoman: 'Yeh meri kitab hai.',    emoji: '📚', color: pastel(1) },
  { id: 'c1_ur_3',  character: 'آسمان نیلا ہے۔',        word: 'The sky is blue.',       wordRoman: 'Aasman neela hai.',     emoji: '🌤️', color: pastel(2) },
  { id: 'c1_ur_4',  character: 'پھول خوبصورت ہے۔',      word: 'The flower is pretty.',  wordRoman: 'Phool khubsurat hai.',  emoji: '🌸', color: pastel(3) },
  { id: 'c1_ur_5',  character: 'میری امی پیاری ہیں۔',   word: 'My mother is dear.',    wordRoman: 'Meri ammi pyari hain.', emoji: '👩', color: pastel(4) },
  { id: 'c1_ur_6',  character: 'ہم مل کر کھیلتے ہیں۔', word: 'We play together.',     wordRoman: 'Hum mil kar kheltay.',  emoji: '🤝', color: pastel(5) },
  { id: 'c1_ur_7',  character: 'بلی دودھ پیتی ہے۔',    word: 'The cat drinks milk.',   wordRoman: 'Billi doodh peeti hai.',emoji: '🐱', color: pastel(6) },
  { id: 'c1_ur_8',  character: 'سورج چمکتا ہے۔',        word: 'The sun shines.',        wordRoman: 'Suraj chamakta hai.',   emoji: '☀️', color: pastel(7) },
  { id: 'c1_ur_9',  character: 'پرندہ اڑتا ہے۔',        word: 'The bird flies.',        wordRoman: 'Parinda urta hai.',     emoji: '🐦', color: pastel(8) },
  { id: 'c1_ur_10', character: 'بچے پڑھتے ہیں۔',        word: 'Children study.',        wordRoman: 'Bachay parhte hain.',   emoji: '🎓', color: pastel(9) },
];

const class1Curriculum: ClassCurriculum = {
  classId: 'class1',
  className: 'Class 1',
  emoji: '⭐',
  color: '#96CEB4',
  subjects: { english, math, urdu },
};

export default class1Curriculum;
