const FLOATERS = [
  { e: '⭐', top: '7%',  left: '6%',  size: 30, dur: 5.5, delay: 0 },
  { e: '☁️', top: '14%', left: '72%', size: 54, dur: 8,   delay: -2 },
  { e: '🎈', top: '34%', left: '88%', size: 38, dur: 6.5, delay: -1 },
  { e: '✨', top: '46%', left: '4%',  size: 28, dur: 4.5, delay: -3 },
  { e: '🌈', top: '68%', left: '80%', size: 46, dur: 7.5, delay: -4 },
  { e: '🪁', top: '78%', left: '8%',  size: 40, dur: 6,   delay: -2.5 },
  { e: '☁️', top: '90%', left: '44%', size: 50, dur: 9,   delay: -5 },
  { e: '⭐', top: '58%', left: '50%', size: 22, dur: 5,   delay: -1.5 },
];

/** Fixed, purely decorative animated background shared by every page. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className="floaty"
          style={{
            top: f.top,
            left: f.left,
            fontSize: f.size,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          {f.e}
        </span>
      ))}
    </div>
  );
}
