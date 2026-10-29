"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/data/portfolio";

const activities = ["idle", "happy", "work", "football", "yawn", "sleep", "happy"] as const;
const durations = [4000, 2500, 5000, 8000, 2800, 8000, 2500];
export default function RobotPreview({ attentive, speaking, motionEnabled }: { attentive: boolean; speaking: boolean; motionEnabled: boolean }) {
  const [activity, setActivity] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!motionEnabled || attentive || speaking || hovered) return;
    const timer = window.setTimeout(() => setActivity((current) => (current + 1) % activities.length), durations[activity]);
    return () => window.clearTimeout(timer);
  }, [activity, attentive, speaking, hovered, motionEnabled]);
  const mood = speaking ? "work" : attentive || hovered ? "happy" : motionEnabled ? activities[activity] : "idle";
  return <span className={`bot-companion bot-companion--${mood} ${motionEnabled ? "" : "bot-companion--paused"}`} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
    <span className="bot-companion__sprite" style={{ backgroundImage: `url("${withBasePath(mood === "sleep" || mood === "football" ? "/mascot/bot-play-sleep.png" : "/mascot/bot-expressions.png")}")` }} />
    {mood === "football" && <span className="bot-companion__ball">⚽</span>}
    {mood === "sleep" && <span className="bot-companion__dream">z Z</span>}
    <Image src={withBasePath("/mascot/bot-expressions.png")} alt="" width={2172} height={724} loading="eager" className="bot-sprite-preload" />
    <Image src={withBasePath("/mascot/bot-play-sleep.png")} alt="" width={2172} height={724} loading="eager" className="bot-sprite-preload" />
  </span>;
}
