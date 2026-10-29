"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function LampIntro({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<"off" | "on" | "done">("done");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const active = stage !== "done";

  useEffect(() => {
    // Only introduce the landing page; client-side navigation never replays it.
    const home = location.pathname.replace(/\/$/, "").toLowerCase();
    if ((home === "" || home === "/portfolio") && !location.hash && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("off");
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    trigger.current?.focus();
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") finish(); };
    document.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", escape); };
  }, [active]);

  function finish() {
    if (timer.current) clearTimeout(timer.current);
    setStage("done");
    requestAnimationFrame(() => {
      const main = document.getElementById("main-content");
      if (main) { main.setAttribute("tabindex", "-1"); main.focus({ preventScroll: true }); }
    });
  }

  function illuminate() {
    if (stage !== "off") return;
    setStage("on");
    timer.current = setTimeout(finish, 1800);
  }

  return <>
    <div inert={active} className={`lamp-site lamp-site--${stage}`}>{children}</div>
    {active && <div className={`lamp-intro lamp-intro--${stage}`} role="dialog" aria-modal="true" aria-label="Welcome to Shihab’s portfolio" onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
      if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons[1].focus(); }
      else if (!event.shiftKey && document.activeElement === buttons[1]) { event.preventDefault(); buttons[0].focus(); }
    }}>
      <div className="lamp-intro__light" aria-hidden="true" />
      <span className="lamp-intro__brand">SHIHAB BIN KADER <span>CREATIVE MIND. CURIOUS BUILDER.</span></span>
      <button ref={trigger} className="lamp-intro__switch" onClick={illuminate} aria-label="Switch on the lamp and enter portfolio" aria-disabled={stage === "on"}>
        <svg className="desk-lamp" viewBox="0 0 360 440" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="lamp-metal" x1="100" y1="200" x2="210" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#11151c"/><stop offset=".45" stopColor="#656b76"/><stop offset=".6" stopColor="#292e37"/><stop offset="1" stopColor="#0c0e13"/></linearGradient>
            <linearGradient id="lamp-shade" x1="150" y1="70" x2="265" y2="175" gradientUnits="userSpaceOnUse"><stop stopColor="#656976"/><stop offset=".35" stopColor="#30343e"/><stop offset="1" stopColor="#10131a"/></linearGradient>
            <radialGradient id="lamp-inside"><stop stopColor="#fff9d0"/><stop offset=".5" stopColor="#e3bd70"/><stop offset="1" stopColor="#8b652e"/></radialGradient>
          </defs>
          <ellipse cx="163" cy="400" rx="104" ry="17" fill="#000" opacity=".4"/>
          <ellipse cx="163" cy="384" rx="84" ry="19" fill="#10131a" stroke="#474d58" strokeWidth="2"/>
          <ellipse cx="163" cy="379" rx="65" ry="12" fill="url(#lamp-metal)"/>
          <path d="M163 375 L127 254 L182 136" stroke="#0b0d12" strokeWidth="17" strokeLinecap="round"/>
          <path d="M160 374 L124 254 L179 136" stroke="url(#lamp-metal)" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="127" cy="254" r="14" fill="#b68c46"/><circle cx="127" cy="254" r="7" fill="#30343c"/>
          <circle cx="163" cy="373" r="12" fill="#b68c46"/><circle cx="163" cy="373" r="5" fill="#30343c"/>
          <path d="M154 151 C160 61 224 39 253 105 L279 177 Z" fill="url(#lamp-shade)" stroke="#545965" strokeWidth="2"/>
          <ellipse cx="216" cy="164" rx="66" ry="23" transform="rotate(17 216 164)" fill="url(#lamp-inside)" stroke="#b28a4b" strokeWidth="3"/>
          <ellipse className="desk-lamp__bulb" cx="215" cy="156" rx="15" ry="18" fill="#b6a887"/>
          <g className="desk-lamp__cord"><path d="M218 177 V260" stroke="#d2b270" strokeWidth="2"/><rect x="212" y="259" width="12" height="22" rx="6" fill="#d2b270"/></g>
        </svg>
        <span className="lamp-intro__prompt">{stage === "off" ? "A little light. A world of ideas." : "Welcome to my world."}</span>
        <span className="lamp-intro__hint">{stage === "off" ? "Tap the lamp to explore" : ""}</span>
      </button>
      <button className="lamp-intro__skip" onClick={finish}>Skip intro ↗</button>
    </div>}
  </>;
}
