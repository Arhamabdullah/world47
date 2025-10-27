"use client";

import React, { useEffect, useRef } from "react";

export default function Loader() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((e) => console.warn("Video play failed:", e));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/web-loader.mp4"  // ✅ Correct path for /public/web-loader.mp4
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}
