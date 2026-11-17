import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import CategoryCard from '../components/CategoryCard';
import SoundToggle from '../components/SoundToggle';
import { GK_TOPICS } from '../data';

export default function GeneralKnowledgePage() {
  const navigate = useNavigate();

  useEffect(() => { document.title = 'General Knowledge — Baby Learn'; }, []);

  return (
    <div className="page page--narrow">
      <div className="topbar">
        <BackButton onPress={() => navigate(-1)} />
        <SoundToggle />
      </div>

      <motion.div
        className="class-head"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 12 }}
      >
        <div className="emoji-bubble bob">🌍</div>
        <h2>General Knowledge</h2>
        <p>Pick a card to explore!</p>
      </motion.div>

      <div className="class-grid class-grid--two">
        {GK_TOPICS.map((topic, index) => (
          <CategoryCard
            key={topic.id}
            label={topic.title}
            emoji={topic.emoji}
            index={index}
            onPress={() => navigate(`/learn/${topic.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
