import { ClassCurriculum, LearningItem } from '../types';
import { pastel } from '../utils/colors';

const english: LearningItem[] = [
  {
    id: 'c3_en_1', character: 'The Lion and the Mouse',
    word: 'Once a lion caught a small mouse. The mouse begged for its life. The lion let it go. Later the mouse gnawed the net and freed the lion. Kindness is always repaid.',
    emoji: '🦁', color: pastel(0),
  },
  {
    id: 'c3_en_2', character: 'The Tortoise and the Hare',
    word: 'A hare boasted he was fast. A tortoise challenged him to a race. The hare napped; the tortoise kept walking. Slow and steady wins the race.',
    emoji: '🐢', color: pastel(1),
  },
  {
    id: 'c3_en_3', character: 'The Ant and the Grasshopper',
    word: 'In summer ants stored food. The grasshopper played all day. Winter came and the grasshopper was hungry. Hard work always pays off.',
    emoji: '🐜', color: pastel(2),
  },
  {
    id: 'c3_en_4', character: 'The Fox and the Grapes',
    word: 'A hungry fox saw grapes high on a vine. He jumped again and again but could not reach them. He said they must be sour anyway. We pretend not to like what we cannot get.',
    emoji: '🦊', color: pastel(3),
  },
  {
    id: 'c3_en_5', character: 'The Golden Goose',
    word: 'A farmer had a goose that laid golden eggs. Greedy for more gold, he cut it open and found nothing. Do not be greedy.',
    emoji: '🪿', color: pastel(4),
  },
  {
    id: 'c3_en_6', character: 'Comprehension: Pakistan',
    word: 'Pakistan is a beautiful country. It has tall mountains, green valleys, rivers and deserts. Lahore, Karachi and Islamabad are its big cities. Pakistan was created in 1947.',
    emoji: '🇵🇰', color: pastel(5),
  },
];

function makeTable(table: number, max = 12): LearningItem[] {
  return Array.from({ length: max }, (_, i) => {
    const n = i + 1;
    const result = table * n;
    return {
      id: `c3_t${table}_${n}`,
      character: `${table} × ${n}`,
      word: `= ${result}`,
      emoji: ['⭐','🌟','💫','✨','🎯','🎈','🎉','🎊','🏆','💎','🔥','🌈'][i],
      color: pastel(i),
    };
  });
}

function makeDivision(divisor: number): LearningItem[] {
  return Array.from({ length: 10 }, (_, i) => {
    const n = (i + 1) * divisor;
    return {
      id: `c3_d${divisor}_${i + 1}`,
      character: `${n} ÷ ${divisor}`,
      word: `= ${i + 1}`,
      emoji: ['➗','🧮','🔢','📐','📏','🧩','🎲','🎯','🏅','🥇'][i],
      color: pastel(i),
    };
  });
}

const math: LearningItem[] = [
  ...makeTable(2),  ...makeTable(3),  ...makeTable(4),  ...makeTable(5),
  ...makeTable(6),  ...makeTable(7),  ...makeTable(8),  ...makeTable(9),
  ...makeTable(10), ...makeTable(11), ...makeTable(12),
  ...makeDivision(2), ...makeDivision(3), ...makeDivision(4), ...makeDivision(5),
];

const urdu: LearningItem[] = [
  {
    id: 'c3_ur_1', character: 'محنت کا پھل',
    word: 'Fruit of Hard Work',
    wordRoman: 'Mehnat ka phal',
    emoji: '🌿', color: pastel(0),
  },
  {
    id: 'c3_ur_2', character: 'ایک غریب لڑکے نے محنت سے پڑھا۔ وہ پاس ہوگیا اور استاد نے اسے انعام دیا۔',
    word: 'A poor boy studied hard. He passed and his teacher gave him a reward.',
    wordRoman: '',
    emoji: '🎓', color: pastel(1),
  },
  {
    id: 'c3_ur_3', character: 'صفائی نصف ایمان ہے۔ اپنا گھر اور محلہ صاف رکھیں۔',
    word: 'Cleanliness is half of faith. Keep your home and neighbourhood clean.',
    wordRoman: '',
    emoji: '🧹', color: pastel(2),
  },
  {
    id: 'c3_ur_4', character: 'ہمیں اپنے بزرگوں کا احترام کرنا چاہیے۔',
    word: 'We should respect our elders.',
    wordRoman: 'Humen apne buzurgon ka ehtram karna chahiye.',
    emoji: '👴', color: pastel(3),
  },
  {
    id: 'c3_ur_5', character: 'وقت کی قدر کرو۔ گیا وقت کبھی واپس نہیں آتا۔',
    word: 'Value your time. Time gone never returns.',
    wordRoman: '',
    emoji: '⏰', color: pastel(4),
  },
];

const class3Curriculum: ClassCurriculum = {
  classId: 'class3',
  className: 'Class 3',
  emoji: '🚀',
  color: '#DDA0DD',
  subjects: { english, math, urdu },
};

export default class3Curriculum;
