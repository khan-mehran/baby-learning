import { motion } from 'framer-motion';

export default function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <motion.button
      className="btn-round"
      onClick={onPress}
      whileTap={{ scale: 0.88, y: 3 }}
      whileHover={{ scale: 1.08 }}
      aria-label="Go back"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </motion.button>
  );
}
