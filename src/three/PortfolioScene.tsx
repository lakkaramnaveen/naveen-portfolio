// src/three/PortfolioScene.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

const SpinningCube: React.FC = () => {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const PortfolioScene: React.FC = () => {
  return (
    <div className="three-wrapper" aria-label="3D portfolio visual">
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
