import type { ReactNode } from "react";
import { ClayIllustration } from "@/components/clay/clay-illustration";

export function PageIntro({ index, label, title, description, children, sceneLabel, artwork }: { index: string; label: string; title: string; description: string; children?: ReactNode; sceneLabel: string; artwork?: ReactNode }) {
  return <section className="route-intro" id="top" aria-labelledby="page-title"><div className="shell route-intro__layout"><div className="route-intro__copy"><span className="digital-eyebrow">{index} / {label}</span><h1 id="page-title" tabIndex={-1}>{title}</h1><p>{description}</p>{children}</div><div className="route-intro__space">{artwork ?? <ClayIllustration />}<span>{sceneLabel}</span></div></div></section>;
}
