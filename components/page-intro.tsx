import type { ReactNode } from "react";

export function PageIntro({ index, label, title, description, children, sceneLabel }: { index: string; label: string; title: string; description: string; children?: ReactNode; sceneLabel: string }) {
  return <section className="route-intro" id="top" aria-labelledby="page-title"><div className="shell route-intro__layout"><div className="route-intro__copy"><span className="digital-eyebrow">{index} / {label}</span><h1 id="page-title" tabIndex={-1}>{title}</h1><p>{description}</p>{children}</div><div className="route-intro__space" aria-hidden="true"><span>{sceneLabel}</span><small>LIVE THREE.JS ENVIRONMENT</small></div></div></section>;
}
