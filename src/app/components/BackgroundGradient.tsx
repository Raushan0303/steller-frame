"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0720] to-[#0c0915]"></div>

      {/* Main central gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 0, 255, 0.8) 0%, rgba(40, 0, 115, 0.3) 50%, rgba(0, 0, 0, 0) 80%)",
        }}
      />

      {/* Animated blobs */}
      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full opacity-40 blur-[120px]"
        animate={{
          x: [
            `calc(10% + ${mousePosition.x * 10}%)`,
            `calc(30% + ${mousePosition.x * 10}%)`,
            `calc(10% + ${mousePosition.x * 10}%)`,
          ],
          y: [
            `calc(20% + ${mousePosition.y * 10}%)`,
            `calc(40% + ${mousePosition.y * 10}%)`,
            `calc(20% + ${mousePosition.y * 10}%)`,
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(137, 92, 246, 0.9) 0%, rgba(98, 49, 188, 0.7) 30%, rgba(70, 13, 160, 0) 70%)",
        }}
      />

      <motion.div
        className="absolute w-[50vw] h-[50vh] rounded-full opacity-40 blur-[100px]"
        animate={{
          x: [
            `calc(70% - ${mousePosition.x * 10}%)`,
            `calc(55% - ${mousePosition.x * 10}%)`,
            `calc(70% - ${mousePosition.x * 10}%)`,
          ],
          y: [
            `calc(60% - ${mousePosition.y * 10}%)`,
            `calc(35% - ${mousePosition.y * 10}%)`,
            `calc(60% - ${mousePosition.y * 10}%)`,
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(0, 168, 255, 0.9) 0%, rgba(0, 123, 210, 0.7) 30%, rgba(0, 65, 130, 0) 70%)",
        }}
      />

      <motion.div
        className="absolute w-[40vw] h-[40vh] rounded-full opacity-40 blur-[80px]"
        animate={{
          x: [
            `calc(30% - ${mousePosition.x * 5}%)`,
            `calc(45% - ${mousePosition.x * 5}%)`,
            `calc(30% - ${mousePosition.x * 5}%)`,
          ],
          y: [
            `calc(70% + ${mousePosition.y * 5}%)`,
            `calc(85% + ${mousePosition.y * 5}%)`,
            `calc(70% + ${mousePosition.y * 5}%)`,
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 85, 0, 0.8) 0%, rgba(211, 36, 0, 0.6) 30%, rgba(150, 10, 0, 0) 70%)",
        }}
      />

      {/* Extra color blobs for more vibrancy */}
      <motion.div
        className="absolute w-[30vw] h-[30vh] rounded-full opacity-30 blur-[70px]"
        animate={{
          x: [
            `calc(20% + ${mousePosition.x * 8}%)`,
            `calc(10% + ${mousePosition.x * 8}%)`,
            `calc(20% + ${mousePosition.x * 8}%)`,
          ],
          y: [
            `calc(30% - ${mousePosition.y * 8}%)`,
            `calc(20% - ${mousePosition.y * 8}%)`,
            `calc(30% - ${mousePosition.y * 8}%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 0, 200, 0.7) 0%, rgba(180, 0, 140, 0.5) 40%, rgba(100, 0, 80, 0) 70%)",
        }}
      />

      <motion.div
        className="absolute w-[25vw] h-[25vh] rounded-full opacity-30 blur-[60px]"
        animate={{
          x: [
            `calc(80% - ${mousePosition.x * 7}%)`,
            `calc(75% - ${mousePosition.x * 7}%)`,
            `calc(80% - ${mousePosition.x * 7}%)`,
          ],
          y: [
            `calc(10% + ${mousePosition.y * 7}%)`,
            `calc(15% + ${mousePosition.y * 7}%)`,
            `calc(10% + ${mousePosition.y * 7}%)`,
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 170, 0.7) 0%, rgba(0, 180, 120, 0.5) 40%, rgba(0, 100, 60, 0) 70%)",
        }}
      />

      {/* Simulated noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANwSURBVGhD7ZpLiFVHGMd/c70+EiUiSlDBRSmCLlyIZCG4KO3GVauCGzdtQOnCjRvFRUvXQZBWEJc1CxetoBixPhJEJCBi1UBEzev6+P0v3xnm3JPJzJm5M7lc/T/48Z/XfOf7zpk5c76ZGzS74f8DwzAM9mAXfoH9PQtjGFNjbFeQGeyeWYnPcQjP4CXeVBiOYzDGxlxRZjB7YAs+wUN8ibdKw3EMY27MFWcAdmIPnmO10U9Izj04nkdlMsrqwLbCo9nk/oKrUYIzdGO0Bw24O0Z5TYXJdRm9wC5PQsK9mVFmE+E+TIc3cGkdYCGbldidGfFXlNdcOOW5JlbYrcGZ8hwIc1tR1+GsLHOPVVYlzNGBSjFkldcMl3mFwMTbVlmVMEfXy9hYvkE8wi4vQVWOlfb24QM/Syd2YLFv+qhxfMRvZlmVMMefca3Cmh/ZTtKFp9aRCLtXPE7RyUonVYcnqkTdh2vbArdgUmF3Gk/VHNMqqxLm+Bw9K9Y0BnFYzHMN/GGVVQlzXEOcbMdW3MNFPHDYTLPKq4R59c6ID/gRz2A0GdBsY9U9R64g/o7T/sn6Yp6qf0acFZPzk2f0R3MfnY99cKXMtSg0u+Tuwv/weaShRjhzF4HlDPWNUTbXotCs83oPe9CE5j+6Br6DxXqMeWrOdZ+VWY9G/+Bn7M2M9cUYGmvQyqtXI4b+wkv4ODP2FmNorA3dSI7L6KE1kmNyOzyD/bkxD31j6xpsZN3PKcx/ZI3kSBrRN3YAb2E07MUGZuQY9uI8dngWM8xTc67f8Q884u9RzMj32IM6p3QT+E++Qi/iMDRjGGJtpE00T5fRZLSZK/zGYq68p7VR9I1sxRPU3PzLKq+CGtHtdBnNTL+yR0LqG/OsMRuJ4DKau96KRmq/RZBQbhltxp+tEVFuGW3Gn7WRHEkjEdTSyHu4ioWO/q3RiL6xVbiJeY7a0Bi1wgV+3DO4u2cxwzz1G1uHR2goN6L1LM7gR+zJjPXFGBprKHm59rrNJmFuGW3Gn7WRHEkjEdTSSLuAR9rE0khSy2yTgMvIMxJ9I9p9XC83bKLZpo6rFdQ3pt3HOzyJGeb5rnuQCZJGIgnDdkjqXiOFaGyM7Q1iGP4Ft9OJVdYvchIAAAAASUVORK5CYII=')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Light rays effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black to-transparent opacity-40"></div>
    </div>
  );
};

export default BackgroundGradient;
