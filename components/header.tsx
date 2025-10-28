"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

// --- NavButton Component ---
interface NavButtonProps {
  label: string;
  href?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, href }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: href ? 0.95 : 1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        href ? "cursor-pointer" : "cursor-default opacity-90"
      }`}
      style={{
        width: "110px", // ✅ consistent button width for even spacing
        textAlign: "center",
      }}
      animate={{
        color:
          isHovering && !href
            ? "#facc15"
            : isHovering && href
            ? "#ffffff"
            : "#afeeee",
        backgroundColor:
          isHovering && href ? "rgba(175, 238, 238, 0.1)" : "transparent",
        boxShadow:
          isHovering && !href
            ? "0 0 10px rgba(250,200,50,0.5)"
            : isHovering && href
            ? "0 0 10px rgba(175,238,238,0.5)"
            : "0 0 0px rgba(0,0,0,0)",
        scale: href && isHovering ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-[22px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={isHovering && !href ? "coming-soon" : "label"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className={`absolute w-full text-center ${
              isHovering && !href
                ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,200,50,0.6)]"
                : ""
            }`}
          >
            {isHovering && !href ? "COMING SOON" : label.toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// --- Action Button Component ---
interface ActionButtonProps {
  label: string;
  href: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, href }) => (
  <Link href={href} passHref>
    <motion.div
      whileTap={{ scale: 0.92 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm cursor-pointer flex-shrink-0"
    >
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  </Link>
);

// --- Header Component ---
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

  const navPages: NavButtonProps[] = [
    { label: "World47", href: "/index" },
    { label: "Community", href: "/CommunityPage" },
    { label: "HELP", href: "/HelpPage" },
    { label: "REWARDS", href: "/RewardsPage" },
    { label: "SHOP", href: "/StorePage" },
    { label: "$ABNT CRYPTO" },
    { label: "APPS" },
    { label: "VIDEO GAMES" },
    { label: "ARTWORK", href: "/ArtworkPage" },
  ];

  return (
    <motion.header
      className="w-full flex flex-nowrap items-center justify-between py-[22px] px-4 bg-gradient-to-r from-[#0b1120] to-[#111633] text-cyan-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-8 flex-shrink-1"> {/* ✅ Increased gap */}
        <div className="text-2xl font-bold tracking-tight text-cyan-100 flex-shrink-0">
          WORLD 47
        </div>
        <nav className="hidden xl:flex flex-nowrap gap-6 text-sm"> {/* ✅ Wider gap */}
          {navPages.map((page, i) => (
            <NavButton key={i} label={page.label} href={page.href} />
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <ActionButton label="Login" href="/loginpage" />
        <ActionButton label="Signup" href="/signuppage" />
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm flex-shrink-0"
        >
          {audioActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span className="text-sm">{audioActive ? "Sound On" : "Sound Off"}</span>
        </motion.button>
      </div>

      <audio ref={audioRef} src="/sound.mp3" preload="auto" style={{ display: "none" }} />
    </motion.header>
  );
}
