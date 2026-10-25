"use client";

import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { basePath, identity, navigationItems } from "@/data/portfolio";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const path = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled || menuOpen ? "site-nav--filled" : ""}`}>
      <div className="site-nav__inner shell">
        <Link className="monogram" href="/" aria-label="Shihab Bin Kader — home" onClick={closeMenu}>
          <span>SBK</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.section}
              href={item.href}
              onClick={closeMenu}
              aria-current={(item.href === "/" ? path === "/" : path === item.href.replace(/\/$/, "") || path.startsWith(item.href)) ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            className="site-nav__github"
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Shihab Bin Kader’s GitHub profile"
            onClick={closeMenu}
          >
            <Github aria-hidden="true" size={18} strokeWidth={1.7} />
            <span className="mobile-only">GitHub</span>
          </a>
        </nav>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
