import { ArrowUp } from "lucide-react";
import { identity } from "@/data/portfolio";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div>
          <Link className="monogram" href="/" aria-label="Return home"><span>SBK</span></Link>
          <p><strong>{identity.name}</strong><br />{identity.title}</p>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} {identity.name}</span>
        <a href={identity.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={identity.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
        <a href="#top">Back to top <ArrowUp aria-hidden="true" size={14} /></a>
      </div>
    </footer>
  );
}
