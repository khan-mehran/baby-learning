import { Topic } from '../types';
import { pastel } from '../utils/colors';

// letter, letter name (Urdu), letter name (Roman), word (Urdu), word (Roman), emoji,
// then the letter name and word in Devanagari: spoken Hindi and Urdu sound the same,
// so a Hindi voice can read these aloud on devices that have no Urdu voice.
const HAROOF: Array<[string, string, string, string, string, string, string, string]> = [
  ['ا', 'الف', 'Alif', 'انار', 'Anaar', '🍎', 'अलिफ़', 'अनार'],
  ['ب', 'بے', 'Bay', 'بکری', 'Bakri', '🐐', 'बे', 'बकरी'],
  ['پ', 'پے', 'Pay', 'پانی', 'Paani', '💧', 'पे', 'पानी'],
  ['ت', 'تے', 'Tay', 'تتلی', 'Titli', '🦋', 'ते', 'तितली'],
  ['ٹ', 'ٹے', 'Ttay', 'ٹماٹر', 'Tamaatar', '🍅', 'टे', 'टमाटर'],
  ['ث', 'ثے', 'Say', 'ثمر', 'Samar', '🍒', 'से', 'समर'],
  ['ج', 'جیم', 'Jeem', 'جہاز', 'Jahaaz', '✈️', 'जीम', 'जहाज़'],
  ['چ', 'چے', 'Chay', 'چاند', 'Chaand', '🌙', 'चे', 'चाँद'],
  ['ح', 'حے', 'Hay', 'حلوہ', 'Halwa', '🍮', 'हे', 'हलवा'],
  ['خ', 'خے', 'Khay', 'خرگوش', 'Khargosh', '🐇', 'ख़े', 'ख़रगोश'],
  ['د', 'دال', 'Daal', 'درخت', 'Darakht', '🌳', 'दाल', 'दरख़्त'],
  ['ڈ', 'ڈال', 'Ddaal', 'ڈھول', 'Dhol', '🥁', 'डाल', 'ढोल'],
  ['ذ', 'ذال', 'Zaal', 'ذرہ', 'Zarra', '✨', 'ज़ाल', 'ज़र्रा'],
  ['ر', 'رے', 'Ray', 'روٹی', 'Roti', '🍞', 'रे', 'रोटी'],
  ['ڑ', 'ڑے', 'Rray', 'پہاڑ', 'Pahaar', '⛰️', 'ड़े', 'पहाड़'],
  ['ز', 'زے', 'Zay', 'زیبرا', 'Zebra', '🦓', 'ज़े', 'ज़ेबरा'],
  ['ژ', 'ژے', 'Zhay', 'ژالہ', 'Zhaala', '❄️', 'झे', 'झाला'],
  ['س', 'سین', 'Seen', 'سیب', 'Saib', '🍏', 'सीन', 'सेब'],
  ['ش', 'شین', 'Sheen', 'شیر', 'Sher', '🦁', 'शीन', 'शेर'],
  ['ص', 'صاد', 'Suaad', 'صابن', 'Saabun', '🧼', 'स्वाद', 'साबुन'],
  ['ض', 'ضاد', 'Zuaad', 'ضرب', 'Zarb', '✖️', 'ज़्वाद', 'ज़र्ब'],
  ['ط', 'طوئے', 'Toay', 'طوطا', 'Tota', '🦜', 'तोए', 'तोता'],
  ['ظ', 'ظوئے', 'Zoay', 'ظرف', 'Zarf', '🏺', 'ज़ोए', 'ज़र्फ़'],
  ['ع', 'عین', 'Ain', 'عینک', 'Ainak', '👓', 'ऐन', 'ऐनक'],
  ['غ', 'غین', 'Ghain', 'غبارہ', 'Ghubaara', '🎈', 'ग़ैन', 'ग़ुब्बारा'],
  ['ف', 'فے', 'Fay', 'فوارہ', 'Fawwaara', '⛲', 'फ़े', 'फ़व्वारा'],
  ['ق', 'قاف', 'Qaaf', 'قلم', 'Qalam', '✏️', 'क़ाफ़', 'क़लम'],
  ['ک', 'کاف', 'Kaaf', 'کتاب', 'Kitaab', '📚', 'काफ़', 'किताब'],
  ['گ', 'گاف', 'Gaaf', 'گائے', 'Gaaye', '🐄', 'गाफ़', 'गाय'],
  ['ل', 'لام', 'Laam', 'لیموں', 'Leemoon', '🍋', 'लाम', 'लीमू'],
  ['م', 'میم', 'Meem', 'مچھلی', 'Machhli', '🐟', 'मीम', 'मछली'],
  ['ن', 'نون', 'Noon', 'ناریل', 'Naariyal', '🥥', 'नून', 'नारियल'],
  ['و', 'واؤ', 'Wao', 'وادی', 'Waadi', '🏞️', 'वाओ', 'वादी'],
  ['ہ', 'ہے', 'Hay', 'ہاتھی', 'Haathi', '🐘', 'हे', 'हाथी'],
  ['ھ', 'دو چشمی ہے', 'Do chashmi hay', 'گھر', 'Ghar', '🏠', 'दो चश्मी हे', 'घर'],
  ['ء', 'ہمزہ', 'Hamza', 'چائے', 'Chaaye', '☕', 'हमज़ा', 'चाय'],
  ['ی', 'چھوٹی یے', 'Choti yay', 'یاقوت', 'Yaaqoot', '💎', 'छोटी ये', 'याक़ूत'],
  ['ے', 'بڑی یے', 'Bari yay', 'کیلے', 'Kelay', '🍌', 'बड़ी ये', 'केले'],
];

const urdu: Topic = {
  id: 'urdu',
  title: 'اردو',
  emoji: '🌙',
  lang: 'ur',
  kind: 'letters',
  tabs: ['🌙 Alif Bay Pay', '🍎 Alif Anaar'],
  items: HAROOF.map(([letter, nameUr, nameRoman, word, wordRoman, emoji, nameHi, wordHi], i) => ({
    id: `ur_${i + 1}`,
    character: letter,
    word,
    wordRoman,
    emoji,
    color: pastel(i),
    say: {
      char: { text: nameRoman, ur: nameUr, hi: nameHi },
      full: { text: `${nameRoman}. ${wordRoman}`, ur: `${nameUr}، ${word}`, hi: `${nameHi}, ${wordHi}` },
    },
  })),
};

export default urdu;
