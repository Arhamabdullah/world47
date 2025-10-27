"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const NavButton: React.FC<{ label: string }> = ({ label }) => {
  const [isHovering, setIsHovering] = useState(false);
  const displayLabel = isHovering ? "COMING SOON" : label.toUpperCase();
  const baseClass =
    "px-3 py-1 rounded-full text-sm font-medium relative pointer-events-auto transition-all duration-200";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={{
        color: isHovering ? "#facc15" : "#afeeee",
        scale: isHovering ? 1.02 : 1,
        boxShadow: isHovering
          ? "0 0 10px rgba(250,200,50,0.5)"
          : "0 0 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.2 }}
      className={baseClass}
    >
      {displayLabel}
    </motion.button>
  );
};

export default function Header() {
  const [audioActive, setAudioActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = useCallback(() => {
    if (!audioRef.current) return;
    if (audioActive) {
      audioRef.current.pause();
      setAudioActive(false);
    } else {
      audioRef.current.volume = 0.45;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
      setAudioActive(true);
    }
  }, [audioActive]);

  const navPages = [
    "World47",
    "Community",
    "HELP",
    "STORE",
    "REWARDS",
    "SHOP",
    "$ABNT CRYPTO",
    "APPS",
    "VIDEO GAMES",
    "ARTWORK",
  ];

  return (
    <motion.header
      className="w-full flex items-center justify-between py-4 px-8 bg-gradient-to-r from-[#0b1120] to-[#111633] text-cyan-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <div className="text-2xl font-bold tracking-tight text-cyan-100">
          WORLD 47
        </div>
        <nav className="hidden xl:flex gap-4 text-sm">
          {navPages.map((page, i) => (
            <NavButton key={i} label={page} />
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="text-xs opacity-60">ABNT01</div>
        <div className="text-xs opacity-60">Monitoring</div>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm"
        >
          {audioActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span className="text-sm">
            {audioActive ? "Sound On" : "Sound Off"}
          </span>
        </motion.button>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/sound.mp3" preload="auto" style={{ display: "none" }} />
    </motion.header>
  );
}
