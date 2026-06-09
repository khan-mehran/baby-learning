import { ClassCurriculum, LearningItem } from '../types';
import { pastel } from '../utils/colors';

const english: LearningItem[] = [
  { id: 'kg_en_1',  character: 'the',  word: 'The cat sat.',     emoji: '📖', color: pastel(0) },
  { id: 'kg_en_2',  character: 'and',  word: 'Sun and moon.',    emoji: '☀️', color: pastel(1) },
  { id: 'kg_en_3',  character: 'a',    word: 'A big dog.',       emoji: '🐶', color: pastel(2) },
  { id: 'kg_en_4',  character: 'to',   word: 'Go to school.',    emoji: '🏫', color: pastel(3) },
  { id: 'kg_en_5',  character: 'in',   word: 'Bird in a cage.',  emoji: '🐦', color: pastel(4) },
  { id: 'kg_en_6',  character: 'is',   word: 'She is kind.',     emoji: '😊', color: pastel(5) },
  { id: 'kg_en_7',  character: 'it',   word: 'It is a ball.',    emoji: '⚽', color: pastel(6) },
  { id: 'kg_en_8',  character: 'you',  word: 'Can you run?',     emoji: '🏃', color: pastel(7) },
  { id: 'kg_en_9',  character: 'that', word: 'What is that?',    emoji: '❓', color: pastel(8) },
  { id: 'kg_en_10', character: 'he',   word: 'He has a kite.',   emoji: '🪁', color: pastel(9) },
  { id: 'kg_en_11', character: 'was',  word: 'It was hot.',      emoji: '🌡️', color: pastel(0) },
  { id: 'kg_en_12', character: 'she',  word: 'She eats rice.',   emoji: '🍚', color: pastel(1) },
  { id: 'kg_en_13', character: 'on',   word: 'Sit on the mat.',  emoji: '🧘', color: pastel(2) },
  { id: 'kg_en_14', character: 'are',  word: 'We are friends.',  emoji: '🤝', color: pastel(3) },
  { id: 'kg_en_15', character: 'at',   word: 'Look at the star.',emoji: '⭐', color: pastel(4) },
];

const math: LearningItem[] = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `kg_m_${i + 1}`,
    character: `${i + 1}`,
    word: [
      'One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
      'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen','Twenty',
      'Twenty-One','Twenty-Two','Twenty-Three','Twenty-Four','Twenty-Five',
      'Twenty-Six','Twenty-Seven','Twenty-Eight','Twenty-Nine','Thirty',
      'Thirty-One','Thirty-Two','Thirty-Three','Thirty-Four','Thirty-Five',
      'Thirty-Six','Thirty-Seven','Thirty-Eight','Thirty-Nine','Forty',
      'Forty-One','Forty-Two','Forty-Three','Forty-Four','Forty-Five',
      'Forty-Six','Forty-Seven','Forty-Eight','Forty-Nine','Fifty',
    ][i],
    emoji: ['⭐','🌟','🎈','🌸','💫','🎯','🎉','🎊','🏆','💎'][i % 10],
    color: pastel(i),
  })),
  { id: 'kg_add_1', character: '1+1', word: 'equals 2',  emoji: '➕', color: pastel(0) },
  { id: 'kg_add_2', character: '2+1', word: 'equals 3',  emoji: '➕', color: pastel(1) },
  { id: 'kg_add_3', character: '2+2', word: 'equals 4',  emoji: '➕', color: pastel(2) },
  { id: 'kg_add_4', character: '3+1', word: 'equals 4',  emoji: '➕', color: pastel(3) },
  { id: 'kg_add_5', character: '3+2', word: 'equals 5',  emoji: '➕', color: pastel(4) },
  { id: 'kg_add_6', character: '4+1', word: 'equals 5',  emoji: '➕', color: pastel(5) },
  { id: 'kg_add_7', character: '4+2', word: 'equals 6',  emoji: '➕', color: pastel(6) },
  { id: 'kg_add_8', character: '5+3', word: 'equals 8',  emoji: '➕', color: pastel(7) },
  { id: 'kg_add_9', character: '5+5', word: 'equals 10', emoji: '➕', color: pastel(8) },
  { id: 'kg_add_10',character: '6+4', word: 'equals 10', emoji: '➕', color: pastel(9) },
];

const urdu: LearningItem[] = [
  { id: 'kg_ur_1',  character: 'میں',      word: 'I / Me',          wordRoman: 'Main',       emoji: '🙋', color: pastel(0) },
  { id: 'kg_ur_2',  character: 'تم',       word: 'You',             wordRoman: 'Tum',        emoji: '👉', color: pastel(1) },
  { id: 'kg_ur_3',  character: 'وہ',       word: 'He / She',        wordRoman: 'Woh',        emoji: '👤', color: pastel(2) },
  { id: 'kg_ur_4',  character: 'گھر',      word: 'Home',            wordRoman: 'Ghar',       emoji: '🏠', color: pastel(3) },
  { id: 'kg_ur_5',  character: 'سکول',     word: 'School',          wordRoman: 'School',     emoji: '🏫', color: pastel(4) },
  { id: 'kg_ur_6',  character: 'کتاب',     word: 'Book',            wordRoman: 'Kitab',      emoji: '📚', color: pastel(5) },
  { id: 'kg_ur_7',  character: 'قلم',      word: 'Pen',             wordRoman: 'Qalam',      emoji: '✏️', color: pastel(6) },
  { id: 'kg_ur_8',  character: 'پانی',     word: 'Water',           wordRoman: 'Paani',      emoji: '💧', color: pastel(7) },
  { id: 'kg_ur_9',  character: 'کھانا',    word: 'Food',            wordRoman: 'Khana',      emoji: '🍽️', color: pastel(8) },
  { id: 'kg_ur_10', character: 'سونا',     word: 'To Sleep',        wordRoman: 'Sona',       emoji: '😴', color: pastel(9) },
  { id: 'kg_ur_11', character: 'کھیلنا',   word: 'To Play',         wordRoman: 'Khelna',     emoji: '🎮', color: pastel(0) },
  { id: 'kg_ur_12', character: 'پڑھنا',    word: 'To Read',         wordRoman: 'Parhna',     emoji: '📖', color: pastel(1) },
  { id: 'kg_ur_13', character: 'لکھنا',    word: 'To Write',        wordRoman: 'Likhna',     emoji: '✍️', color: pastel(2) },
  { id: 'kg_ur_14', character: 'دوڑنا',    word: 'To Run',          wordRoman: 'Daurna',     emoji: '🏃', color: pastel(3) },
  { id: 'kg_ur_15', character: 'ہنسنا',    word: 'To Laugh',        wordRoman: 'Hansna',     emoji: '😄', color: pastel(4) },
];

const kgCurriculum: ClassCurriculum = {
  classId: 'kg',
  className: 'KG',
  emoji: '🌟',
  color: '#45B7D1',
  subjects: { english, math, urdu },
};

export default kgCurriculum;
