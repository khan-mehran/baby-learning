import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavTabs from '../components/NavTabs';
import LetterGridItem from '../components/LetterGridItem';
import FlashCard from '../components/FlashCard';
import SoundToggle from '../components/SoundToggle';
import ProgressDots from '../components/ProgressDots';
import { getCurriculum } from '../data';
import { LearningItem, Subject } from '../types';
import { THEME } from '../utils/colors';
import { useAudio } from '../hooks/useAudio';

type Tab = 'grid' | 'flashcard';

const SUBJECT_LABELS: Record<string, string> = {
  english: '🇬🇧 English',
  math: '🔢 Math',
  urdu: '🌙 اردو',
};

export default function LearningPage() {
  const navigate = useNavigate();
  const { classId, subject } = useParams<{ classId: string; subject: string }>();

  const [activeTab, setActiveTab] = useState<Tab>('grid');
  const [flashIndex, setFlashIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { speakItem } = useAudio();
  const autoPlayedRef = useRef('');

  const curriculum = getCurriculum(classId ?? '');
  const subjectKey = (subject ?? 'english') as Subject;
  const items: LearningItem[] = curriculum?.subjects[subjectKey] ?? [];
  const isUrdu = subjectKey === 'urdu';
  const currentItem = items[flashIndex];

  useEffect(() => {
    document.title = `${SUBJECT_LABELS[subjectKey] ?? ''} — Baby Learn`;
  }, [subjectKey]);

  useEffect(() => {
    if (activeTab === 'flashcard' && currentItem) {
      if (autoPlayedRef.current !== currentItem.id) {
        autoPlayedRef.current = currentItem.id;
        speakItem(currentItem, subjectKey);
      }
    }
  }, [activeTab, flashIndex, currentItem, speakItem, subjectKey]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeTab !== 'flashcard') return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeTab, flashIndex, items.length]);

  const handleGridPress = useCallback(
    (item: LearningItem) => speakItem(item, subjectKey),
    [speakItem, subjectKey],
  );

  const handleNext = useCallback(() => {
    if (flashIndex < items.length - 1) {
      setDirection(1);
      setFlashIndex((i) => i + 1);
    }
  }, [flashIndex, items.length]);

  const handlePrev = useCallback(() => {
    if (flashIndex > 0) {
      setDirection(-1);
      setFlashIndex((i) => i - 1);
    }
  }, [flashIndex]);

  if (!curriculum) return null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.bg }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>

        {/* Top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 8,
          gap: 12,
        }}>
          <motion.button
            onClick={() => navigate(-1)}
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.04 }}
            style={{
              padding: '8px 16px',
              borderRadius: 12,
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.07)',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 600,
              color: THEME.text,
              fontFamily: "'Baloo 2', sans-serif",
              flexShrink: 0,
            }}
          >
            ◀  Back
          </motion.button>

          <span style={{
            fontSize: 18,
            fontWeight: 700,
            color: THEME.text,
            fontFamily: "'Baloo 2', sans-serif",
            flex: 1,
            textAlign: 'center',
          }}>
            {SUBJECT_LABELS[subjectKey]}
          </span>

          <SoundToggle />
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: 16 }}>
          <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Content */}
        {activeTab === 'grid' ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="letter-grid"
          >
            {items.map((item) => (
              <LetterGridItem
                key={item.id}
                item={item}
                onPress={handleGridPress}
                isUrdu={isUrdu}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 40,
            }}
          >
            <ProgressDots total={items.length} current={flashIndex} />
            <div style={{ marginTop: 16, width: '100%', maxWidth: 520, padding: '0 8px' }}>
              {currentItem && (
                <FlashCard
                  item={currentItem}
                  subject={subjectKey}
                  currentIndex={flashIndex}
                  total={items.length}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  direction={direction}
                />
              )}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
