import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';

export default function SoundToggle() {
  const isMuted = useAppStore((s) => s.isMuted);
  const toggleMute = useAppStore((s) => s.toggleMute);

  return (
    <motion.button
      onClick={toggleMute}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      animate={{ rotate: isMuted ? [0, -10, 10, 0] : 0 }}
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'rgba(255,255,255,0.9)',
        cursor: 'pointer',
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        flexShrink: 0,
      }}
    >
      {isMuted ? '🔇' : '🔊'}
    </motion.button>
  );
}
