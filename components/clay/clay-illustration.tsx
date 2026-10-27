"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useExperience } from "@/components/experience/experience-provider";
import { withBasePath } from "@/data/portfolio";

const shapes = ["zig-zag", "twisted-torus", "quadrilateral", "triangle"];

/** Owner-supplied portrait; decorative shapes from the credited MIT theme. */
export function ClayIllustration({ happy = false }: { happy?: boolean }) {
  const { motionEnabled } = useExperience();
  return <div className={`clay-illustration ${happy ? "clay-illustration--happy" : ""}`}
    onPointerMove={(event) => {
      if (!motionEnabled || event.pointerType === "touch") return;
      const box = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--tilt-x", `${(event.clientY - box.top - box.height / 2) / -45}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${(event.clientX - box.left - box.width / 2) / 45}deg`);
    }} onPointerLeave={(event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    }} aria-hidden="true">
    <div className="clay-portrait"><motion.div initial={motionEnabled ? { y: "90%", opacity: 0.5 } : false} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
      <Image src={withBasePath("/clay/shihab-leather-cutout.png")} alt="" width={1024} height={1536} sizes="(max-width: 560px) 260px, (max-width: 860px) 330px, 500px" priority={!happy} />
    </motion.div></div>
    {!happy && shapes.map((shape, index) => <motion.div key={shape} className={`clay-shape clay-shape--${index}`} initial={motionEnabled ? { x: index % 2 ? 100 : -100, opacity: 0 } : false} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}>
      <Image src={withBasePath(`/clay/${shape}.webp`)} width={242} height={202} alt="" />
    </motion.div>)}
  </div>;
}
