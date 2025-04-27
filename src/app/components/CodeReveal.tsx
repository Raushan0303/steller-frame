"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function CodeReveal() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        opacity: active ? 0 : 1,
        transition: "opacity 1s ease-out",
        transitionDelay: "2s",
      }}
    >
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl w-full h-64 relative overflow-hidden">
          <TypedCode />
        </div>
      </div>
    </div>
  );
}

// TypedCode component renders the typing animation
function TypedCode() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 1) {
          clearInterval(interval);
          return 1;
        }
        return p + 0.01;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Simplified code sample
  const codeSample = `
// AI-powered video generation
const generateVideo = async (prompt) => {
  const model = await StellarFrame.loadModel('cinematic-v2');
  
  // Process the user prompt
  const params = {
    text: prompt,
    style: 'cinematic',
    duration: 30,
    resolution: '1080p'
  };
  
  // Generate the video
  const result = await model.generate(params);
  return result.videoUrl;
};
  `;

  // Calculate how much of the code to show based on progress
  const displayCode = useMemo(() => {
    const totalChars = codeSample.length;
    const charsToShow = Math.floor(totalChars * progress);
    return codeSample.slice(0, charsToShow);
  }, [progress, codeSample]);

  return (
    <div className="w-full h-full bg-black/90 rounded-lg p-4 font-mono text-sm text-green-400 overflow-hidden">
      <pre>{displayCode}</pre>
      <div className="h-5 w-2 bg-green-400 inline-block animate-pulse ml-1"></div>
    </div>
  );
}
