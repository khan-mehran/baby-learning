import { motion } from 'framer-motion';
import { CLASS_CANDY, candyStyle } from '../utils/colors';

interface Props {
  label: string;
  emoji: string;
  onPress: () => void;
  index: number;
}

export default function CategoryCard({ label, emoji, onPress, index }: Props) {
  return (
    <motion.button
      className="chunky class-card"
      onClick={onPress}
      initial={{ scale: 0, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ delay: index * 0.07, type: 'spring', damping: 11, stiffness: 160 }}
      whileTap={{ scale: 0.93, y: 5 }}
      whileHover={{ scale: 1.04, y: -5 }}
      aria-label={label}
      style={candyStyle(CLASS_CANDY[index % CLASS_CANDY.length])}
    >
      <span className="emoji-bubble">
        <span className="wobble" style={{ animationDelay: `${index * -0.4}s` }}>{emoji}</span>
      </span>
      <span className="class-card__name">{label}</span>
    </motion.button>
  );
}
