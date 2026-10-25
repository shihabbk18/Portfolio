"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, MathUtils } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { basePath } from "@/data/portfolio";
import { useExperience } from "./experience-provider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CameraRig() {
  const rig = useRef<Group>(null);
  const currentX = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const pathname = usePathname();
  const { motionEnabled } = useExperience();
  const invalidate = useThree((state) => state.invalidate);
  const path = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  const station = path.startsWith("/about") ? 12 : path.startsWith("/work") ? 24 : path.startsWith("/contact") ? 36 : path.startsWith("/research") ? 48 : 0;

  useGSAP(() => {
    if (!rig.current) return;
    const updatePointer = (event: PointerEvent) => {
      pointer.current = { x: event.clientX / window.innerWidth * 2 - 1, y: event.clientY / window.innerHeight * 2 - 1 };
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    rig.current.position.x = currentX.current;
    gsap.to(rig.current.position, { x: station, duration: motionEnabled ? 1.4 : 0, ease: "power3.inOut", onUpdate: () => { if (rig.current) currentX.current = rig.current.position.x; invalidate(); } });
    gsap.set(rig.current.position, { z: 0 });
    if (motionEnabled) {
      gsap.to(rig.current.position, { z: -0.8, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.8 } });
    }
    const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());
    invalidate();
    return () => { window.removeEventListener("pointermove", updatePointer); cancelAnimationFrame(refresh); };
  }, { dependencies: [station, pathname, motionEnabled], revertOnUpdate: true });

  useFrame(({ camera, size }, delta) => {
    if (!rig.current) return;
    camera.position.x = MathUtils.damp(camera.position.x, motionEnabled ? pointer.current.x * 0.2 : 0, 4, delta);
    camera.position.y = MathUtils.damp(camera.position.y, 0.5 + (motionEnabled ? pointer.current.y * 0.1 : 0), 4, delta);
    camera.lookAt(rig.current.position.x + (size.width < 760 ? 1.5 : 0), 0, 0);
  });

  return <group ref={rig}><PerspectiveCamera makeDefault position={[0, 0.5, 8]} fov={48} /></group>;
}
