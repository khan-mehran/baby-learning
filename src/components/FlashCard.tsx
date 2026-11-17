import { AnimatePresence, motion } from 'framer-motion';
import { LearningItem } from '../types';

interface Props {
  item: LearningItem;
  isUrdu: boolean;
  currentIndex: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onSpeak: () => void;
  direction: number;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 140 : -140, opacity: 0, scale: 0.9, rotate: dir > 0 ? 6 : -6 }),
  center: { x: 0, opacity: 1, scale: 1, rotate: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? -140 : 140, opacity: 0, scale: 0.9, rotate: dir > 0 ? -6 : 6 }),
};

const SWIPE_DISTANCE = 70;

/** Big for a single letter, smaller as the text gets longer. */
function charSize(length: number, isUrdu: boolean): string {
  // Nastaliq script is much taller than Latin at the same font size.
  const k = isUrdu ? 0.6 : 1;
  const size = (px: number, vw: number) => `min(${px * k}px, ${vw * k}vw)`;
  if (length <= 2) return size(120, 30);
  if (length <= 6) return size(76, 17);
  if (length <= 14) return size(48, 10.5);
  return size(34, 8);
}

/** A row of counting pictures (math) has to shrink to fit the card. */
function emojiSize(count: number): number {
  if (count > 10) return 24;
  if (count > 4) return 32;
  return 62;
}

export default function FlashCard({ item, isUrdu, currentIndex, total, onNext, onPrev, onSpeak, direction }: Props) {
  const emojiCount = [...item.emoji.replace(/️/g, '')].length;

  return (
    <div className="flash">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={item.id}
          className="flash__card"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', damping: 20, stiffness: 220 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.35}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_DISTANCE) onNext();
            else if (info.offset.x > SWIPE_DISTANCE) onPrev();
          }}
          style={{ backgroundColor: item.color }}
        >
          <span
            className={`flash__char${isUrdu ? ' is-urdu' : ''}`}
            style={{ fontSize: charSize(item.character.length, isUrdu) }}
          >
            {item.character}
          </span>

          <span className="flash__emoji bob" style={{ fontSize: emojiSize(emojiCount) }}>
            {item.emoji}
          </span>

          <span className={`flash__word${isUrdu ? ' is-urdu' : ''}`}>{item.word}</span>

          {item.wordRoman && <span className="flash__roman">{item.wordRoman}</span>}

          <motion.button
            className="flash__hear"
            whileTap={{ scale: 0.9, y: 2 }}
            onClick={onSpeak}
            onPointerDownCapture={(e) => e.stopPropagation()}
          >
            🔊 Hear it
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <div className="flash__nav">
        <motion.button
          className="btn-pill btn-white"
          onClick={onPrev}
          disabled={currentIndex === 0}
          whileTap={{ scale: 0.94, y: 3 }}
        >
          ← Back
        </motion.button>
        <motion.button
          className="btn-pill btn-sun"
          onClick={onNext}
          disabled={currentIndex === total - 1}
          whileTap={{ scale: 0.94, y: 3 }}
        >
          Next →
        </motion.button>
      </div>

      <p className="flash__hint">
        <span className="touch">👆 Swipe the card to move</span>
        <span className="keys">Use the ← → arrow keys to move</span>
      </p>
    </div>
  );
}
