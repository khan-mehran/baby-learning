interface Props {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: Props) {
  const pct = total > 0 ? ((current + 1) / total) * 100 : 0;
  return (
    <div className="progress">
      <div
        className="progress__track"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current + 1}
      >
        <div className="progress__fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress__count">⭐ {current + 1} / {total}</span>
    </div>
  );
}
