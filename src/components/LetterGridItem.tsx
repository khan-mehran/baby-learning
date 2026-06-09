import { motion } from 'framer-motion';
import { LearningItem } from '../types';

interface Props {
  item: LearningItem;
  onPress: (item: LearningItem) => void;
  isUrdu?: boolean;
}

export default function LetterGridItem({ item, onPress, isUrdu }: Props) {
  return (
    <motion.button
      onClick={() => onPress(item)}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.06, y: -3 }}
      animate={{ scale: 1 }}
      aria-label={`${item.character} for ${item.word}`}
      style={{
        backgroundColor: item.color,
        border: 'none',
        borderRadius: 16,
        padding: '12px 6px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        aspectRatio: '1 / 1',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        width: '100%',
        minHeight: 80,
        transition: 'box-shadow 0.15s ease',
      }}
    >
      <span style={{
        fontSize: 'clamp(18px, 4vw, 32px)',
        fontWeight: 900,
        color: '#2D3436',
        lineHeight: 1.1,
        fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Baloo 2', sans-serif",
        direction: isUrdu ? 'rtl' : 'ltr',
      }}>
        {item.character}
      </span>
      <span style={{ fontSize: 'clamp(14px, 2.5vw, 22px)', lineHeight: 1 }}>
        {item.emoji}
      </span>
    </motion.button>
  );
}
