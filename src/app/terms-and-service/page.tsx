"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackgroundGradient from "../components/BackgroundGradient";
import FloatingIcons from "../components/FloatingIcons";

export default function TermsOfService() {
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
              Terms of Service
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg">
            Guidelines and rules for using our AI-powered services
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in">
              <p className="mb-6 text-gray-300">
                These Terms of Service ("Terms") govern your access to and use
                of our AI-powered character chatbot (the "Service") available
                via Instagram. By using the Service, you agree to these Terms
                and to comply with all applicable laws and Meta's platform
                policies.
              </p>
              <p className="text-gray-300">
                If you do not agree with these Terms, please do not use the
                Service.
              </p>
            </div>

            {/* Section 1 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                1. Service Overview
              </h2>
              <p className="mb-4 text-gray-300">
                The Service provides conversational experiences via Instagram
                Messenger, using artificial intelligence to deliver responses,
                behavior tracking, and context-aware memory.
              </p>
              <p className="text-gray-300">
                Our chatbot is designed for educational, entertainment, and
                engagement purposes only. It does not offer legal, financial,
                medical, or emergency services.
              </p>
            </div>

            {/* Section 2 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                2. Eligibility
              </h2>
              <p className="text-gray-300">
                You must be at least 13 years old to use the Service. If you are
                under the age of 18, you must have the consent of a parent or
                guardian.
              </p>
            </div>

            {/* Section 3 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                3. User Conduct
              </h2>
              <p className="mb-4 text-gray-300">
                When using the Service, you agree that you will not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>
                  Use the Service for spam, abusive, or fraudulent activity
                </li>
                <li>
                  Attempt to interfere with the functionality or security of the
                  system
                </li>
                <li>
                  Upload or transmit harmful content, including malware or
                  offensive language
                </li>
                <li>
                  Attempt to extract or reverse-engineer any part of the Service
                  or its source code
                </li>
              </ul>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate access for users
                who violate these Terms.
              </p>
            </div>

            {/* Section 4 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                4. Data Collection and Use
              </h2>
              <p className="mb-4 text-gray-300">
                Your use of the Service is also governed by our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  Privacy Policy
                </Link>{" "}
                which explains how we collect, use, and store your data. All
                data is encrypted in transit and at rest. We do not sell your
                data or use it for third-party advertising.
              </p>
              <p className="text-gray-300">
                You retain ownership of any content you submit, but you grant us
                a limited license to use it for improving the Service's
                functionality and experience.
              </p>
            </div>

            {/* Section 5 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                5. Third-Party Services
              </h2>
              <p className="text-gray-300">
                Our Service may utilize third-party services including, but not
                limited to, Meta Platforms, Google Gemini, and AI language
                models (e.g., LLaMA 3.3). We do not control these services and
                are not responsible for their actions, content, or data handling
                practices.
              </p>
            </div>

            {/* Section 6 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                6. Changes to the Service
              </h2>
              <p className="text-gray-300">
                We may update, change, or discontinue the Service or any part of
                it at any time without prior notice. We are not liable for any
                modification, suspension, or discontinuation of the Service.
              </p>
            </div>

            {/* Section 7 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                7. Disclaimer of Warranties
              </h2>
              <p className="mb-4 text-gray-300">
                The Service is provided on an "as is" and "as available" basis.
                We make no warranties or guarantees about:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>
                  The accuracy or reliability of the AI-generated responses
                </li>
                <li>The Service being error-free or uninterrupted</li>
                <li>Any specific outcomes or results from using the chatbot</li>
              </ul>
              <p className="text-gray-300">
                Your use of the Service is at your own risk.
              </p>
            </div>

            {/* Section 8 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-300">
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, special, or consequential damages
                arising out of or related to your use of the Service.
              </p>
            </div>

            {/* Section 9 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                9. Termination
              </h2>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate your access to the
                Service at any time, without notice, if you violate these Terms
                or for any other reason.
              </p>
            </div>

            {/* Section 10 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "1.0s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                10. Governing Law
              </h2>
              <p className="text-gray-300">
                These Terms shall be governed by and interpreted in accordance
                with applicable laws.
              </p>
            </div>

            {/* Section 11 */}
            <div
              className="mb-8 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
              style={{ animationDelay: "1.1s" }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                11. Contact
              </h2>
              <p className="text-gray-300">
                If you have any questions or concerns about these Terms, please
                contact us:
              </p>
              <p className="mt-3 text-gray-300">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:Aidirectorscut07@gmail.com"
                  className="text-orange-500 hover:text-orange-400"
                >
                  Aidirectorscut07@gmail.com
                </a>
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
