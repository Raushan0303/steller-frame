"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  type: "gradient" | "highlight" | "wave";
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = "gradient",
  className = "",
  delay = 0,
}) => {
  // Split text into words for individual animation
  const words = text.split(" ");

  // Animation variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block mr-2 
            ${
              type === "gradient"
                ? "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
                : type === "highlight"
                ? "relative px-1 py-1"
                : ""
            }`}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          {type === "highlight" && (
            <motion.span
              className="absolute inset-0 bg-orange-500/30 rounded-md -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: delay + 0.1 * i,
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.span>
          )}
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
