import Header from "@/components/Header";
import HomeClient from "@/components/HomeClient";
import { playlists } from "@/lib/playlists";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            지금 내 작업에
            <br />
            <span className="text-glow-soft">딱 맞는 BGM</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-mist">
            기분과 작업 종류를 고르면, 그 결에 어울리는 플레이리스트를 골라
            드려요. 고르기 귀찮은 날엔 &lsquo;오늘의 픽&rsquo;에 맡겨보세요.
          </p>
        </section>

        <HomeClient playlists={playlists} />
      </main>

      <footer className="mt-16 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
          오늘의 작업 BGM · 외부 링크는 YouTube / Spotify 로 연결됩니다.
        </div>
      </footer>
    </>
  );
}
