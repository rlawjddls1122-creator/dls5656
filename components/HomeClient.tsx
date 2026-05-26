"use client";

import { useMemo, useState } from "react";
import type { MoodTag, Playlist, WorkTag } from "@/lib/types";
import { track } from "@/lib/mixpanel";
import FilterBar from "./FilterBar";
import PlaylistCard from "./PlaylistCard";
import TodaysPick from "./TodaysPick";

export default function HomeClient({ playlists }: { playlists: Playlist[] }) {
  const [selectedMoods, setSelectedMoods] = useState<MoodTag[]>([]);
  const [selectedWorks, setSelectedWorks] = useState<WorkTag[]>([]);

  const toggle = <T,>(list: T[], value: T): T[] =>
    list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value];

  const hasFilters = selectedMoods.length > 0 || selectedWorks.length > 0;

  // 오늘의 픽 후보: 선택한 기분과 가장 많이 겹치는(무드 매칭 점수 최고) 항목들.
  // 기분 미선택이거나 매칭이 0이면 전체에서 뽑는다.
  const pickCandidates = useMemo(() => {
    if (selectedMoods.length === 0) return playlists;
    const scored = playlists.map((p) => ({
      p,
      score: selectedMoods.filter((m) => p.moods.includes(m)).length,
    }));
    const max = Math.max(...scored.map((s) => s.score));
    if (max === 0) return playlists;
    return scored.filter((s) => s.score === max).map((s) => s.p);
  }, [playlists, selectedMoods]);

  // 선택된 모든 태그를 만족하는(AND 매칭) 플레이리스트만 노출.
  const filtered = useMemo(() => {
    if (!hasFilters) return playlists;
    return playlists.filter((p) => {
      const moodOk = selectedMoods.every((m) => p.moods.includes(m));
      const workOk = selectedWorks.every((w) => p.works.includes(w));
      return moodOk && workOk;
    });
  }, [playlists, selectedMoods, selectedWorks, hasFilters]);

  return (
    <div className="space-y-10">
      <TodaysPick candidates={pickCandidates} />

      <FilterBar
        selectedMoods={selectedMoods}
        selectedWorks={selectedWorks}
        onToggleMood={(t) => {
          track("Filter Toggle", {
            type: "mood",
            tag: t,
            selected: !selectedMoods.includes(t),
          });
          setSelectedMoods((p) => toggle(p, t));
        }}
        onToggleWork={(t) => {
          track("Filter Toggle", {
            type: "work",
            tag: t,
            selected: !selectedWorks.includes(t),
          });
          setSelectedWorks((p) => toggle(p, t));
        }}
        onReset={() => {
          track("Filter Reset");
          setSelectedMoods([]);
          setSelectedWorks([]);
        }}
        hasFilters={hasFilters}
      />

      <section>
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-zinc-100">
            {hasFilters ? "추천 플레이리스트" : "전체 플레이리스트"}
          </h2>
          <span className="text-sm text-mist">{filtered.length}개</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PlaylistCard key={p.id} playlist={p} />
            ))}
          </div>
        ) : (
          <div className="surface flex flex-col items-center justify-center gap-2 rounded-2xl py-16 text-center">
            <p className="text-zinc-300">조건에 맞는 플레이리스트가 없어요.</p>
            <p className="text-sm text-mist">
              태그를 줄여서 다시 찾아보세요.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
