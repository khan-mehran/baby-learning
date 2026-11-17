import { useState, useCallback, useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import NavTabs, { Tab } from '../components/NavTabs';
import LetterGridItem from '../components/LetterGridItem';
import FlashCard from '../components/FlashCard';
import SoundToggle from '../components/SoundToggle';
import ProgressDots from '../components/ProgressDots';
import { getTopic } from '../data';
import { LearningItem } from '../types';
import { useAudio } from '../hooks/useAudio';

export default function LearningPage() {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopic(topicId ?? '');

  const [activeTab, setActiveTab] = useState<Tab>('grid');
  const [flashIndex, setFlashIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { speak, stop } = useAudio();
  const autoPlayedRef = useRef('');

  const items: LearningItem[] = topic?.items ?? [];
  const lang = topic?.lang ?? 'en';
  const isUrdu = lang === 'ur';
  const currentItem = items[flashIndex];

  useEffect(() => {
    if (topic) document.title = `${topic.title} — Baby Learn`;
  }, [topic]);

  const speakCard = useCallback(
    (item: LearningItem) =>
      speak(item.say.full, lang, item.sound ? { src: item.sound, fallback: item.word } : undefined),
    [speak, lang],
  );

  // One by One: say "A for Apple" each time a new card appears.
  useEffect(() => {
    if (activeTab !== 'flashcard') {
      autoPlayedRef.current = '';
      return;
    }
    if (currentItem && autoPlayedRef.current !== currentItem.id) {
      autoPlayedRef.current = currentItem.id;
      speakCard(currentItem);
    }
  }, [activeTab, currentItem, speakCard]);

  // Stop talking when the tab changes or the page is left.
  useEffect(() => stop, [activeTab, stop]);

  // First tab: say only the letter / number / name.
  const handleGridPress = useCallback(
    (item: LearningItem) => speak(item.say.char, lang),
    [speak, lang],
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeTab !== 'flashcard') return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeTab, handleNext, handlePrev]);

  if (!topic) return <Navigate to="/" replace />;

  const withPicture = topic.kind === 'things';

  return (
    <div className="page">
      <div className="topbar">
        <BackButton onPress={() => navigate(-1)} />
        <span className="topbar__title">{topic.emoji} {topic.title}</span>
        <SoundToggle />
      </div>

      <NavTabs activeTab={activeTab} labels={topic.tabs} onTabChange={setActiveTab} />

      {activeTab === 'grid' ? (
        <motion.div
          key="grid"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`letter-grid${withPicture ? ' letter-grid--pictures' : ''}`}
          // Urdu reads right to left, so the alphabet starts at the top right.
          dir={isUrdu ? 'rtl' : 'ltr'}
        >
          {items.map((item) => (
            <LetterGridItem
              key={item.id}
              item={item}
              onPress={handleGridPress}
              isUrdu={isUrdu}
              withPicture={withPicture}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div key="flash" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <ProgressDots total={items.length} current={flashIndex} />
          {currentItem && (
            <FlashCard
              item={currentItem}
              isUrdu={isUrdu}
              currentIndex={flashIndex}
              total={items.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onSpeak={() => speakCard(currentItem)}
              direction={direction}
            />
          )}
        </motion.div>
      )}
    </div>
  );
}
