"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { additionalResearch, research } from "@/data/portfolio";
import { easeOut } from "@/lib/animations";

export function Research() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="research section-shell" id="research" aria-labelledby="research-title">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Research & publication"
          title="From visual features to explainable evidence."
          description="Published work, ongoing research, and my contributions to each study."
        />

        <div className="research-record">
          <div className="research-record__meta">
            <span>Publication / 2025</span>
            <span>{research.role}</span>
          </div>
          <div className="research-record__content">
            <h3 id="research-title">{research.title}</h3>
            <p className="research-record__conference">{research.conference}</p>
            <p>{research.summary}</p>
            <p><strong>My contribution.</strong> {research.contribution}</p>
            <div className="research-result">
              <span>Reported in the publication</span>
              <strong>{research.result}</strong>
            </div>
          </div>
        </div>

        <article className="research-record research-record--secondary" aria-labelledby="review-title">
          <div className="research-record__meta">
            <span>Manuscript / {additionalResearch.status}</span>
            <span>{additionalResearch.role}</span>
          </div>
          <div className="research-record__content">
            <h3 id="review-title">{additionalResearch.title}</h3>
            <p><strong>My contribution.</strong> {additionalResearch.contribution}</p>
          </div>
        </article>

        <div className="methodology" aria-label={`Methodology: ${research.methodology.join(" to ")}`}>
          <span className="methodology__label">Mango classification / Method 01—06</span>
          <motion.ol
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
          >
            {research.methodology.map((step, index) => (
              <motion.li
                key={step}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.42, ease: easeOut }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < research.methodology.length - 1 ? <i aria-hidden="true" /> : null}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
