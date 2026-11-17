// Lightweight analytics helper for GA4 events

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | "form_submit_success"
  | "whatsapp_click"
  | "phone_click"
  | "cta_click";

export function trackEvent(
  eventName: AnalyticsEventName,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
