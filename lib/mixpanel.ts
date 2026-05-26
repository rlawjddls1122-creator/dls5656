import mixpanel, { type Dict } from "mixpanel-browser";

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let initialized = false;

/**
 * Mixpanel 초기화. 토큰이 없거나 서버 환경이면 조용히 건너뛴다.
 * 브라우저에서 한 번만 실행되도록 가드한다.
 */
export function initMixpanel() {
  if (initialized || typeof window === "undefined") return;
  if (!TOKEN) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[mixpanel] NEXT_PUBLIC_MIXPANEL_TOKEN 이 설정되지 않아 추적을 건너뜁니다.");
    }
    return;
  }

  mixpanel.init(TOKEN, {
    // 개발 중 콘솔에서 이벤트 전송을 확인할 수 있게 한다.
    debug: process.env.NODE_ENV !== "production",
    track_pageview: false, // 라우팅 변화는 직접 추적한다.
    persistence: "localStorage",
  });
  initialized = true;
}

/** 이벤트 추적. 초기화 전 호출은 무시한다. */
export function track(event: string, props?: Dict) {
  if (!initialized) return;
  mixpanel.track(event, props);
}
