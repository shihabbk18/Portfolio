"use client";

import { type ReactNode } from "react";
import { Pause, Play, Orbit } from "lucide-react";
import { ExperienceProvider, useExperience } from "./experience-provider";
import { Assistant } from "@/components/robot/assistant";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RouteScrollReset } from "./route-scroll-reset";
import { ThemePicker } from "./theme-picker";

function ShellContent({ children }: { children: ReactNode }) {
  const { motionEnabled, paused, toggleMotion } = useExperience();
  return <>
    <RouteScrollReset />
    <Navigation />
    <div className="experience-content">{children}<Footer /></div>
    <div className="experience-controls"><span><Orbit size={13} aria-hidden="true" /> SBK STUDIO</span><button type="button" onClick={toggleMotion} aria-pressed={paused} aria-label={paused ? "Resume animations" : "Pause animations"}>{motionEnabled ? <Pause size={12} aria-hidden="true" /> : <Play size={12} aria-hidden="true" />}{paused ? "Resume" : motionEnabled ? "Pause motion" : "Motion reduced"}</button><ThemePicker /></div>
    <Assistant />
  </>;
}

export function ExperienceShell({ children }: { children: ReactNode }) {
  return <ExperienceProvider><ShellContent>{children}</ShellContent></ExperienceProvider>;
}
