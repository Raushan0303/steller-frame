"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingIconsProps {
  variant?: "default" | "cta" | "hero";
  className?: string;
}

const HeroIcons = () => {
  return (
    <>
      <div className="absolute -left-10 top-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 opacity-30 blur-xl animate-float"></div>
      <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-pink-600 opacity-30 blur-xl animate-float-reverse"></div>
      <div className="absolute left-1/4 bottom-32 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-teal-500 opacity-30 blur-xl animate-float"></div>
    </>
  );
};

const CtaIcons = () => {
  return (
    <>
      {/* Larger gradient orbs with blur effect */}
      <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-gradient-to-r from-orange-400 to-pink-600 opacity-20 blur-2xl animate-float"></div>
      <div className="absolute right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 opacity-15 blur-3xl animate-float-reverse"></div>
      <div className="absolute left-1/3 bottom-0 w-52 h-52 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-20 blur-2xl animate-float"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute left-10 top-1/3 w-8 h-8 rounded-md bg-orange-500 opacity-60"
        animate={{
          rotate: [0, 180, 180, 0],
          scale: [1, 1.2, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-20 bottom-20 w-6 h-12 rounded-full bg-purple-500 opacity-60"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-10 w-10 h-10 rounded-full border-2 border-teal-400 opacity-70"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

const DefaultIcons = () => {
  // Implementation of DefaultIcons
  return null; // Placeholder return, actual implementation needed
};

export default function FloatingIcons({
  variant = "default",
  className = "",
}: FloatingIconsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {variant === "hero" ? (
        <HeroIcons />
      ) : variant === "cta" ? (
        <CtaIcons />
      ) : (
        <DefaultIcons />
      )}
    </div>
  );
}
