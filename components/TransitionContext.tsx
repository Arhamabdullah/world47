"use client";
import React, { createContext, useContext, useState } from "react";

interface TransitionContextType {
  isTransitioning: boolean;
  direction: "in" | "out" | null;
  triggerTransition: (dir: "in" | "out", target: string) => void;
  targetPage: string | null;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"in" | "out" | null>(null);
  const [targetPage, setTargetPage] = useState<string | null>(null);

  const triggerTransition = (dir: "in" | "out", target: string) => {
    setDirection(dir);
    setTargetPage(target);
    setTransitioning(true);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, direction, triggerTransition, targetPage }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
  return ctx;
};
