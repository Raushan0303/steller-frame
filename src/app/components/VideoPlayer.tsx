"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <iframe
        src={isPlaying ? `${videoUrl}?autoplay=1` : videoUrl}
        allow="autoplay; fullscreen"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
        id="heroVideo"
      ></iframe>

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute top-3 left-3 text-white text-sm font-medium bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full z-20">
        AI Product Demo
      </div>
    </div>
  );
}
