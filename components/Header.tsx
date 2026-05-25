export default function Header() {
  return (
    <header className="border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-glow/15 text-glow-soft animate-pulse-slow">
            ♪
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            오늘의 작업 BGM
          </span>
        </div>
        <nav className="hidden gap-6 text-sm text-mist sm:flex">
          <span className="cursor-default transition-colors hover:text-zinc-200">
            큐레이션
          </span>
          <span className="cursor-default transition-colors hover:text-zinc-200">
            오늘의 픽
          </span>
        </nav>
      </div>
    </header>
  );
}
