// components/login.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Check } from "lucide-react";

const glassPanelClasses: string =
  "bg-[rgba(0,20,27,0.4)] backdrop-blur-[20px] border-[2px] border-cyan-500/80 shadow-[0_0_30px_rgba(0,255,255,0.2),_0_6px_15px_rgba(0,0,0,0.6)] rounded-xl";

/**
 * 🔥 PERFECTLY CENTERED PULSING GLOW
 * No offset. Uses flex centering and balanced gradient.
 */
const AnimatedGlow: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(0,255,255,0.15) 45%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Login attempt:", { username, password, rememberMe });
  };

  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200">
      {/* Static background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>

      {/* ✅ Centered pulsing glow */}
      <AnimatedGlow />

      {/* Login Panel */}
      <motion.div
        className={`z-10 p-8 sm:p-10 ${glassPanelClasses} max-w-sm w-full flex flex-col items-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo/Icon */}
        <div className="mb-8 text-cyan-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-camera"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="relative">
            <input
              type="text"
              id="username"
              className="w-full p-3 pl-10 bg-black/30 border border-cyan-500/50 rounded-md focus:outline-none focus:border-cyan-400 text-sm placeholder-cyan-200/70"
              placeholder="Username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              required
            />
            <User className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300 pointer-events-none" />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full p-3 pl-10 bg-black/30 border border-cyan-500/50 rounded-md focus:outline-none focus:border-cyan-400 text-sm placeholder-cyan-200/70"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
            <Lock className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300 pointer-events-none" />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label
              htmlFor="rememberMe"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="rememberMe"
                className="hidden"
                checked={rememberMe}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRememberMe(e.target.checked)
                }
              />
              <div className="h-4 w-4 rounded border-2 border-cyan-500/80 bg-black/30 flex items-center justify-center transition-all duration-150">
                {rememberMe && <Check size={10} className="text-cyan-400" />}
              </div>
              <span className="text-cyan-200/80">Remember me</span>
            </label>
            <a
              href="#"
              className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 text-[11px]"
            >
              Forgot Password?
            </a>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-cyan-600/70 hover:bg-cyan-500/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-cyan-500/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LOGIN
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default LoginComponent;
