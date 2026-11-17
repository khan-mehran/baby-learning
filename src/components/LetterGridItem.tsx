import { motion } from 'framer-motion';
import { LearningItem } from '../types';

interface Props {
  item: LearningItem;
  onPress: (item: LearningItem) => void;
  isUrdu?: boolean;
  /** Show the picture above the name (General Knowledge) instead of the letter alone. */
  withPicture?: boolean;
}

export default function LetterGridItem({ item, onPress, isUrdu, withPicture }: Props) {
  return (
    <motion.button
      className={`tile${withPicture ? ' tile--picture' : ''}`}
      onClick={() => onPress(item)}
      whileTap={{ scale: 0.88, y: 4, rotate: -3 }}
      whileHover={{ scale: 1.06, y: -3 }}
      aria-label={item.say.char.text}
      style={{ backgroundColor: item.color }}
    >
      {withPicture && <span className="tile__emoji">{item.emoji}</span>}
      <span className={`tile__char${isUrdu ? ' is-urdu' : ''}`}>{item.character}</span>
    </motion.button>
  );
}
