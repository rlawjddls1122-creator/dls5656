// 기분 태그 — 지금 내 상태
export const MOOD_TAGS = [
  "차분한",
  "집중",
  "활기찬",
  "몽환적",
  "센티멘탈",
  "경쾌한",
] as const;

// 작업 태그 — 지금 하는 일
export const WORK_TAGS = [
  "코딩",
  "디자인",
  "글쓰기",
  "공부",
  "휴식",
] as const;

export type MoodTag = (typeof MOOD_TAGS)[number];
export type WorkTag = (typeof WORK_TAGS)[number];
export type Platform = "youtube" | "spotify";

export interface Playlist {
  id: string;
  title: string;
  description: string;
  platform: Platform;
  url: string;
  /** 카드 커버에 쓰이는 그라데이션 키 (이미지 의존성 없이 분위기 표현) */
  gradient: string;
  moods: MoodTag[];
  works: WorkTag[];
  trackCount: number;
  duration: string;
}
