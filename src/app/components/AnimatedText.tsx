"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  type?: "gradient" | "wave" | "highlight";
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  type = "gradient",
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  // Split text into words for individual animation
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Wave animation for text
  const waveAnimation = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        delay: i * 0.05,
        y: {
          repeat: 0,
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    }),
  };

  // Highlight animation for text
  const highlightAnimation = {
    hidden: {
      backgroundSize: "0% 100%",
      opacity: 0,
    },
    visible: {
      backgroundSize: "100% 100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };

  // Render different animation types
  if (type === "wave") {
    return (
      <motion.span
        className={`inline-block ${className}`}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {Array.from(text).map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={waveAnimation}
            className="inline-block mx-[1px]"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === "highlight") {
    return (
      <motion.span
        className={`inline-block bg-gradient-to-r from-[#00a8ff] to-[#9c27b0] bg-no-repeat text-transparent bg-clip-text bg-left-bottom ${className}`}
        initial="hidden"
        animate="visible"
        variants={highlightAnimation}
      >
        {text}
      </motion.span>
    );
  }

  // Default gradient animation
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
