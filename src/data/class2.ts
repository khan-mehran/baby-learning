import { ClassCurriculum, LearningItem } from '../types';
import { pastel } from '../utils/colors';

const english: LearningItem[] = [
  { id: 'c2_en_1', character: 'The Hen',   word: 'A hen laid eggs. The eggs were white. Baby chicks hatched from the eggs.',                       emoji: '🐔', color: pastel(0) },
  { id: 'c2_en_2', character: 'The Dog',   word: 'A dog is a faithful animal. It guards the house. People love their dogs.',                       emoji: '🐶', color: pastel(1) },
  { id: 'c2_en_3', character: 'The Sun',   word: 'The sun rises in the east. It gives us light and heat. Plants need sunlight to grow.',           emoji: '☀️', color: pastel(2) },
  { id: 'c2_en_4', character: 'The Rain',  word: 'Rain falls from the clouds. It waters the plants and trees. Children play in the rain.',         emoji: '🌧️', color: pastel(3) },
  { id: 'c2_en_5', character: 'My School', word: 'My school is big and clean. I have many friends here. My teacher is very kind and helpful.',     emoji: '🏫', color: pastel(4) },
  { id: 'c2_en_6', character: 'The Cow',   word: 'A cow gives us milk. Milk is good for our health. Cheese and butter are made from milk.',        emoji: '🐄', color: pastel(5) },
  { id: 'c2_en_7', character: 'My Home',   word: 'My home is my favourite place. I love my family. We eat together and play together at home.',    emoji: '🏠', color: pastel(6) },
  { id: 'c2_en_8', character: 'The Tree',  word: 'Trees give us fruit and shade. They clean the air we breathe. We should plant more trees.',     emoji: '🌳', color: pastel(7) },
  { id: 'c2_en_9', character: 'The Sea',   word: 'The sea is vast and deep. Many fish live in the sea. Sailors sail on the sea in big ships.',    emoji: '🌊', color: pastel(8) },
  { id: 'c2_en_10',character: 'The Moon',  word: 'The moon shines at night. It has no light of its own. It reflects the light of the sun.',        emoji: '🌕', color: pastel(9) },
];

function makeTable(table: number, max = 10): LearningItem[] {
  return Array.from({ length: max }, (_, i) => {
    const n = i + 1;
    const result = table * n;
    return {
      id: `c2_t${table}_${n}`,
      character: `${table} × ${n}`,
      word: `= ${result}`,
      emoji: ['⭐','🌟','💫','✨','🎯','🎈','🎉','🎊','🏆','💎'][i],
      color: pastel(i),
    };
  });
}

const math: LearningItem[] = [
  ...makeTable(2), ...makeTable(3), ...makeTable(4), ...makeTable(5),
  ...makeTable(6), ...makeTable(7), ...makeTable(8), ...makeTable(9),
  ...makeTable(10),
];

const urdu: LearningItem[] = [
  { id: 'c2_ur_1', character: 'میرا نام احمد ہے۔ میں تیسری جماعت میں پڑھتا ہوں۔', word: 'My name is Ahmad. I study in Class 3.', wordRoman: 'Mera naam Ahmad hai...', emoji: '🙋', color: pastel(0) },
  { id: 'c2_ur_2', character: 'آج موسم خوشگوار ہے۔ ہوا ٹھنڈی چل رہی ہے۔',          word: 'The weather is pleasant today. The breeze is cool.', wordRoman: '', emoji: '🌤️', color: pastel(1) },
  { id: 'c2_ur_3', character: 'پاکستان ہمارا وطن ہے۔ ہم اسے بہت چاہتے ہیں۔',       word: 'Pakistan is our homeland. We love it dearly.', wordRoman: '', emoji: '🇵🇰', color: pastel(2) },
  { id: 'c2_ur_4', character: 'بچے باغ میں کھیل رہے ہیں۔ وہ بہت خوش ہیں۔',         word: 'Children are playing in the garden. They are very happy.', wordRoman: '', emoji: '🌺', color: pastel(3) },
  { id: 'c2_ur_5', character: 'کتاب علم کا خزانہ ہے۔ ہمیں روزانہ پڑھنا چاہیے۔',    word: 'A book is a treasure of knowledge. We should read daily.', wordRoman: '', emoji: '📚', color: pastel(4) },
  { id: 'c2_ur_6', character: 'ماں کی دعا جنت کی ہوا ہے۔',                          word: 'A mother\'s prayer is like the breeze of paradise.', wordRoman: '', emoji: '🤲', color: pastel(5) },
  { id: 'c2_ur_7', character: 'پانی زندگی کی اہم ضرورت ہے۔ پانی بچائیں۔',          word: 'Water is essential for life. Save water.', wordRoman: '', emoji: '💧', color: pastel(6) },
  { id: 'c2_ur_8', character: 'درخت ہمارے دوست ہیں۔ زیادہ درخت لگائیں۔',           word: 'Trees are our friends. Plant more trees.', wordRoman: '', emoji: '🌳', color: pastel(7) },
];

const class2Curriculum: ClassCurriculum = {
  classId: 'class2',
  className: 'Class 2',
  emoji: '🌙',
  color: '#FFEAA7',
  subjects: { english, math, urdu },
};

export default class2Curriculum;
