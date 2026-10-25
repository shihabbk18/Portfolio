"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MeshStandardMaterial } from "three";

export function Robot({ attentive, speaking, motionEnabled }: { attentive: boolean; speaking: boolean; motionEnabled: boolean }) {
  const body = useRef<Group>(null);
  const eyes = useRef<Group>(null);
  const eyeMaterial = useRef<MeshStandardMaterial>(null);
  useFrame(({ clock }, delta) => {
    if (!body.current || !eyes.current) return;
    const t = clock.elapsedTime;
    body.current.position.y = motionEnabled ? Math.sin(t * 1.8) * 0.09 : 0;
    body.current.rotation.y += ((attentive ? -0.1 : 0.18) - body.current.rotation.y) * (1 - Math.exp(-5 * delta));
    eyes.current.scale.y = motionEnabled && t % 4.2 < 0.13 ? 0.1 : speaking ? 0.75 : 1;
    if (eyeMaterial.current) eyeMaterial.current.emissiveIntensity = speaking && motionEnabled ? 2.5 + Math.sin(t * 8) : attentive ? 2.4 : 1.3;
  });
  return <group ref={body} rotation={[0.05, 0.18, 0]}>
    <mesh><sphereGeometry args={[0.62, 24, 20]} /><meshStandardMaterial color="#dbeafe" metalness={0.65} roughness={0.26} /></mesh>
    <mesh position={[0, -0.55, -0.04]} scale={[1, 0.7, 1]}><sphereGeometry args={[0.34, 16, 12]} /><meshStandardMaterial color="#627b9e" metalness={0.8} roughness={0.3} /></mesh>
    <mesh position={[0, 0.04, 0.51]}><boxGeometry args={[0.98, 0.38, 0.2]} /><meshStandardMaterial color="#071425" metalness={0.5} roughness={0.25} /></mesh>
    <group ref={eyes} position={[0, 0.06, 0.63]}>
      {[-0.23, 0.23].map((x) => <mesh key={x} position={[x, 0, 0]}><capsuleGeometry args={[0.055, 0.08, 4, 8]} /><meshStandardMaterial ref={x < 0 ? eyeMaterial : undefined} color="#a3f7ff" emissive="#32d9ed" emissiveIntensity={attentive ? 2.4 : 1.3} /></mesh>)}
    </group>
    <mesh position={[0, 0.72, 0]}><cylinderGeometry args={[0.018, 0.018, 0.3, 8]} /><meshStandardMaterial color="#8aa9c5" /></mesh>
    <mesh position={[0, 0.9, 0]}><sphereGeometry args={[0.08, 12, 12]} /><meshStandardMaterial color="#b29aff" emissive="#8b5cf6" emissiveIntensity={attentive ? 2 : 0.7} /></mesh>
    {[-1, 1].map((side) => <mesh key={side} position={[side * 0.7, 0, 0]} rotation={[0, 0, side * 0.3]}><boxGeometry args={[0.22, 0.12, 0.3]} /><meshStandardMaterial color="#8ba7c2" metalness={0.7} roughness={0.3} /></mesh>)}
  </group>;
}
