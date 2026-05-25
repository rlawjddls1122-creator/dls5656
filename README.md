# 오늘의 작업 BGM (Today's Work BGM)

지금 내 기분과 작업 종류에 맞는 플레이리스트를 추천해주는 큐레이션 도구.

## 핵심 기능

1. **기분 + 작업 태그 필터링** — 선택한 태그를 모두 만족하는(AND) 플레이리스트만 노출
2. **외부 링크 카드** — YouTube / Spotify 플레이리스트로 바로 연결
3. **오늘의 픽** — 랜덤 추천. 마음에 안 들면 "다시 뽑기"

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## 디자인 톤

다크 모드 · 미니멀 · 차분함 · 몰입감

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인하세요.

## 폴더 구조

```
.
├── app/
│   ├── globals.css        # Tailwind + 다크 베이스 스타일
│   ├── layout.tsx         # 루트 레이아웃 / 메타데이터
│   └── page.tsx           # 홈 (서버 컴포넌트, 데이터 주입)
├── components/
│   ├── Header.tsx
│   ├── HomeClient.tsx     # 필터 상태 관리 + 그리드
│   ├── FilterBar.tsx      # 기분/작업 태그 선택
│   ├── PlaylistCard.tsx   # 외부 링크 카드
│   ├── TodaysPick.tsx     # 랜덤 "오늘의 픽"
│   ├── TagChip.tsx
│   └── icons.tsx
├── lib/
│   ├── types.ts           # 태그 정의 + Playlist 타입
│   └── playlists.ts       # 큐레이션 샘플 데이터
├── PRD.md
├── tailwind.config.ts
└── ...
```

## 데이터 확장

`lib/playlists.ts` 의 배열에 항목을 추가하면 됩니다. 태그는 `lib/types.ts` 의
`MOOD_TAGS` / `WORK_TAGS` 에 정의된 값만 사용하세요. 실제 서비스에서는 이 파일을
CMS 나 DB 연동으로 대체하면 됩니다.
