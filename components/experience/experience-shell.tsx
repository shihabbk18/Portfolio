"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play, Orbit } from "lucide-react";
import { ExperienceProvider, useExperience } from "./experience-provider";
import { SceneLoader } from "./scene-loader";
import { Assistant } from "@/components/robot/assistant";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function ShellContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const { motionEnabled, paused, toggleMotion } = useExperience();
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const frame = requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("main h1");
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return <>
    <SceneLoader />
    <Navigation />
    <div className="experience-content">{children}<Footer /></div>
    <div className="experience-controls"><span><Orbit size={13} aria-hidden="true" /> NEURAL LAB / SBK</span><button type="button" onClick={toggleMotion} aria-pressed={paused} aria-label={paused ? "Resume animations" : "Pause animations"}>{motionEnabled ? <Pause size={12} aria-hidden="true" /> : <Play size={12} aria-hidden="true" />}{paused ? "Resume" : motionEnabled ? "Pause motion" : "Motion reduced"}</button></div>
    <Assistant />
  </>;
}

export function ExperienceShell({ children }: { children: ReactNode }) {
  return <ExperienceProvider><ShellContent>{children}</ShellContent></ExperienceProvider>;
}
