const ITEMS = [
  { label: "Expert reviews", detail: "Written by dedicated casino analysts" },
  { label: "Verified information", detail: "Cross-checked against licensing registers" },
  { label: "Independent ratings", detail: "No operator can pay for a higher score" },
  { label: "Updated regularly", detail: "Rankings refreshed on a weekly cycle" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-ink-line bg-ink-soft">
      <div className="container-content grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="border-l border-ink-line pl-4">
            <p className="text-[15px] font-medium text-paper">{item.label}</p>
            <p className="mt-1 text-sm text-clay">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
