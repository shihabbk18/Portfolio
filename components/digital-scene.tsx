"use client";

import { Pause, Play, Rotate3D } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type CSSProperties, type PointerEvent } from "react";

const meridians = Array.from({ length: 12 }, (_, index) => index * 15);
const latitudes = [-60, -40, -20, 0, 20, 40, 60];

export function DigitalScene() {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 85, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 85, damping: 20 });

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || paused || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 22);
    y.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 18);
  }

  return (
    <div className={`digital-scene ${paused || reduceMotion ? "digital-scene--paused" : ""}`}>
      <div className="digital-scene__view" onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }}>
        <motion.div className="digital-scene__world" style={{ rotateX, rotateY }} aria-hidden="true">
          <div className="digital-scene__halo" />
          <div className="digital-scene__floor" />
          <div className="digital-scene__orbit digital-scene__orbit--one"><i /></div>
          <div className="digital-scene__orbit digital-scene__orbit--two"><i /></div>
          <div className="digital-scene__globe">
            {meridians.map((angle) => <i className="digital-scene__meridian" key={angle} style={{ transform: `rotateY(${angle}deg)` }} />)}
            {latitudes.map((angle) => {
              const radius = Math.cos(angle * Math.PI / 180);
              return <i className="digital-scene__latitude" key={angle} style={{ width: `${radius * 100}%`, height: `${radius * 100}%`, transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${Math.sin(angle * Math.PI / 180) * 100}px)` }} />;
            })}
            <div className="digital-scene__nucleus" />
          </div>
          <div className="digital-scene__identity"><small>NEURAL SPACE / 01</small><strong>SBK<span>✦</span></strong><span>HUMAN CURIOSITY. MACHINE INTELLIGENCE.</span></div>
          <div className="digital-panel digital-panel--vision"><span>01 / PERCEPTION</span><strong>Computer vision</strong><div className="digital-panel__wave">{Array.from({ length: 16 }, (_, i) => <i key={i} style={{ "--bar": `${20 + ((i * 37) % 70)}%`, "--delay": `${i * -0.17}s` } as CSSProperties} />)}</div></div>
          <div className="digital-panel digital-panel--xai"><span>02 / INTERPRETATION</span><strong>Explainable AI</strong><div className="digital-panel__pixels">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ opacity: 0.15 + ((i * 7) % 9) / 10 }} />)}</div></div>
          <div className="digital-panel digital-panel--code"><span>03 / CONNECTION</span><code>vision + language<br /><b>→ meaningful systems</b></code></div>
          <span className="digital-scene__coordinate">DESIGNED TO EXPLORE<br />CHATTOGRAM, BANGLADESH</span>
        </motion.div>
      </div>
      <div className="digital-scene__toolbar">
        <span><Rotate3D size={14} aria-hidden="true" /> Move to explore</span>
        <button type="button" disabled={Boolean(reduceMotion)} aria-label={paused ? "Play 3D animation" : "Pause 3D animation"} aria-pressed={paused} onClick={() => { setPaused((value) => !value); x.set(0); y.set(0); }}>
          {paused || reduceMotion ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
          {reduceMotion ? "Reduced motion" : paused ? "Play motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
