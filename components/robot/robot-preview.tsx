"use client";

import Image from "next/image";
import { withBasePath } from "@/data/portfolio";

export default function RobotPreview(props: { attentive: boolean; speaking: boolean; motionEnabled: boolean }) {
  return <span className={`qa-mascot ${props.attentive ? "qa-mascot--attentive" : ""} ${props.speaking ? "qa-mascot--speaking" : ""} ${props.motionEnabled ? "" : "qa-mascot--paused"}`}>
    <span className="qa-mascot__glow" />
    <Image src={withBasePath("/mascot/shihab-bot.png")} alt="" width={1254} height={1254} sizes="(max-width: 560px) 112px, 140px" className="qa-mascot__image" />
  </span>;
}
