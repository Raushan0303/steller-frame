"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundGradient from "../components/BackgroundGradient";
import FloatingIcons from "../components/FloatingIcons";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-sans text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-30">
        <BackgroundGradient />
      </div>

      {/* Floating icons with reduced opacity */}
      <FloatingIcons className="opacity-10" />

      {/* Header/Navigation */}
      <header className="container mx-auto flex justify-between items-center py-6 px-6 lg:px-8 relative">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Stellarframes.svg"
              alt="StellarFrame"
              width={150}
              height={40}
              className="h-auto"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 pt-6 pb-24 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Privacy Policy
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg">
            Our commitment to protecting your privacy and data security
          </p>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in">
              <p className="mb-6 text-gray-300">
                Thank you for using our AI-powered Character Bot ("the Bot"), a
                conversational assistant built to deliver engaging, human-like
                experiences directly on Instagram. This Privacy Policy explains
                how we collect, use, store, encrypt, and protect your
                information when you interact with the Bot.
              </p>
            </div>

            {/* Section 1 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                1. Information We Collect
              </h2>
              <p className="mb-4 text-gray-300">
                When you interact with the Bot through Instagram, we may collect
                the following information:
              </p>

              <h3 className="text-xl font-semibold mb-2 text-white">
                a. Account Information
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
                <li>Your Instagram user ID</li>
                <li>
                  Public profile name and picture (as permitted by the Instagram
                  API)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-white">
                b. Conversation Data
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
                <li>Messages you send to the Bot</li>
                <li>Bot responses</li>
                <li>Timestamps and message order</li>
                <li>Session identifiers</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-white">
                c. Behavioral Metrics
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
                <li>Typing speed</li>
                <li>Time taken to respond</li>
                <li>Number and frequency of interactions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-white">
                d. Technical Metadata
              </h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-1">
                <li>Language preference</li>
                <li>Locale</li>
                <li>Session data (non-identifiable)</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                2. Message and Data Encryption
              </h2>
              <p className="mb-4 text-gray-300">
                We take your privacy very seriously. All data is handled with
                strict encryption and access control measures:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>
                  Messages are encrypted in transit using HTTPS/TLS protocols
                </li>
                <li>
                  All data is encrypted at rest using AES-256 level encryption
                  or higher
                </li>
                <li>
                  Stored securely in PostgreSQL and Pinecone vector databases
                </li>
                <li>
                  No unauthorized system or personnel can access this data
                </li>
              </ul>
              <p className="text-gray-300">
                Entire conversations, including all user and bot messages, are
                fully encrypted before storage. Any behavioral or analytical
                data is also encrypted and stored securely.
              </p>
            </div>

            {/* Section 3 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-300">
                We use the collected data to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Generate accurate and personalized AI responses</li>
                <li>Maintain session-based conversation memory</li>
                <li>Improve the conversational quality over time</li>
                <li>Track and analyze behavior for enhanced engagement</li>
                <li>Support debugging and feature enhancement</li>
              </ul>
              <p className="text-gray-300">
                We do not use your data for advertising, resell it, or share it
                with third parties for marketing purposes.
              </p>
            </div>

            {/* Section 4 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                4. Use of AI and Language Models
              </h2>
              <p className="mb-4 text-gray-300">
                To provide an intelligent and emotionally adaptive experience,
                we use the following AI tools:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>
                  Google Gemini for generating embeddings and semantic
                  understanding
                </li>
                <li>LLaMA 3.3 for human-like response generation</li>
                <li>
                  LangChain agents for orchestrating conversation context and
                  logic
                </li>
                <li>
                  Flash 2.0 for efficient task processing and agent-based flows
                </li>
              </ul>
              <p className="text-gray-300">
                All processing happens in real-time and in encrypted form. These
                models do not store or train on personal data.
              </p>
            </div>

            {/* Section 5 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                5. Data Sharing
              </h2>
              <p className="mb-4 text-gray-300">
                We do not sell or share your data with any unauthorized third
                party. Data may be shared only with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>
                  Verified third-party AI service providers for message
                  processing (under strict data agreements)
                </li>
                <li>
                  Internal authorized developers for debugging and system
                  improvement
                </li>
                <li>
                  Legal authorities, only when legally required and with proper
                  due process
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                6. Data Retention and Deletion
              </h2>
              <p className="mb-4 text-gray-300">
                We retain user data only for as long as it is required to
                provide a functional and consistent user experience. Users may
                request:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Deletion of their entire message history</li>
                <li>To opt out of behavioral tracking</li>
                <li>Immediate removal of stored data</li>
              </ul>
              <p className="text-gray-300">
                Requests can be submitted via the contact method below.
              </p>
            </div>

            {/* Section 7 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                7. Children's Privacy
              </h2>
              <p className="text-gray-300">
                This bot is not intended for users under the age of 13. If we
                discover that we have collected personal data from a user under
                13, we will delete it immediately.
              </p>
            </div>

            {/* Section 8 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                8. Compliance with Meta's Platform Policy
              </h2>
              <p className="mb-4 text-gray-300">
                We strictly adhere to Meta's Platform Terms and Developer
                Policies, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Ensuring full data encryption in transit and at rest</li>
                <li>Never reselling or misusing user data</li>
                <li>Providing transparency and user control over their data</li>
                <li>Responding to deletion requests promptly</li>
                <li>Limiting data access to authorized personnel only</li>
              </ul>
              <p className="text-gray-300">
                We follow Meta's Data Policy and maintain all necessary
                safeguards to ensure user data protection.
              </p>
            </div>

            {/* Section 9 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                9. Policy Updates
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time to reflect
                legal, technical, or operational changes. The revised version
                will be made available promptly and will include an updated
                "Last Updated" date.
              </p>
            </div>

            {/* Section 10 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "1.0s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                10. Contact Us
              </h2>
              <p className="text-gray-300">
                For any privacy-related concerns or data deletion requests,
                please contact us through our{" "}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  contact page
                </Link>
                .
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center text-gray-400 text-sm mt-12">
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
