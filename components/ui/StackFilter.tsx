interface StackFilterProps {
  chips: string[];
  value: string | null;
  onChange: (chip: string | null) => void;
  label: string;
}

export default function StackFilter({ chips, value, onChange, label }: StackFilterProps) {
  if (chips.length === 0) return null;

  const chipClass = (active: boolean) =>
    `border px-3 py-1.5 text-xs font-medium transition-colors ${
      active
        ? 'border-accent bg-accent text-white'
        : 'border-line bg-white text-ink-secondary hover:border-ink-muted hover:text-ink'
    }`;

  return (
    <div role="group" aria-label={label}>
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-muted">스택으로 보기</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => onChange(null)} className={chipClass(value === null)}>
          전체
        </button>
        {chips.map((chip) => (
          <button
            type="button"
            key={chip}
            onClick={() => onChange(value === chip ? null : chip)}
            className={chipClass(value === chip)}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
