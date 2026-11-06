export default function SectionHeader({ kicker, title, description, action, light }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {kicker && (
          <p className={`mb-2 text-sm font-medium ${light ? "text-moss-600" : "text-moss-500"}`}>
            {kicker}
          </p>
        )}
        <h2 className={`font-display text-display-md ${light ? "text-ink" : "text-paper"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-3 max-w-xl text-[15px] leading-relaxed ${light ? "text-ink/70" : "text-clay"}`}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
