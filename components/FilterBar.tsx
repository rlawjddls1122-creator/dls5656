"use client";

import { MOOD_TAGS, WORK_TAGS, type MoodTag, type WorkTag } from "@/lib/types";
import TagChip from "./TagChip";

interface FilterBarProps {
  selectedMoods: MoodTag[];
  selectedWorks: WorkTag[];
  onToggleMood: (tag: MoodTag) => void;
  onToggleWork: (tag: WorkTag) => void;
  onReset: () => void;
  hasFilters: boolean;
}

export default function FilterBar({
  selectedMoods,
  selectedWorks,
  onToggleMood,
  onToggleWork,
  onReset,
  hasFilters,
}: FilterBarProps) {
  return (
    <section className="surface rounded-2xl p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-mist">
          지금의 나
        </h2>
        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-mist transition-colors hover:text-zinc-200"
          >
            초기화
          </button>
        )}
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <p className="mb-2.5 text-xs text-zinc-500">기분</p>
          <div className="flex flex-wrap gap-2">
            {MOOD_TAGS.map((tag) => (
              <TagChip
                key={tag}
                label={tag}
                active={selectedMoods.includes(tag)}
                onClick={() => onToggleMood(tag)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2.5 text-xs text-zinc-500">작업</p>
          <div className="flex flex-wrap gap-2">
            {WORK_TAGS.map((tag) => (
              <TagChip
                key={tag}
                label={tag}
                active={selectedWorks.includes(tag)}
                onClick={() => onToggleWork(tag)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
