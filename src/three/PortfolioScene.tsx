// src/three/PortfolioScene.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * Simple spinning cube used as a 3D accent in the portfolio.
 *
 * The rotation logic is frame-rate–independent via the `delta` value
 * provided by react-three-fiber.
 */
const SpinningCube: React.FC = () => {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((_state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Rotate slightly each frame, scaled by delta time
    mesh.rotation.x += delta * 0.4;
    mesh.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
};

/**
 * 3D portfolio scene container.
 *
 * - Encapsulated in a styled div so layout is controlled by CSS.
 * - Uses react-three-fiber for rendering and OrbitControls for exploration.
 * - Kept intentionally minimal to avoid bloating bundle size.
 */
const PortfolioScene: React.FC = () => {
  return (
    <div
      className="three-wrapper w-full rounded-2xl border border-slate-700/70 bg-slate-950/90 overflow-hidden h-64 sm:h-80"
      aria-label="3D portfolio scene"
    >
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={1} castShadow />
        <SpinningCube />
        <OrbitControls enablePan={false} maxDistance={6} minDistance={3} />
      </Canvas>
    </div>
  );
};

export default PortfolioScene;
export { SpinningCube };
