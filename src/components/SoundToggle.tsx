import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';

export default function SoundToggle() {
  const isMuted = useAppStore((s) => s.isMuted);
  const toggleMute = useAppStore((s) => s.toggleMute);

  return (
    <motion.button
      className="btn-round"
      onClick={toggleMute}
      whileTap={{ scale: 0.85, y: 3 }}
      whileHover={{ scale: 1.08 }}
      animate={{ rotate: isMuted ? [0, -12, 12, 0] : 0 }}
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? '🔇' : '🔊'}
    </motion.button>
  );
}
