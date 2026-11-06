export default function ScoreBar({ label, value, max = 10, light }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className={`text-xs ${light ? "text-ink/60" : "text-clay"}`}>{label}</span>
        <span className={`text-xs font-medium tabular-num ${light ? "text-ink" : "text-paper"}`}>
          {value.toFixed(1)}
        </span>
      </div>
      <div className={`h-1 w-full rounded-full ${light ? "bg-ink/10" : "bg-ink-line"}`}>
        <div
          className="h-1 rounded-full bg-moss-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
