import { THEME } from '../utils/colors';

interface Props {
  total: number;
  current: number;
}

const MAX = 30;

export default function ProgressDots({ total, current }: Props) {
  const shown = Math.min(total, MAX);
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      justifyContent: 'center',
      padding: '8px 16px',
    }}>
      {Array.from({ length: shown }, (_, i) => {
        const isActive = i === current % MAX;
        return (
          <div
            key={i}
            style={{
              width: isActive ? 12 : 8,
              height: isActive ? 12 : 8,
              borderRadius: '50%',
              backgroundColor: isActive ? THEME.primary : `${THEME.primary}40`,
              transition: 'all 0.2s ease',
            }}
          />
        );
      })}
    </div>
  );
}
