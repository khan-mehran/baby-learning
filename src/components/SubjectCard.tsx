import { motion } from 'framer-motion';
import { Candy, candyStyle } from '../utils/colors';

interface Props {
  label: string;
  emoji: string;
  subtitle: string;
  candy: Candy;
  isUrdu?: boolean;
  onPress: () => void;
  index: number;
}

export default function SubjectCard({ label, emoji, subtitle, candy, isUrdu, onPress, index }: Props) {
  return (
    <motion.button
      className="chunky subject-card"
      onClick={onPress}
      initial={{ x: index % 2 ? 60 : -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', damping: 13, stiffness: 140 }}
      whileTap={{ scale: 0.95, y: 5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      aria-label={label}
      style={candyStyle(candy)}
    >
      <span className="emoji-bubble">
        <span className="wobble" style={{ animationDelay: `${index * -0.5}s` }}>{emoji}</span>
      </span>
      <span className="subject-card__text">
        <span className={`subject-card__label${isUrdu ? ' is-urdu' : ''}`}>{label}</span>
        <span className={`subject-card__sub${isUrdu ? ' is-urdu' : ''}`}>{subtitle}</span>
      </span>
      <span className="subject-card__go" aria-hidden="true">→</span>
    </motion.button>
  );
}
