"use client";

import { useEffect, useState } from "react";

export function PageLoadAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] grid place-items-center bg-bg page-loader"
      aria-hidden="true"
    >
      <div className="relative grid place-items-center">
        <div className="loader-ring" />
        <div className="loader-mark">
          <span>S</span>
        </div>
        <p className="mt-6 text-sm font-semibold text-secondary loader-caption">
          SmartShala
        </p>
      </div>
    </div>
  );
}
