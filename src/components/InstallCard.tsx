import { useState } from 'react';
import { motion } from 'framer-motion';
import { promptInstall, useInstallState } from '../pwa';

/** "Download the app" card. Only renders where installing is actually possible. */
export default function InstallCard() {
  const state = useInstallState();
  const [showSteps, setShowSteps] = useState(false);

  if (state !== 'prompt' && state !== 'ios') return null;

  return (
    <motion.div
      className="install-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, type: 'spring', damping: 16 }}
    >
      <div className="install-card__row">
        <img className="install-card__icon" src="/icon-192.png" alt="" />
        <div className="install-card__text">
          <strong>Get the app!</strong>
          <span>Play anytime, even offline.</span>
        </div>
        <motion.button
          className="btn-pill btn-sun"
          whileTap={{ scale: 0.92, y: 3 }}
          onClick={() => (state === 'prompt' ? promptInstall() : setShowSteps((s) => !s))}
          aria-expanded={state === 'ios' ? showSteps : undefined}
        >
          📲 Install
        </motion.button>
      </div>

      {state === 'ios' && showSteps && (
        <ol className="install-steps">
          <li><b>1</b> Open this page in Safari</li>
          <li><b>2</b> Tap the Share button</li>
          <li><b>3</b> Choose “Add to Home Screen”, then tap Add</li>
        </ol>
      )}
    </motion.div>
  );
}
