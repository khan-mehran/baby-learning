import { motion } from 'framer-motion';
import { ClassCurriculum } from '../types';

interface Props {
  curriculum: ClassCurriculum;
  onPress: () => void;
  index: number;
}

export default function ClassCard({ curriculum, onPress, index }: Props) {
  return (
    <motion.button
      onClick={onPress}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.08, type: 'spring', damping: 12, stiffness: 150 }}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04, y: -4 }}
      aria-label={`${curriculum.className} class`}
      style={{
        background: `linear-gradient(135deg, ${curriculum.color}, ${curriculum.color}cc)`,
        border: 'none',
        borderRadius: 20,
        padding: '24px 16px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        minHeight: 140,
        boxShadow: `0 8px 24px ${curriculum.color}55`,
        width: '100%',
      }}
    >
      <span style={{ fontSize: 48, lineHeight: 1 }}>{curriculum.emoji}</span>
      <span style={{
        fontSize: 18,
        fontWeight: 800,
        color: '#fff',
        textShadow: '0 1px 4px rgba(0,0,0,0.25)',
        fontFamily: "'Baloo 2', sans-serif",
      }}>
        {curriculum.className}
      </span>
    </motion.button>
  );
}
