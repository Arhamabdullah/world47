"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X } from "lucide-react"; // Added Menu and X icons
import Link from "next/link";

// --- NavButton Component ---
interface NavButtonProps {
  label: string;
  href?: string;
  // Added prop for click handler (useful for closing mobile menu)
  onClick?: () => void; 
}

const NavButton: React.FC<NavButtonProps> = ({ label, href, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const ButtonContent = (
    <motion.div
      whileTap={{ scale: href ? 0.95 : 1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick} // Propagate click handler
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        href ? "cursor-pointer" : "cursor-default opacity-90"
      }
      // **RESPONSIVENESS ADDED:** full width on small screens, fixed width on large
      w-full xl:w-[110px] xl:text-center
      `}
      style={{
        // Removed fixed width here, now handled by Tailwind w-full/xl:w-[110px]
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

  return href ? (
    // Added onClick here to ensure Link also closes the menu
    <Link href={href} className="block" onClick={onClick}> 
      {ButtonContent}
    </Link>
  ) : (
    ButtonContent
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
      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm cursor-pointer flex-shrink-0"
    >
      {/* **RESPONSIVENESS ADDED:** Hide text on extra-small screens */}
      <span className="text-sm font-medium hidden sm:inline">{label}</span> 
      {/* **RESPONSIVENESS ADDED:** Show icon-only fallback on extra-small screens */}
      <span className="text-sm font-medium sm:hidden">
        {label === "Login" ? "Log In" : "Sign Up"}
      </span>
    </motion.div>
  </Link>
);

// --- Sound Button Component ---
interface SoundButtonProps {
  audioActive: boolean;
  handleToggle: () => void;
}

const SoundButton: React.FC<SoundButtonProps> = ({ audioActive, handleToggle }) => (
  <motion.button
    whileTap={{ scale: 0.92 }}
    onClick={handleToggle}
    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm flex-shrink-0"
    aria-label={audioActive ? "Toggle sound off" : "Toggle sound on"}
  >
    {audioActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
    {/* **RESPONSIVENESS ADDED:** Hide text on small screens */}
    <span className="text-sm hidden sm:inline"> 
      {audioActive ? "Sound On" : "Sound Off"}
    </span>
  </motion.button>
);


// --- Header Component ---
export default function Header() {
  const [audioActive, setAudioActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // **New State for Mobile Menu**
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = useCallback(() => {
    if (!audioRef.current) return;
    if (audioActive) {
      audioRef.current.pause();
      setAudioActive(false);
    } else {
      audioRef.current.volume = 0.45;
      audioRef.current.loop = true;
      // Use .catch(() => {}) to prevent unhandled promise rejection if play fails
      audioRef.current.play().catch(() => {}); 
      setAudioActive(true);
    }
  }, [audioActive]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navPages: NavButtonProps[] = [
    { label: "World47", href: "/" },
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
      className="relative w-full flex items-center justify-between py-[22px] px-4 bg-gradient-to-r from-[#0b1120] to-[#111633] text-cyan-100 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-8 flex-shrink-0">
        <div className="text-2xl font-bold tracking-tight text-cyan-100 flex-shrink-0">
          WORLD 47
        </div>
        {/* **RESPONSIVENESS ADDED:** Hide on screens smaller than XL */}
        <nav className="hidden xl:flex flex-nowrap gap-6 text-sm">
          {navPages.map((page, i) => (
            <NavButton key={i} label={page.label} href={page.href} />
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <ActionButton label="Login" href="/loginpage" />
        <ActionButton label="Signup" href="/signuppage" />
        <SoundButton audioActive={audioActive} handleToggle={handleToggle} />
        
        {/* **New Mobile Menu Button** - Visible only on small screens */}
        <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleMenu}
            className="xl:hidden flex items-center px-3 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm flex-shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* **New Mobile Navigation Menu** */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[80px] left-0 w-full bg-gradient-to-b from-[#0b1120] to-[#111633] border-t border-cyan-900 shadow-xl xl:hidden z-40 p-4 space-y-2"
          >
            {navPages.map((page, i) => (
              // Pass closeMenu as onClick to close the menu when a link is clicked
              <NavButton key={i} label={page.label} href={page.href} onClick={closeMenu} />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>


      <audio ref={audioRef} src="/sound.mp3" preload="auto" style={{ display: "none" }} />
    </motion.header>
  );
}