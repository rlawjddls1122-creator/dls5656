"use client";

interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  /** 클릭 불가능한 표시 전용 칩 */
  readOnly?: boolean;
  tone?: "mood" | "work";
}

export default function TagChip({
  label,
  active = false,
  onClick,
  readOnly = false,
  tone = "mood",
}: TagChipProps) {
  const base =
    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200";

  if (readOnly) {
    return (
      <span
        className={`${base} cursor-default ${
          tone === "mood"
            ? "bg-glow/10 text-glow-soft"
            : "bg-white/5 text-zinc-300"
        }`}
      >
        {label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${base} border ${
        active
          ? "border-glow/60 bg-glow/15 text-white shadow-glow"
          : "border-white/10 bg-white/[0.03] text-mist hover:border-white/20 hover:text-zinc-200"
      }`}
    >
      {label}
    </button>
  );
}
