import type { Platform } from "@/lib/types";

export function PlatformBadge({ platform }: { platform: Platform }) {
  const isYouTube = platform === "youtube";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide ${
        isYouTube
          ? "bg-red-500/15 text-red-300"
          : "bg-emerald-500/15 text-emerald-300"
      }`}
    >
      {isYouTube ? <YouTubeIcon /> : <SpotifyIcon />}
      {isYouTube ? "YouTube" : "Spotify"}
    </span>
  );
}

export function YouTubeIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

export function SpotifyIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2.1-10.4-1.1a.75.75 0 1 1-.34-1.46c4.5-1.04 8.4-.6 11.5 1.3.36.22.47.69.24 1.01Zm1.47-3.3a.94.94 0 0 1-1.29.31c-3.2-2-8.1-2.55-11.9-1.4a.94.94 0 1 1-.54-1.8c4.35-1.32 9.76-.7 13.43 1.55.44.27.58.85.3 1.34Zm.13-3.43C15.36 8.3 8.9 8.07 5.2 9.2a1.12 1.12 0 1 1-.65-2.15C8.8 5.76 15.94 6.03 20.2 8.56a1.12 1.12 0 1 1-1.16 1.92l-.01-.01Z" />
    </svg>
  );
}

export function ShuffleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="M15 15l6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}

export function PlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
