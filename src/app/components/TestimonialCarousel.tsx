"use client";

import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "This AI video tool has transformed our marketing campaigns. We create professional videos in minutes instead of days.",
      name: "John D.",
      title: "Marketing Director",
    },
    {
      quote:
        "The AI characters are incredibly realistic and have helped us connect with our audience in a whole new way.",
      name: "Sarah W.",
      title: "Content Creator",
    },
    {
      quote:
        "StellarFrame has revolutionized how we create product demos and training materials for our global team.",
      name: "Michael T.",
      title: "Product Manager",
    },
    {
      quote:
        "The quality of AI-generated videos exceeds our expectations. Our clients are amazed by the results.",
      name: "Emma L.",
      title: "Creative Director",
    },
    {
      quote:
        "I&apos;ve tried many AI tools, but StellarFrame offers the best combination of quality and ease of use.",
      name: "David K.",
      title: "Freelance Creator",
    },
  ];

  // Duplicate the items to create the illusion of infinite scrolling
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set animation
    const scrollAnimation = () => {
      if (!scrollContainer) return;

      // If we've scrolled to a point where we should reset
      if (
        scrollContainer.scrollLeft >=
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) * 0.7
      ) {
        // Reset scroll position to create seamless loop effect
        scrollContainer.scrollLeft = 0;
      } else {
        // Continue scrolling
        scrollContainer.scrollLeft += 1;
      }
    };

    // Set interval for smooth scrolling
    const interval = setInterval(scrollAnimation, 20);

    // Clean up
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-full mx-auto">
      {/* Gradient fade effect on left */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none"></div>

      {/* Scrolling content */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-6 py-8 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* First set of testimonials */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`first-${index}`}
            className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-[#2a2a2a] flex-shrink-0 w-[350px] hover:shadow-xl hover:border-[#3a3a3a] transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-[#00a8ff]/10 to-[#9c27b0]/10 h-[3px] w-16 mb-6"></div>
            <div className="text-white text-lg md:text-xl mb-6 font-light">
              &ldquo;{testimonial.quote}&rdquo;
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00a8ff]/30 to-[#9c27b0]/30 rounded-full mr-4 flex items-center justify-center text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate set for infinite scrolling */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`second-${index}`}
            className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-[#2a2a2a] flex-shrink-0 w-[350px] hover:shadow-xl hover:border-[#3a3a3a] transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-[#00a8ff]/10 to-[#9c27b0]/10 h-[3px] w-16 mb-6"></div>
            <div className="text-white text-lg md:text-xl mb-6 font-light">
              &ldquo;{testimonial.quote}&rdquo;
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00a8ff]/30 to-[#9c27b0]/30 rounded-full mr-4 flex items-center justify-center text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient fade effect on right */}
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none"></div>

      {/* Add custom styles to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
