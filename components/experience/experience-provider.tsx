"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";

type ExperienceState = {
  motionEnabled: boolean;
  paused: boolean;
  toggleMotion: () => void;
  selectedProject: number;
  selectProject: (index: number) => void;
  assistantOpen: boolean;
  setAssistantOpen: (open: boolean) => void;
};

const ExperienceContext = createContext<ExperienceState | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selectedProject, selectProject] = useState(0);
  const [assistantOpen, setAssistantOpen] = useState(false);

  useEffect(() => {
    try { setPaused(localStorage.getItem("portfolio-motion-paused") === "true"); } catch { /* Storage is optional. */ }
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  function toggleMotion() {
    setPaused((previous) => {
      try { localStorage.setItem("portfolio-motion-paused", String(!previous)); } catch { /* Storage is optional. */ }
      return !previous;
    });
  }

  const motionEnabled = !paused && !reduced && visible;
  return (
    <ExperienceContext.Provider value={{ motionEnabled, paused, toggleMotion, selectedProject, selectProject, assistantOpen, setAssistantOpen }}>
      <MotionConfig reducedMotion={motionEnabled ? "user" : "always"}>
        <div className={`experience-root ${motionEnabled ? "" : "motion-paused"}`}>{children}</div>
      </MotionConfig>
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) throw new Error("Experience components require ExperienceProvider.");
  return context;
}
