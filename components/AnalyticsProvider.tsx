"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initMixpanel, track } from "@/lib/mixpanel";

/**
 * Mixpanel 을 초기화하고 경로 변화마다 페이지뷰를 추적한다.
 * 루트 레이아웃에 한 번 마운트한다.
 */
export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    track("Page View", {
      path: pathname,
      url: query ? `${pathname}?${query}` : pathname,
    });
  }, [pathname, searchParams]);

  return null;
}
