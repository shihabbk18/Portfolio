"use client";

import { ArrowDown, ArrowUpRight, FileText, Github } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { Fragment, type PointerEvent } from "react";
import { hero, identity } from "@/data/portfolio";
import { easeOut } from "@/lib/animations";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawY, { stiffness: 110, damping: 22 });
  const rotateY = useSpring(rawX, { stiffness: 110, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || window.matchMedia("(max-width: 860px)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
    rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
  };

  const resetVisual = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduceMotion ? 0 : delay, ease: easeOut },
  });

  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-heading">
      <div className="hero__layout shell">
        <div className="hero__copy">
          <motion.div className="status-label" {...entrance(0.05)}>
            <i aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </motion.div>

          <motion.p className="hero__name" {...entrance(0.14)}>
            {identity.name}
          </motion.p>
          <motion.p className="hero__title" {...entrance(0.2)}>
            {identity.title}
          </motion.p>

          <h1 id="hero-heading" className="hero__heading">
            {hero.heading.split(" ").map((word, index) => (
              <Fragment key={`${word}-${index}`}>
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: "0.55em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.46,
                  delay: reduceMotion ? 0 : 0.24 + index * 0.025,
                  ease: easeOut,
                }}
              >
                {word}
              </motion.span>
              {" "}
              </Fragment>
            ))}
          </h1>

          <motion.p className="hero__description" {...entrance(0.68)}>
            {hero.description}
          </motion.p>

          <motion.div className="hero__actions" {...entrance(0.78)}>
            <a className="button button--primary" href="#work">
              Explore my work
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a
              className="button button--secondary"
              href={identity.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} />
              View GitHub
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a className="button button--quiet" href={identity.cv} target="_blank" rel="noreferrer">
              <FileText aria-hidden="true" size={16} />
              View CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.62, delay: reduceMotion ? 0 : 0.18, ease: easeOut }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetVisual}
          style={{ rotateX, rotateY }}
        >
          <div className="hero-visual__orbit hero-visual__orbit--outer" />
          <div className="hero-visual__orbit hero-visual__orbit--inner" />
          <span className="hero-visual__axis hero-visual__axis--x" />
          <span className="hero-visual__axis hero-visual__axis--y" />
          <div className="hero-visual__core">
            <small>Research system / 01</small>
            <strong>{identity.monogram}</strong>
            <span>Vision · Evidence · Meaning</span>
          </div>
          {hero.orbitLabels.map((label, index) => (
            <span key={label} className={`hero-visual__label hero-visual__label--${index + 1}`}>
              {label}
            </span>
          ))}
          <i className="hero-visual__node hero-visual__node--1" />
          <i className="hero-visual__node hero-visual__node--2" />
          <i className="hero-visual__node hero-visual__node--3" />
        </motion.div>
      </div>

      <motion.a className="scroll-cue" href="#about" {...entrance(0.9)}>
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" size={15} />
      </motion.a>
    </section>
  );
}
