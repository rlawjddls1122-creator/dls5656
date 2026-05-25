"use client";

import { useEffect, useState } from "react";
import type { Playlist } from "@/lib/types";
import { PlatformBadge, ShuffleIcon, PlayIcon } from "./icons";

// candidates 는 무드 매칭 점수가 가장 높은 후보들. 그 안에서 뽑는다.
export default function TodaysPick({ candidates }: { candidates: Playlist[] }) {
  // 서버/클라이언트 hydration 불일치를 막기 위해 마운트 후에 뽑는다.
  const [pick, setPick] = useState<Playlist | null>(null);

  // 후보 안에서 직전과 다른 항목으로 다시 뽑기.
  const shuffle = () => {
    if (candidates.length === 0) return;
    if (candidates.length === 1) {
      setPick(candidates[0]);
      return;
    }
    setPick((prev) => {
      let next = prev;
      while (next === prev) {
        next = candidates[Math.floor(Math.random() * candidates.length)];
      }
      return next;
    });
  };

  // 필터(무드 매칭 점수)가 바뀌면 후보 집합도 바뀌므로 새로 뽑는다.
  useEffect(() => {
    if (candidates.length === 0) {
      setPick(null);
      return;
    }
    setPick(candidates[Math.floor(Math.random() * candidates.length)]);
  }, [candidates]);

  if (!pick) {
    return (
      <section className="surface h-56 animate-pulse-slow rounded-3xl" />
    );
  }

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${pick.gradient} p-8 shadow-glow`}
    >
      <div className="absolute inset-0 bg-ink-950/40" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-soft">
              ✦ 오늘의 픽
            </span>
            <PlatformBadge platform={pick.platform} />
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
            {pick.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200/90">
            {pick.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300/80">
            {pick.moods.map((m) => (
              <span key={m}>#{m}</span>
            ))}
            <span className="text-zinc-500">·</span>
            <span>
              {pick.trackCount}곡 / {pick.duration}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={shuffle}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-100 backdrop-blur transition-colors hover:bg-white/10"
          >
            <ShuffleIcon />
            다시 뽑기
          </button>
          <a
            href={pick.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <PlayIcon className="h-4 w-4 translate-x-[1px]" />
            바로 듣기
          </a>
        </div>
      </div>
    </section>
  );
}
