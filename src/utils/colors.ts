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

export function pastel(index: number): string {
  return PASTEL_COLORS[index % PASTEL_COLORS.length];
}
