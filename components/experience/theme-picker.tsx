"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, Palette, X } from "lucide-react";
import { themes } from "@/data/themes";
import { useExperience } from "./experience-provider";

export function ThemePicker() {
  const { theme, setTheme } = useExperience();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!container.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);

  return <div ref={container} className="theme-picker">
    <button ref={trigger} type="button" className="theme-trigger" aria-label="Choose website colours" aria-expanded={open} aria-controls="theme-options" onClick={() => setOpen((value) => !value)}><Palette size={13} aria-hidden="true" /> Theme</button>
    {open && <div className="theme-popover" id="theme-options"><div className="theme-popover__heading"><strong>Choose your colour</strong><button type="button" aria-label="Close colour options" onClick={() => { setOpen(false); trigger.current?.focus(); }}><X size={14} /></button></div><div className="theme-options" role="group" aria-label="Website colour theme">
      {themes.map((option) => <button key={option.id} type="button" aria-pressed={theme === option.id} onClick={() => setTheme(option.id)} style={{ "--swatch-bg": option.background, "--swatch-accent": option.accent, "--swatch-secondary": option.secondary } as CSSProperties}><span className="theme-swatch" aria-hidden="true"><i /><i /></span><span>{option.label}</span>{theme === option.id && <Check size={13} aria-hidden="true" />}</button>)}
    </div><p>Remembered on this device.</p></div>}
  </div>;
}
