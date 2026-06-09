import { motion } from 'framer-motion';
import { THEME } from '../utils/colors';

type Tab = 'grid' | 'flashcard';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TABS: { tab: Tab; label: string }[] = [
  { tab: 'grid',      label: '📚  All' },
  { tab: 'flashcard', label: '▶️  Learn One' },
];

export default function NavTabs({ activeTab, onTabChange }: Props) {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: 14,
      padding: 4,
      gap: 4,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      position: 'relative',
    }}>
      {TABS.map(({ tab, label }) => {
        const isActive = tab === activeTab;
        return (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab)}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
            style={{
              flex: 1,
              padding: '11px 20px',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'Baloo 2', sans-serif",
              position: 'relative',
              backgroundColor: isActive ? `${THEME.primary}18` : 'transparent',
              color: isActive ? THEME.primary : THEME.textLight,
              transition: 'all 0.2s ease',
            }}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="tab-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '10%',
                  right: '10%',
                  height: 3,
                  backgroundColor: THEME.primary,
                  borderRadius: 2,
                }}
                transition={{ type: 'spring', damping: 20 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
