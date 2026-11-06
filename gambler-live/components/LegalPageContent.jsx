export default function LegalPageContent({ title, updated, sections }) {
  return (
    <section className="bg-ink">
      <div className="container-content max-w-prose py-16 md:py-20">
        <h1 className="font-display text-display-lg text-paper">{title}</h1>
        {updated && <p className="mt-3 text-xs text-clay">Last updated {updated}</p>}
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl text-paper">{s.heading}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-clay">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
