"use client";

import { Canvas } from "@react-three/fiber";
import { useExperience } from "./experience-provider";
import { World } from "./world";

export default function SceneCanvas() {
  const { motionEnabled } = useExperience();
  return (
    <Canvas
      aria-hidden="true"
      className="experience-canvas"
      dpr={[1, 1.5]}
      frameloop={motionEnabled ? "always" : "demand"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      fallback={<div className="scene-fallback">Your browser is showing the accessible portfolio view.</div>}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}
    >
      <World />
    </Canvas>
  );
}
