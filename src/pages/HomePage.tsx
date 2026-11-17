import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InstallCard from '../components/InstallCard';
import SubjectCard from '../components/SubjectCard';
import SoundToggle from '../components/SoundToggle';
import { Candy, GK_CANDY, SUBJECT_CANDY } from '../utils/colors';

const SUBJECTS: Array<{
  path: string;
  label: string;
  emoji: string;
  subtitle: string;
  candy: Candy;
  isUrdu?: boolean;
}> = [
  { path: '/learn/english', label: 'English', emoji: '🔤', subtitle: 'A B C and A for Apple', candy: SUBJECT_CANDY.english },
  { path: '/learn/math', label: 'Math', emoji: '🔢', subtitle: 'Numbers and counting', candy: SUBJECT_CANDY.math },
  { path: '/learn/urdu', label: 'اردو', emoji: '🌙', subtitle: 'الف، ب، پ اور الفاظ', candy: SUBJECT_CANDY.urdu, isUrdu: true },
  { path: '/gk', label: 'General Knowledge', emoji: '🌍', subtitle: 'Animals, fruits, colors & shapes', candy: GK_CANDY },
];

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => { document.title = 'Baby Learn'; }, []);

  return (
    <div className="page page--narrow">
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 14 }}
      >
        <img className="hero__logo bob" src="/icon.svg" alt="" />
        <div className="hero__text">
          <h1 className="hero__title">Baby <em>Learn</em></h1>
          <p className="hero__sub">Tap, listen and learn! 🎉</p>
        </div>
        <SoundToggle />
      </motion.header>

      <InstallCard />

      <h2 className="section-label">👇 What do you want to learn?</h2>

      <div className="subject-list">
        {SUBJECTS.map(({ path, ...card }, index) => (
          <SubjectCard key={path} {...card} index={index} onPress={() => navigate(path)} />
        ))}
      </div>
    </div>
  );
}
