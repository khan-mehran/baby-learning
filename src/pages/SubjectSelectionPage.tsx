import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';
import SoundToggle from '../components/SoundToggle';
import { getCurriculum } from '../data';
import { Subject } from '../types';
import { THEME } from '../utils/colors';

const SUBJECTS: Array<{
  subject: Subject;
  label: string;
  emoji: string;
  color: string;
  subtitle: string;
}> = [
  { subject: 'english', label: 'English', emoji: '🇬🇧', color: THEME.english, subtitle: 'Alphabets, Words & Stories' },
  { subject: 'math',    label: 'Math',    emoji: '🔢',   color: THEME.math,    subtitle: 'Numbers, Shapes & Tables' },
  { subject: 'urdu',    label: 'اردو',     emoji: '🌙',   color: THEME.urdu,    subtitle: 'حروف، الفاظ اور جملے' },
];

export default function SubjectSelectionPage() {
  const navigate = useNavigate();
  const { classId } = useParams<{ classId: string }>();
  const curriculum = getCurriculum(classId ?? '');

  useEffect(() => {
    document.title = `${curriculum?.className ?? 'Class'} — Baby Learn`;
  }, [curriculum]);

  if (!curriculum) return null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.bg }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px' }}>

        {/* Top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 24,
          paddingBottom: 8,
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
            }}
          >
            ◀  Back
          </motion.button>
          <SoundToggle />
        </div>

        {/* Class header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', paddingBottom: 8 }}
        >
          <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 8 }}>{curriculum.emoji}</div>
          <h2 style={{
            margin: '0 0 4px',
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 900,
            color: THEME.text,
            fontFamily: "'Baloo 2', sans-serif",
          }}>
            {curriculum.className}
          </h2>
          <p style={{ margin: 0, color: THEME.textLight, fontSize: 15 }}>
            What do you want to learn?
          </p>
        </motion.div>

        {/* Subject cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 16, paddingBottom: 40 }}>
          {SUBJECTS.map((s, index) => (
            <SubjectCard
              key={s.subject}
              {...s}
              index={index}
              onPress={() => navigate(`/class/${classId}/${s.subject}`)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
