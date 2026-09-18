export default function FAQ({ items }) {
  return (
    <div className="divide-y divide-ink-line border-t border-ink-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-medium text-paper">
            {item.q}
            <span className="ml-4 shrink-0 text-clay transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-clay">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
