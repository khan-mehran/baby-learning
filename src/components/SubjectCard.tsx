import { motion } from 'framer-motion';
import { Subject } from '../types';

interface Props {
  subject: Subject;
  label: string;
  emoji: string;
  color: string;
  subtitle: string;
  onPress: () => void;
  index: number;
}

export default function SubjectCard({ label, emoji, color, subtitle, onPress, index }: Props) {
  return (
    <motion.button
      onClick={onPress}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.12, type: 'spring', damping: 10, stiffness: 130 }}
      whileTap={{ scale: 0.93 }}
      whileHover={{ scale: 1.02, y: -6 }}
      aria-label={`${label} subject`}
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        border: 'none',
        borderRadius: 24,
        padding: '32px 24px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        boxShadow: `0 12px 32px ${color}44`,
        width: '100%',
      }}
    >
      <span style={{ fontSize: 64, lineHeight: 1 }}>{emoji}</span>
      <span style={{
        fontSize: 30,
        fontWeight: 900,
        color: '#fff',
        textShadow: '0 2px 6px rgba(0,0,0,0.2)',
        fontFamily: "'Baloo 2', sans-serif",
      }}>
        {label}
      </span>
      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{subtitle}</span>
    </motion.button>
  );
}
