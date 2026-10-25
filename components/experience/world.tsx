"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Group, MathUtils } from "three";
import { CameraRig } from "./camera-rig";
import { useExperience } from "./experience-provider";
import { projects } from "@/data/projects";

const colors = ["#67e8f9", "#b49aff", "#5eead4", "#93c5fd", "#f1b7ff"];

function NeuralCore({ research = false }: { research?: boolean }) {
  const group = useRef<Group>(null);
  const { motionEnabled } = useExperience();
  useFrame((_, delta) => { if (group.current && motionEnabled) group.current.rotation.y += delta * 0.14; });
  return (
    <group ref={group} rotation={[0.25, 0, -0.2]}>
      <mesh><icosahedronGeometry args={[1.35, research ? 2 : 1]} /><meshStandardMaterial color="#65e9f5" emissive="#1aa7c1" emissiveIntensity={0.5} wireframe /></mesh>
      <mesh><icosahedronGeometry args={[0.65, 1]} /><meshStandardMaterial color="#9e8bff" metalness={0.75} roughness={0.2} emissive="#493786" emissiveIntensity={0.8} /></mesh>
      {[0, 1, 2].map((index) => <mesh key={index} rotation={[index * 0.8, index * 0.6, 0]}><torusGeometry args={[1.8 + index * 0.12, 0.012, 8, 96]} /><meshBasicMaterial color={colors[index]} transparent opacity={0.65} /></mesh>)}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = i / 12 * Math.PI * 2;
        return <mesh key={i} position={[Math.cos(angle) * 1.55, Math.sin(angle) * 1.55, Math.sin(i * 2) * 0.7]}><sphereGeometry args={[0.045, 8, 8]} /><meshBasicMaterial color="#b7faff" /></mesh>;
      })}
    </group>
  );
}

function Timeline() {
  return <group rotation={[0, -0.3, -0.3]}>
    <mesh><cylinderGeometry args={[0.015, 0.015, 4.2, 8]} /><meshBasicMaterial color="#8e80d9" /></mesh>
    {[-1.8, -0.6, 0.6, 1.8].map((y, i) => <group key={y} position={[0, y, 0]}>
      <mesh><icosahedronGeometry args={[0.2, 1]} /><meshStandardMaterial color={colors[i]} emissive={colors[i]} emissiveIntensity={0.4} /></mesh>
      <mesh position={[i % 2 ? 0.85 : -0.85, 0, 0]}><boxGeometry args={[1.2, 0.6, 0.08]} /><meshStandardMaterial color="#17273d" metalness={0.5} roughness={0.3} /></mesh>
      <mesh position={[i % 2 ? 0.85 : -0.85, 0, 0.06]}><boxGeometry args={[0.85, 0.03, 0.02]} /><meshBasicMaterial color={colors[i]} /></mesh>
    </group>)}
  </group>;
}

function Gallery() {
  const group = useRef<Group>(null);
  const { selectedProject, motionEnabled } = useExperience();
  useFrame((_, delta) => {
    if (!group.current) return;
    const target = -selectedProject / projects.length * Math.PI * 2;
    group.current.rotation.y = motionEnabled ? MathUtils.damp(group.current.rotation.y, target, 4, delta) : target;
  });
  return <group position={[0, 0, -1.6]}><group ref={group}>
    {projects.map((project, index) => {
      const angle = index / projects.length * Math.PI * 2;
      return <group key={project.id} position={[Math.sin(angle) * 2.2, 0, Math.cos(angle) * 2.2]} rotation={[0, angle, 0]}>
        <mesh><boxGeometry args={[1.4, 1.8, 0.08]} /><meshStandardMaterial color={index === selectedProject ? "#193b53" : "#101d32"} metalness={0.6} roughness={0.4} /></mesh>
        <mesh position={[0, 0.15, 0.12]} rotation={[0.4, 0.3, 0]}><torusKnotGeometry args={[0.3, 0.07, 64, 8, index + 2, 3]} /><meshStandardMaterial color={colors[index]} emissive={colors[index]} emissiveIntensity={0.45} metalness={0.6} roughness={0.25} /></mesh>
        {[0, 1, 2].map((line) => <mesh key={line} position={[-0.1, -0.5 - line * 0.12, 0.07]}><boxGeometry args={[0.9 - line * 0.15, 0.025, 0.01]} /><meshBasicMaterial color={colors[index]} transparent opacity={0.6} /></mesh>)}
      </group>;
    })}
  </group></group>;
}

function Terminal() {
  return <group rotation={[0.1, -0.2, 0]}>
    <mesh><boxGeometry args={[2.7, 1.8, 0.12]} /><meshStandardMaterial color="#112840" metalness={0.6} roughness={0.25} /></mesh>
    <mesh position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 4]}><torusGeometry args={[0.65, 0.025, 8, 4]} /><meshBasicMaterial color="#67e8f9" /></mesh>
    <mesh rotation={[1.1, 0, 0]}><torusGeometry args={[2.0, 0.015, 8, 96]} /><meshBasicMaterial color="#a78bfa" /></mesh>
  </group>;
}

export function World() {
  const { motionEnabled } = useExperience();
  return <>
    <CameraRig />
    <ambientLight intensity={1.2} />
    {[0, 12, 24, 36, 48].map((x) => <group key={x} position={[x + 2, 0, 0]}>
      <pointLight position={[1, 3, 4]} intensity={20} color="#8feaff" />
      <pointLight position={[-3, -1, 2]} intensity={12} color="#a38bff" />
      <Sparkles count={55} scale={[7, 6, 5]} size={2} speed={motionEnabled ? 0.18 : 0} opacity={0.45} color="#8ae8ff" />
    </group>)}
    <group position={[2, 0, 0]}><NeuralCore /></group>
    <group position={[14, 0, 0]}><Timeline /></group>
    <group position={[26, 0, 0]}><Gallery /></group>
    <group position={[38, 0, 0]}><Terminal /></group>
    <group position={[50, 0, 0]}><NeuralCore research /></group>
  </>;
}
