import type { Playlist } from "@/lib/types";
import { PlatformBadge, PlayIcon } from "./icons";
import TagChip from "./TagChip";

export default function PlaylistCard({ playlist }: { playlist: Playlist }) {
  return (
    <a
      href={playlist.url}
      target="_blank"
      rel="noopener noreferrer"
      className="surface surface-hover group relative flex flex-col overflow-hidden rounded-2xl shadow-card animate-fade-up"
    >
      {/* 커버 — 그라데이션으로 분위기 표현 */}
      <div
        className={`relative h-32 bg-gradient-to-br ${playlist.gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute right-4 top-4">
          <PlatformBadge platform={playlist.platform} />
        </div>
        <div className="absolute bottom-4 left-4 text-xs text-zinc-300/80">
          <span>{playlist.duration}</span>
        </div>
        {/* 호버 시 떠오르는 재생 버튼 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink-950 shadow-glow">
            <PlayIcon className="h-5 w-5 translate-x-[1px]" />
          </span>
        </div>
      </div>

      {/* 본문 */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-zinc-100 transition-colors group-hover:text-white">
            {playlist.title}
          </h3>
          <p className="mt-1.5 text-sm text-mist">
            {playlist.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {playlist.moods.map((m) => (
            <TagChip key={m} label={`#${m}`} readOnly tone="mood" />
          ))}
          {playlist.works.map((w) => (
            <TagChip key={w} label={w} readOnly tone="work" />
          ))}
        </div>
      </div>
    </a>
  );
}
