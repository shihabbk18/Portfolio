"use client";

import { Canvas } from "@react-three/fiber";
import { Robot } from "./robot";

export default function RobotPreview(props: { attentive: boolean; speaking: boolean; motionEnabled: boolean }) {
  return <Canvas dpr={1} frameloop={props.motionEnabled ? "always" : "demand"} camera={{ position: [0, 0.1, 3.6], fov: 42 }} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }} fallback={<span className="robot-fallback" aria-hidden="true">◉‿◉</span>} style={{ pointerEvents: "none" }}>
    <ambientLight intensity={1.5} /><pointLight position={[2, 3, 4]} intensity={18} color="#b7f2ff" />
    <Robot {...props} />
  </Canvas>;
}
