"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Environment,
  Sparkles,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

// Gentle gradient sphere that forms the main background element
function GradientSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <Sphere ref={mesh} args={[4, 64, 64]} position={[0, 0, -5]} scale={1.5}>
      <MeshDistortMaterial
        color="#ff6a00"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.9}
        opacity={0.2}
        transparent={true}
      />
    </Sphere>
  );
}

// Subtle floating particles
function FloatingParticles() {
  // Generate random positions for the particles
  const count = 500;
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // push particles back
    }
    return positions;
  });

  const points = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
      points.current.rotation.z = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6a00"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Soft glowing orb that moves around
function GlowingOrb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Create a circular path
      mesh.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 3;
      mesh.current.position.y = Math.cos(clock.getElapsedTime() * 0.2) * 2;
      mesh.current.position.z = Math.sin(clock.getElapsedTime() * 0.1) - 2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <Sphere ref={mesh} args={[0.3, 32, 32]}>
        <meshBasicMaterial color="#ff8a30" transparent opacity={0.8} />
      </Sphere>
    </Float>
  );
}

// Secondary accent orb with different color
function AccentOrb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Create a different circular path
      mesh.current.position.x = Math.sin(clock.getElapsedTime() * 0.15 + 2) * 4;
      mesh.current.position.y = Math.cos(clock.getElapsedTime() * 0.15 + 2) * 3;
      mesh.current.position.z = Math.cos(clock.getElapsedTime() * 0.05) - 3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <Sphere ref={mesh} args={[0.2, 32, 32]}>
        <meshBasicMaterial color="#ff4500" transparent opacity={0.7} />
      </Sphere>
    </Float>
  );
}

export default function HeroBackground() {
  // Add state for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices to lower quality and improve performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6a00" />

        {/* Main background elements */}
        <GradientSphere />
        <FloatingParticles />

        {/* Accent elements - fewer on mobile */}
        {!isMobile && (
          <>
            <GlowingOrb />
            <AccentOrb />
            <Sparkles
              count={20}
              scale={10}
              size={1}
              speed={0.3}
              opacity={0.2}
              color="#ff6a00"
            />
          </>
        )}

        {/* Minimal elements for mobile */}
        {isMobile && (
          <Sparkles
            count={10}
            scale={10}
            size={1}
            speed={0.2}
            opacity={0.2}
            color="#ff6a00"
          />
        )}

        {/* Subtle environment lighting */}
        <Environment preset="sunset" />

        {/* Minimal camera movement */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI * 0.55}
          minPolarAngle={Math.PI * 0.45}
        />
      </Canvas>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40 pointer-events-none"></div>

      {/* Very subtle noise texture */}
      <div
        className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}
