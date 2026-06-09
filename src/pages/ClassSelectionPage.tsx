import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ClassCard from '../components/ClassCard';
import SoundToggle from '../components/SoundToggle';
import { ALL_CURRICULA } from '../data';
import { THEME } from '../utils/colors';

export default function ClassSelectionPage() {
  const navigate = useNavigate();

  useEffect(() => { document.title = '🍼 Baby Learn'; }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.bg }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingTop: 32,
          paddingBottom: 16,
        }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 900,
              color: THEME.primary,
              fontFamily: "'Baloo 2', sans-serif",
              letterSpacing: -0.5,
            }}>
              🍼 Baby Learn
            </h1>
            <p style={{
              margin: '4px 0 0',
              fontSize: 15,
              color: THEME.textLight,
              fontFamily: "'Baloo 2', sans-serif",
            }}>
              Choose your class to start learning!
            </p>
          </motion.div>
          <SoundToggle />
        </div>

        {/* Grid */}
        <div className="class-grid">
          {ALL_CURRICULA.map((curriculum, index) => (
            <ClassCard
              key={curriculum.classId}
              curriculum={curriculum}
              index={index}
              onPress={() => navigate(`/class/${curriculum.classId}`)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
