"use client";

import { ArrowDown, ArrowUpRight, FileText, Github } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import { Fragment } from "react";
import { hero, identity } from "@/data/portfolio";
import { DigitalScene } from "@/components/digital-scene";
import { easeOut } from "@/lib/animations";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduceMotion ? 0 : delay, ease: easeOut },
  });

  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-heading">
      <div className="hero__layout shell">
        <div className="hero__copy">
          <span className="digital-eyebrow">PORTFOLIO / SHIHAB BIN KADER</span>
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

        <DigitalScene />
      </div>

      <motion.a className="scroll-cue" href="#about" {...entrance(0.9)}>
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" size={15} />
      </motion.a>
    </section>
  );
}
