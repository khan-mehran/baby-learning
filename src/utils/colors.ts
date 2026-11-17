export const PASTEL_COLORS = [
  '#FFB3BA',
  '#FFDFBA',
  '#FFFFBA',
  '#BAFFC9',
  '#BAE1FF',
  '#E8BAFF',
  '#FFB3E6',
  '#B3FFE6',
  '#FFE4B3',
  '#B3D4FF',
];

export const THEME = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  accent: '#FFE66D',
  english: '#667EEA',
  math: '#F7971E',
  urdu: '#11998E',
  bg: '#FFF9F0',
  cardBg: '#FFFFFF',
  text: '#2D3436',
  textLight: '#636E72',
  white: '#FFFFFF',
  shadow: 'rgba(0,0,0,0.12)',
};

export const CLASS_COLORS = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#DDA0DD',
];

/** [gradient start, gradient end, 3D edge] */
export type Candy = [string, string, string];

export const CLASS_CANDY: Candy[] = [
  ['#FF9A5C', '#FF4F79', '#C92F58'],
  ['#3FE3A8', '#0FB9B1', '#0A8A84'],
  ['#5CCBFA', '#2979FF', '#1A54C4'],
  ['#FFD93D', '#FF9F1C', '#D07A00'],
  ['#C98BFF', '#7B2FF7', '#4F1AB0'],
  ['#FF8CC0', '#F72585', '#B5125E'],
];

export const SUBJECT_CANDY: Record<'english' | 'math' | 'urdu', Candy> = {
  english: ['#5CCBFA', '#2979FF', '#1A54C4'],
  math:    ['#FFD93D', '#FF9F1C', '#D07A00'],
  urdu:    ['#3FE3A8', '#0FB9B1', '#0A8A84'],
};

export const GK_CANDY: Candy = ['#FF8CC0', '#F72585', '#B5125E'];

export function candyStyle([from, to, edge]: Candy) {
  return {
    background: `linear-gradient(145deg, ${from}, ${to})`,
    boxShadow: `0 8px 0 ${edge}, 0 18px 28px rgba(30, 10, 90, 0.3)`,
  };
}

export function pastel(index: number): string {
  return PASTEL_COLORS[index % PASTEL_COLORS.length];
}
