import { motion } from 'framer-motion';

export type Tab = 'grid' | 'flashcard';

interface Props {
  activeTab: Tab;
  labels: [string, string];
  onTabChange: (tab: Tab) => void;
}

const ORDER: Tab[] = ['grid', 'flashcard'];

export default function NavTabs({ activeTab, labels, onTabChange }: Props) {
  return (
    <div className="tabs" role="tablist">
      {ORDER.map((tab, i) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            className={`tabs__btn${isActive ? ' is-active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="tabs__pill"
                transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              />
            )}
            <span className="tabs__label">{labels[i]}</span>
          </button>
        );
      })}
    </div>
  );
}
