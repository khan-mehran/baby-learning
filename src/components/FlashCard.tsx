import { AnimatePresence, motion } from 'framer-motion';
import { LearningItem, Subject } from '../types';
import { THEME } from '../utils/colors';

interface Props {
  item: LearningItem;
  subject: Subject;
  currentIndex: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  direction: number;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.92 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.92 }),
};

export default function FlashCard({ item, subject, currentIndex, total, onNext, onPrev, direction }: Props) {
  const isUrdu = subject === 'urdu';
  const isTable = subject === 'math' && (item.character.includes('×') || item.character.includes('÷'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={item.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          style={{
            backgroundColor: item.color,
            borderRadius: 28,
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            width: '100%',
            maxWidth: 480,
            boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
            minHeight: 360,
            justifyContent: 'center',
          }}
        >
          <span style={{
            fontSize: isTable ? 42 : isUrdu ? 72 : 96,
            fontWeight: 900,
            color: THEME.text,
            textAlign: 'center',
            lineHeight: 1.1,
            fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Baloo 2', sans-serif",
            direction: isUrdu ? 'rtl' : 'ltr',
            wordBreak: 'break-word',
          }}>
            {item.character}
          </span>

          <span style={{ fontSize: 64, lineHeight: 1 }}>{item.emoji}</span>

          <span style={{
            fontSize: isUrdu ? 22 : 20,
            fontWeight: 600,
            color: THEME.text,
            textAlign: 'center',
            maxWidth: 340,
            lineHeight: 1.5,
            direction: isUrdu ? 'rtl' : 'ltr',
          }}>
            {item.word}
          </span>

          {item.wordRoman && (
            <span style={{ fontSize: 15, color: THEME.textLight, fontStyle: 'italic' }}>
              {item.wordRoman}
            </span>
          )}

          <span style={{ fontSize: 13, color: THEME.textLight, marginTop: 8 }}>
            {currentIndex + 1} of {total}
          </span>
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', gap: 16 }}>
        <motion.button
          onClick={onPrev}
          disabled={currentIndex === 0}
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.04 }}
          style={{
            padding: '14px 32px',
            borderRadius: 50,
            border: `2px solid ${THEME.primary}`,
            backgroundColor: 'transparent',
            color: THEME.primary,
            fontSize: 17,
            fontWeight: 700,
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === 0 ? 0.4 : 1,
            fontFamily: "'Baloo 2', sans-serif",
          }}
        >
          ◀  Prev
        </motion.button>

        <motion.button
          onClick={onNext}
          disabled={currentIndex === total - 1}
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.04 }}
          style={{
            padding: '14px 32px',
            borderRadius: 50,
            border: 'none',
            backgroundColor: THEME.primary,
            color: '#fff',
            fontSize: 17,
            fontWeight: 700,
            cursor: currentIndex === total - 1 ? 'not-allowed' : 'pointer',
            opacity: currentIndex === total - 1 ? 0.4 : 1,
            boxShadow: `0 4px 16px ${THEME.primary}55`,
            fontFamily: "'Baloo 2', sans-serif",
          }}
        >
          Next  ▶
        </motion.button>
      </div>

      <p style={{ fontSize: 12, color: THEME.textLight, margin: 0 }}>
        Use arrow keys ← → to navigate
      </p>
    </div>
  );
}
