"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import FloatingIcons from "./components/FloatingIcons";
import BackgroundGradient from "./components/BackgroundGradient";
import AnimatedText from "./components/AnimatedText";
import CodeReveal from "./components/CodeReveal";
import HeroBackground from "./components/HeroBackground";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-white overflow-hidden relative">
      {/* Initial Code Animation */}
      <CodeReveal />

      {/* Enhanced Background - Now applies to entire page */}
      <div className="fixed inset-0 -z-30">
        <BackgroundGradient />
      </div>

      {/* 3D Hero Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <HeroBackground />
      </div>

      {/* Floating icons with reduced opacity */}
      <FloatingIcons className="opacity-20" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Header/Navigation */}
        <header className="container mx-auto flex justify-between items-center py-6 px-6 lg:px-8 relative">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00a8ff] to-[#9c27b0] text-transparent bg-clip-text">
              StellarFrame
            </h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-300 hover:text-white font-medium">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium">
              Pricing
            </a>
          </nav>
          <div className="flex space-x-4">
            {/* <button className="text-gray-300 font-medium hover:text-white">
              Sign in
            </button>
            <button className="bg-[#2a2a2a] text-white border border-[#3b3b3b] rounded-full px-5 py-2 font-medium hover:bg-[#333333] transition-colors">
              Get demo
            </button> */}
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 pb-32 relative">
          {/* Main Hero Content */}
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                  <AnimatedText
                    text="Create professional"
                    type="gradient"
                    className="block mb-2"
                  />
                  <AnimatedText
                    text="AI-powered videos"
                    type="gradient"
                    delay={0.1}
                    className="block mb-2"
                  />
                  <AnimatedText
                    text="in minutes"
                    type="highlight"
                    delay={0.2}
                    className="inline-block"
                  />
                </h1>

                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Transform your ideas into stunning videos with our advanced AI
                  video platform. No experience needed - just describe what you
                  want and our AI does the rest.
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <button className="btn-premium btn-glow btn-film px-8 py-3 rounded-full text-base flex items-center justify-center group relative">
                    Start creating
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>

              {/* Video Grid - Right Side */}
              <div
                className="relative order-1 lg:order-2 z-10 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="grid grid-cols-3 gap-2">
                  {/* First row: 16:9 video (spans 2 columns) and 9:16 video */}
                  <div
                    className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20
                    hover:scale-[1.02] transform-gpu will-change-transform
                    bg-black/20 backdrop-blur-sm animate-float-card-1"
                  >
                    <iframe
                      src="https://drive.google.com/file/d/1RUjd9pQHRuhQcBzGGKQdLCOpvHUshtXL/preview"
                      allow="autoplay; fullscreen"
                      className="w-full h-80 md:h-72 transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ border: "none" }}
                    ></iframe>
                    <div className="absolute top-3 left-3 text-white text-sm font-medium bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      Main Promo
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Play button that appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                      <div className="btn-video-control overflow-hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
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
                  </div>

                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg group 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 
                    hover:scale-[1.02] transform-gpu will-change-transform
                    bg-black/20 backdrop-blur-sm animate-float-card-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Vertical video thumbnail"
                      className="w-full h-80 md:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3 text-white text-sm font-medium bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      Vertical
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                      <div className="btn-video-control">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
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
                  </div>

                  {/* Second row: 9:16 video and 16:9 video (spans 2 columns) */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg group 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 
                    hover:scale-[1.02] transform-gpu will-change-transform
                    bg-black/20 backdrop-blur-sm animate-float-card-2"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600096194735-ec70b8463112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                      alt="Story video thumbnail"
                      className="w-full h-80 md:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3 text-white text-sm font-medium bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      Story
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                      <div className="btn-video-control">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
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
                  </div>

                  <div
                    className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 
                    hover:scale-[1.02] transform-gpu will-change-transform
                    bg-black/20 backdrop-blur-sm animate-float-card-3"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2562&q=80"
                      alt="Cinematic video thumbnail"
                      className="w-full h-80 md:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3 text-white text-sm font-medium bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      Cinematic
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                      <div className="btn-video-control">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Workshop Section - Moved right after hero section */}
        <section className="py-28 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                AI{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                  Workshop
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your creative process with our powerful AI-driven
                solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* AI Video Production */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:border-orange-500/20 transition-all duration-500 shadow-lg hover:shadow-orange-500/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2562&q=80"
                    alt="AI Video Production"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    AI Video Production
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    Transform your ideas into stunning videos with our advanced
                    AI — just describe what you want and our AI does the rest.
                  </p>
                  <button className="text-sm text-white flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Creative Advertisements */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:border-orange-500/20 transition-all duration-500 shadow-lg hover:shadow-orange-500/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Creative Advertisements"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Creative Advertisements
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-300 transition-colors">
                    Create AI-driven videos and witty real-life short ads
                    &mdash; fast, smart, and built for today&apos;s audiences.
                  </p>
                  <button className="text-sm text-white flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* AI Workshop */}
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:border-orange-500/20 transition-all duration-500 shadow-lg hover:shadow-orange-500/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80"
                    alt="AI Workshop"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    AI Workshop
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    Our AI Workshop combines cutting-edge artificial
                    intelligence with an intuitive interface, allowing anyone to
                    create professional videos without technical expertise.
                  </p>
                  <button className="text-sm text-white flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <button className="btn-premium px-8 py-3 rounded-full text-white flex items-center gap-2">
                <span>Explore all features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section - Removed background color */}
        <section className="py-24 backdrop-blur-sm bg-black/10" id="features">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Solve your team&apos;s
                <br />
                biggest challenges
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Feature Card 1 */}
              <div
                className="feature-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/20 group animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Decorative gradient orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-purple-500/5 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                {/* Icon with animated gradient background */}
                <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-70 animate-pulse"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white relative z-10 group-hover:text-orange-400 transition-colors">
                  Creative Flexibility
                </h3>
                <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
                  You can personalize videos for different audiences without
                  redoing everything from scratch.
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Feature Card 2 */}
              <div
                className="feature-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/20 group animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Decorative gradient orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-purple-500/5 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                {/* Icon with animated gradient background */}
                <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-70 animate-pulse"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white relative z-10 group-hover:text-orange-400 transition-colors">
                  Speed and Scalability
                </h3>
                <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
                  Huge savings on actors, cameras, editors, and studios — with
                  professional videos at a fraction of traditional budgets.
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Feature Card 3 */}
              <div
                className="feature-card relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/20 group animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                {/* Decorative gradient orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-purple-500/5 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                {/* Icon with animated gradient background */}
                <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-70 animate-pulse"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white relative z-10 group-hover:text-orange-400 transition-colors">
                  Cost-Effectiveness
                </h3>
                <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
                  Choose from a wide range of realistic AI characters to
                  represent your brand.
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section with Parallax Effects */}
        <section className="py-28 overflow-hidden relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-orange-500/5 to-black/0 pointer-events-none"></div>

          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                For every{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                  creative need
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-20">
                Powerful AI video creation for different industries and use
                cases
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {/* Musicians Card */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Parallax Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-100"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop')",
                      transform: "translateZ(0)",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-[450px] justify-end transform transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="mb-6 transform transition-all duration-700 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg mb-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:translate-y-0 group-hover:text-orange-400">
                    For Musicians
                  </h3>

                  <p className="text-gray-300 mb-6 transform transition-all duration-700 delay-100 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    Bring your music to life with stunning AI-generated videos
                    &mdash; fast, affordable, and endlessly creative visuals.
                  </p>

                  <div className="transform transition-all duration-700 delay-200 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="bg-black/40 backdrop-blur-sm text-white rounded-full py-2 px-5 flex items-center text-sm border border-white/10 hover:bg-orange-500/30 hover:border-orange-500/40 transition-all group">
                      <span>Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Production House Card */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Parallax Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-100"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1470&auto=format&fit=crop')",
                      transform: "translateZ(0)",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-[450px] justify-end transform transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="mb-6 transform transition-all duration-700 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg mb-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:translate-y-0 group-hover:text-orange-400">
                    For Production Houses
                  </h3>

                  <p className="text-gray-300 mb-6 transform transition-all duration-700 delay-100 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    Supercharge your production pipeline with AI-generated
                    videos &mdash; faster turnarounds, lower costs, and
                    limitless creativity. Start now!
                  </p>

                  <div className="transform transition-all duration-700 delay-200 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="bg-black/40 backdrop-blur-sm text-white rounded-full py-2 px-5 flex items-center text-sm border border-white/10 hover:bg-orange-500/30 hover:border-orange-500/40 transition-all group">
                      <span>Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Brands Card */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Parallax Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-100"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1470&auto=format&fit=crop')",
                      transform: "translateZ(0)",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-[450px] justify-end transform transition-transform duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="mb-6 transform transition-all duration-700 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg mb-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 transform transition-all duration-500 group-hover:translate-y-0 group-hover:text-orange-400">
                    For Brands
                  </h3>

                  <p className="text-gray-300 mb-6 transform transition-all duration-700 delay-100 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    Create AI-driven videos and witty real-life short ads
                    &mdash; fast, smart, and built for today&apos;s audiences.
                  </p>

                  <div className="transform transition-all duration-700 delay-200 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="bg-black/40 backdrop-blur-sm text-white rounded-full py-2 px-5 flex items-center text-sm border border-white/10 hover:bg-orange-500/30 hover:border-orange-500/40 transition-all group">
                      <span>Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16 relative z-10">
              <button className="btn-premium btn-film px-8 py-4 rounded-full text-base">
                <span className="relative z-10">Start creating today</span>
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-orange-500/30 to-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-60 h-60 bg-gradient-to-l from-orange-500/30 to-orange-600/10 rounded-full blur-3xl"></div>
        </section>

        {/* About Us Section - With Creative Carousel */}
        <section className="py-28 backdrop-blur-sm bg-black/10 overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-l from-orange-500/20 to-orange-600/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-purple-500/5 rounded-full blur-3xl opacity-60"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Who{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                  We Are
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pioneering the future of AI-powered video creation with
                cutting-edge technology and creative expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - About content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-8 transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Our Story
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Founded by a team of AI experts and filmmakers, StellarFrame
                    was born from the vision to democratize professional video
                    creation. We&apos;re on a mission to empower creators of all
                    skill levels to produce stunning videos in minutes instead
                    of days.
                  </p>
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/5 h-1 w-24 rounded-full"></div>
                </div>

                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-8 transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Our Technology
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our proprietary AI engine combines computer vision, natural
                    language processing, and creative intelligence to transform
                    simple prompts into professional-quality videos that capture
                    your exact vision.
                  </p>
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/5 h-1 w-24 rounded-full"></div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button className="btn-premium text-white px-8 py-3 rounded-full flex items-center gap-2 group">
                    <span>Join Our Team</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right side - Testimonial carousel */}
              <div className="relative">
                <div className="bg-gradient-to-br from-black/70 to-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl overflow-hidden relative group transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/10">
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-purple-500/5 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="overflow-hidden">
                      <div className="flex flex-col space-y-6">
                        <div className="opacity-100 transition-opacity duration-500">
                          <div className="mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-orange-500 mb-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <p className="text-xl text-gray-200 italic">
                              &ldquo;StellarFrame has revolutionized how we
                              create product demos and training materials for
                              our global team.&rdquo;
                            </p>
                          </div>

                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                              M
                            </div>
                            <div className="ml-4">
                              <h4 className="text-white font-medium">
                                Michael T.
                              </h4>
                              <p className="text-gray-400 text-sm">
                                Product Manager
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                      <button className="w-2 h-2 rounded-full bg-orange-500"></button>
                      <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-orange-400 transition-colors"></button>
                      <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-orange-400 transition-colors"></button>
                      <button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-orange-400 transition-colors"></button>
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-4 transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="text-3xl font-bold text-orange-500">
                      500K+
                    </div>
                    <div className="text-gray-400">Videos Created</div>
                  </div>
                  <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-4 transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="text-3xl font-bold text-orange-500">
                      98%
                    </div>
                    <div className="text-gray-400">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team member highlights */}
            <div className="mt-20 max-w-6xl mx-auto">
              {/* <h3 className="text-2xl font-bold mb-10 text-white text-center">
                Meet Our Leadership
              </h3> */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Team Member 1 */}
                {/* <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-purple-500/30"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-white mb-1">
                      Sarah Chen
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      CEO & Co-Founder
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Team Member 2 */}
                {/* <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-purple-500/30"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-white mb-1">
                      James Rodriguez
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">CTO</p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
          </a>
          <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
          </a>
        </div>
                  </div>
                </div> */}
                {/* Team Member 3 */}
                {/* <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-purple-500/30"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-white mb-1">
                      Emily Williams
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Creative Director
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
        </a>
        <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Team Member 4
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group transform transition-all duration-500 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-purple-500/30"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-white mb-1">
                      David Lee
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      AI Research Lead
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
        </a>
        <a
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Removed background color */}

        {/* FAQ Section - Updated to match theme */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our AI video generation
                platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-10">
              <FAQ />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 relative overflow-hidden">
          <FloatingIcons variant="cta" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/20 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
              <div className="text-center mx-auto max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Transform Your Ideas Into Dynamic Videos
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Get started today and experience the power of AI-driven video
                  creation
                </p>
                <button className="btn-premium text-lg px-8 py-4 rounded-full font-medium text-white shadow-glow-orange">
                  Start Creating Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>© 2023 Stelllar Frame. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
