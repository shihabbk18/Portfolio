"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

const Scene = dynamic(() => import("./scene-canvas"), { ssr: false });

export class SceneBoundary extends Component<{ children: ReactNode; compact?: boolean }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return this.props.compact ? <span className="robot-fallback" aria-hidden="true">◉‿◉</span> : <div className="scene-fallback" role="status">3D view unavailable. All portfolio content remains accessible.</div>;
    return this.props.children;
  }
}

export function SceneLoader() {
  return <SceneBoundary><Scene /></SceneBoundary>;
}
