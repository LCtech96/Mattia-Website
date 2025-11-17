"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CalendlyEmbed() {
  useEffect(() => {
    // Calendly script will be loaded via Script component
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <Script
        strategy="lazyOnload"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
      <div
        className="calendly-inline-widget"
        data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/YOUR_USERNAME/YOUR_EVENT_TYPE"}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}

