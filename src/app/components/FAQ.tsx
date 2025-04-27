"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="py-6 w-full flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">
          {question}
        </span>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isOpen ? "bg-orange-500" : "bg-black/40"
          } transition-all duration-300 border ${
            isOpen ? "border-orange-400" : "border-white/10"
          }`}
        >
          <svg
            className={`w-4 h-4 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 pl-0 md:pl-6 border-l-0 md:border-l border-orange-500/20">
              <p className="max-w-3xl">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does AI video generation work?",
      answer:
        "Our AI analyzes your input (text, images, or rough sketches) and generates professional-quality videos by understanding context, style preferences, and content needs. The system uses advanced machine learning to create animations, transitions, and visual effects automatically.",
    },
    {
      question: "Can I customize the generated videos?",
      answer:
        "Absolutely! After the AI generates your initial video, you can make detailed adjustments to every aspect - change colors, adjust transitions, modify text, replace elements, and fine-tune the timing. Our platform offers both automated excellence and complete creative control.",
    },
    {
      question: "What formats and resolutions do you support?",
      answer:
        "We support all standard video formats (MP4, MOV, AVI) and resolutions from 720p to 4K, depending on your subscription plan. You can also create videos in various aspect ratios including landscape, portrait, and square formats optimized for different platforms.",
    },
    {
      question: "How long does it take to generate a video?",
      answer:
        "Most videos under 2 minutes are generated within 5-15 minutes, depending on complexity and current system load. Longer or more complex projects may take up to 30 minutes. Premium subscribers enjoy priority processing that can reduce wait times by up to 50%.",
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer:
        "We offer unlimited revisions on all plans. If you're not happy with a generated video, you can provide more specific feedback and regenerate it. Our AI learns from your preferences over time, delivering increasingly accurate results that match your vision.",
    },
    {
      question: "Do I own the rights to videos I create?",
      answer:
        "Yes, you retain 100% ownership of all videos created on our platform. You're free to use them commercially, share them, or modify them however you wish. We make no copyright claims on your generated content.",
    },
  ];

  return (
    <div className="space-y-2">
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
