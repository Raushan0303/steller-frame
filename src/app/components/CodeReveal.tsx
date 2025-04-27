"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Stars,
  Float,
  MeshDistortMaterial,
  Text3D,
  Text,
  Sphere,
  useTexture,
} from "@react-three/drei";

const fakeCode = [
  "import { createAIVideo } from 'stellarframe/core';",
  "import { VideoRenderer, Effects } from 'stellarframe/render';",
  "",
  "// Generate an AI-powered marketing video",
  "const generateVideo = async (prompt: string) => {",
  "  const videoData = await createAIVideo({",
  "    prompt,",
  "    duration: 30,",
  "    style: 'cinematic',",
  "    resolution: '1080p',",
  "    characters: ['presenter_female_1', 'customer_male_2'],",
  "    soundtrack: 'inspiring',",
  "  });",
  "",
  "  return new VideoRenderer(videoData)",
  "    .addEffect(Effects.colorGrading('professional'))",
  "    .addEffect(Effects.depthOfField(0.7))",
  "    .addEffect(Effects.motionBlur(0.3))",
  "    .render();",
  "};",
  "",
  "// Call the function with a marketing prompt",
  "generateVideo('Create a stunning product showcase for our new AI tool');",
];

// 3D Floating Camera model
function CameraModel({ scale = 0.5, position = [0, 0, 0] }) {
  const ref = useRef(null);

  // Simple camera model using primitives
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.position.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Camera body */}
      <mesh castShadow>
        <boxGeometry args={[1, 0.8, 0.5]} />
        <meshStandardMaterial
          color="#222222"
          metalness={0.9}
          roughness={0.1}
          emissive="#333333"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Lens */}
      <mesh position={[0, 0, 0.3]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 0.3, 32]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0.9}
          roughness={0.1}
          emissive="#444444"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Front glass - glow effect */}
      <mesh position={[0, 0, 0.45]} castShadow>
        <cylinderGeometry args={[0.28, 0.28, 0.1, 32]} />
        <meshStandardMaterial
          color="#00a8ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#4169e1"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Camera grip */}
      <mesh position={[0, -0.6, 0]} castShadow>
        <boxGeometry args={[0.7, 0.4, 0.3]} />
        <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Camera top display */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.3]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.5}
          roughness={0.2}
          emissive="#222222"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Glowing indicator light */}
      <mesh position={[0.3, 0.45, 0.2]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

// Animated film strip that floats in 3D space
function FilmStrip({ count = 5, spread = 4 }) {
  const frames = useRef([]);

  useFrame((state) => {
    frames.current.forEach((frame, i) => {
      frame.position.y =
        Math.sin(state.clock.getElapsedTime() * 0.5 + i * 0.5) * 0.2;
      frame.rotation.z =
        Math.sin(state.clock.getElapsedTime() * 0.3 + i * 0.2) * 0.1;
    });
  });

  return (
    <group position={[0, 0, -2]}>
      {Array.from({ length: count }).map((_, i) => (
        <group
          key={i}
          position={[i * (1.2 / count) * spread - spread / 2, 0, 0]}
          ref={(el) => (frames.current[i] = el)}
        >
          <mesh castShadow>
            <boxGeometry args={[1, 0.6, 0.05]} />
            <meshStandardMaterial
              color="#111"
              metalness={0.5}
              roughness={0.2}
              emissive={new THREE.Color().setHSL(i * 0.1, 1, 0.5)}
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Glowing particles that emit from a central point with enhanced visuals
function GlowingParticles({ count = 150 }) {
  const particles = useRef(null);
  const group = useRef(null);
  const [particleData, setParticleData] = useState([]);

  useEffect(() => {
    // Initialize particles with random positions and speeds
    const newParticles = Array.from({ length: count }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      ),
      size: Math.random() * 0.15 + 0.05,
      color: new THREE.Color().setHSL(
        Math.random(),
        0.9,
        0.6 + Math.random() * 0.4
      ),
      pulseSpeed: Math.random() * 2 + 1,
    }));

    setParticleData(newParticles);
  }, [count]);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime();

    // Get children from the group ref
    const children = group.current.children;

    // Update particle positions based on velocity and time
    particleData.forEach((particle, i) => {
      if (i >= children.length) return;

      const child = children[i];
      if (!child) return;

      // Move particle
      particle.position.add(particle.velocity);

      // Reset particle if it gets too far away
      if (particle.position.length() > 7) {
        particle.position.set(
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3
        );
      }

      // Apply position and pulse size
      child.position.copy(particle.position);

      // Pulsating size effect
      const pulse = 0.3 * Math.sin(time * particle.pulseSpeed) + 1;
      child.scale.set(
        particle.size * pulse,
        particle.size * pulse,
        particle.size * pulse
      );
    });
  });

  return (
    <group ref={group}>
      {particleData.map((particle, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial color={particle.color} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Floating 3D logo text
function LogoText() {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={[0, 2, 0]}
        fontSize={0.8}
        color="#ffffff"
        font="/fonts/Inter-Bold.woff"
        letterSpacing={0.1}
        material-toneMapped={false}
      >
        StellarFrame
        <meshStandardMaterial
          color="#ffffff"
          emissive="#5d85ff"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Text>
    </Float>
  );
}

// Gradient background sphere
function BackgroundSphere() {
  const mesh = useRef(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <>
      {/* Dynamic space background with vibrant colors */}
      <mesh ref={mesh} scale={[15, 15, 15]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#000050"
          metalness={0.9}
          roughness={0.5}
          side={THREE.BackSide}
          emissive="#4b0082"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Add vibrant nebula-like effect */}
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={6}
        saturation={1}
        fade
        speed={1.5}
      />

      {/* Colored atmosphere layers */}
      <mesh scale={[12, 12, 12]} rotation={[Math.PI / 6, 0, Math.PI / 4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#5d00ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh scale={[10, 10, 10]} rotation={[0, Math.PI / 3, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#ff5d00"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

// Main scene component that orchestrates the 3D elements
function LoaderScene({ progress }) {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 0, 6);
  }, [camera]);

  return (
    <>
      {/* Environmental elements with enhanced lighting and fog */}
      <fog attach="fog" args={["#000", 5, 15]} />
      <ambientLight intensity={0.5} />

      {/* Dynamic colored lights */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#5d85ff" />
      <pointLight position={[8, -5, 2]} intensity={0.8} color="#ff5d00" />
      <directionalLight position={[0, 5, 5]} intensity={1.2} color="#9c27b0" />

      {/* Animated environment */}
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={5}
        saturation={1}
        fade
        speed={1.5}
      />

      {/* Main elements */}
      <CameraModel position={[-2, 0, 0]} />
      <FilmStrip />
      <GlowingParticles count={80} />

      {/* Progress indicator with enhanced visuals */}
      <group position={[0, -1.5, 0]}>
        {/* Backdrop with glow */}
        <mesh position={[0, 0, -0.15]} receiveShadow>
          <boxGeometry args={[4.2, 0.4, 0.1]} />
          <meshStandardMaterial
            color="#111"
            metalness={0.8}
            roughness={0.2}
            emissive="#222"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Progress bar background */}
        <mesh position={[0, 0, -0.1]} receiveShadow>
          <boxGeometry args={[4, 0.2, 0.1]} />
          <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Animated progress bar */}
        <mesh position={[-2 + (progress * 2) / 100, 0, 0]} castShadow>
          <boxGeometry args={[(progress * 4) / 100, 0.2, 0.2]} />
          <meshStandardMaterial
            color="#00a8ff"
            metalness={0.8}
            roughness={0.2}
            emissive="#5d85ff"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Progress marker */}
        <mesh position={[-2 + (progress * 4) / 100, 0, 0.2]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Floating logo */}
      <LogoText />

      {/* Background */}
      <BackgroundSphere />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

const CanvasLoader = ({ progress }) => (
  <Canvas shadows dpr={[1, 2]}>
    <Suspense fallback={null}>
      <LoaderScene progress={progress} />
    </Suspense>
  </Canvas>
);

// ProgressiveText component for animated text display
const ProgressiveText = ({ texts, interval = 1500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <motion.div
      className="text-xl md:text-2xl font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        {texts[index]}
      </motion.span>
    </motion.div>
  );
};

// Main export component - Immersive 3D loading experience
const CodeReveal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(20); // Start at 20% to make it feel faster

  // Animation sequence texts
  const loadingTexts = [
    "Initializing AI Engine...",
    "Generating 3D video frames...",
    "Creating virtual characters...",
    "Calculating lighting and shadows...",
    "Applying cinematic effects...",
    "Composing visual elements...",
    "Optimizing for professional quality...",
    "Preparing your creation experience...",
  ];

  useEffect(() => {
    // Progress animation - Faster speed
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.5; // Increased from 0.7 to 1.5 for faster progress
        // Once we reach 100%, start the exit animation
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
          }, 500); // Reduced from 1000 to 500ms for faster exit
          return 100;
        }
        return newProgress;
      });
    }, 25); // Reduced from 50 to 25ms for faster updates

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8, // Reduced from 1.2 to 0.8
              ease: "easeInOut",
            },
          }}
        >
          {/* Main 3D canvas container */}
          <div className="w-full h-full">
            <CanvasLoader progress={progress} />
          </div>

          {/* Overlay with loading text and progress indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
            <ProgressiveText texts={loadingTexts} interval={800} />{" "}
            {/* Reduced from 1500 to 800ms */}
            <div className="mt-6 flex items-center space-x-2">
              <div className="text-sm font-medium text-gray-400">
                {Math.round(progress)}%
              </div>

              {/* Faster loading indicators */}
              <div className="flex space-x-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-blue-500"
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 0.8, // Reduced from 1.5 to 0.8
                      repeat: Infinity,
                      delay: i * 0.1, // Reduced from 0.2 to 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Simple syntax highlighting for the code
const CodeSyntaxHighlight = ({ code = "" }: { code?: string }) => {
  // Add null check to prevent errors when code is undefined
  if (code === null || code === undefined) return <span></span>;

  try {
    // Replace patterns with colored spans
    const coloredCode = code
      .replace(
        /(import|from|const|await|new|async|return)/g,
        '<span class="text-purple-400">$1</span>'
      )
      .replace(/(\/\/.*)/g, '<span class="text-green-500">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-yellow-300">$1</span>')
      .replace(
        /\b(function|string|true|false|null|undefined|if|else|try|catch|for|in|of|do|while|switch|case|break|continue|default|return|throw|=>)\b/g,
        '<span class="text-pink-400">$1</span>'
      )
      .replace(/\b(\w+)\(/g, '<span class="text-blue-400">$1</span>(')
      .replace(
        /({|}|\(|\)|;|,|\.|:|\[|\])/g,
        '<span class="text-gray-400">$1</span>'
      );

    return <span dangerouslySetInnerHTML={{ __html: coloredCode }} />;
  } catch (error) {
    console.error("Error in syntax highlighting:", error);
    return <span>{code}</span>;
  }
};

export default CodeReveal;
