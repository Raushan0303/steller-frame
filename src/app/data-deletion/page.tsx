"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import BackgroundGradient from "../components/BackgroundGradient";
import FloatingIcons from "../components/FloatingIcons";

export default function DataDeletionInstructions() {
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
              Data Deletion Instructions
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg">
            How to request deletion of your personal data
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in">
            <div className="flex items-start mb-4">
              <Shield className="text-orange-500 mr-4 h-12 w-12 flex-shrink-0" />
              <p className="text-gray-300">
                Our AI-powered Character Bot is designed with your privacy in
                mind. We collect only the minimal user data required for
                functionality and to deliver the best conversational experience
                through Instagram. We understand the importance of controlling
                your personal information and offer a straightforward process to
                request deletion of your data.
              </p>
            </div>
          </div>

          {/* How to Request Data Deletion */}
          <div
            className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              How to Request Data Deletion
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                To request deletion of your data, please send an email to:{" "}
                <a
                  href="mailto:Aidirectorscut07@gmail.com"
                  className="text-orange-500 hover:text-orange-400 font-medium"
                >
                  Aidirectorscut07@gmail.com
                </a>
              </p>

              <div className="bg-black/30 border border-white/5 rounded-xl p-4 mt-4">
                <h3 className="font-semibold text-white mb-2">
                  Your request should include:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your Instagram username (required to identify your data)
                  </li>
                  <li>A clear statement that you want your data deleted</li>
                  <li>
                    Any additional information that might help us identify your
                    data
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                For your protection, we may need to verify your identity before
                processing your request. This is to ensure that only you, or
                someone authorized to act on your behalf, can access or delete
                your personal data.
              </p>
            </div>
          </div>

          {/* Processing Timeline */}
          <div
            className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Processing Timeline
            </h2>
            <div className="text-gray-300">
              <p className="mb-4">
                We are committed to processing all data deletion requests
                promptly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All deletion requests will be processed within{" "}
                  <span className="text-white font-medium">
                    7 business days
                  </span>
                </li>
                <li>
                  You will receive a confirmation email once your data has been
                  completely deleted
                </li>
                <li>
                  In rare cases where we cannot complete deletion within this
                  timeframe, we will contact you with an explanation and
                  estimated completion date
                </li>
              </ul>
            </div>
          </div>

          {/* What Gets Deleted */}
          <div
            className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              What Gets Deleted
            </h2>
            <div className="text-gray-300">
              <p className="mb-4">
                When you request data deletion, we will remove:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All message history and conversation data</li>
                <li>User identifiers and profile information</li>
                <li>Behavioral metrics and usage patterns</li>
                <li>All encrypted data stored in our databases</li>
              </ul>
              <p className="mt-4">
                Please note that deletion is permanent and cannot be reversed.
                After deletion, any new interactions with our Bot will be
                treated as coming from a new user.
              </p>
            </div>
          </div>

          {/* Compliance with Privacy Laws */}
          <div
            className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Compliance with Privacy Laws
            </h2>
            <div className="text-gray-300">
              <p className="mb-4">
                Our data deletion processes comply with major privacy
                regulations including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-black/30 border border-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-2">GDPR</h3>
                  <p className="text-sm">
                    General Data Protection Regulation gives EU residents the
                    right to request deletion of their personal data (the "right
                    to be forgotten").
                  </p>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-xl p-4">
                  <h3 className="font-semibold text-white mb-2">CCPA</h3>
                  <p className="text-sm">
                    California Consumer Privacy Act gives California residents
                    the right to delete personal information collected from
                    them.
                  </p>
                </div>
              </div>
              <p className="mt-6">
                We honor data deletion requests regardless of your location or
                the specific privacy laws that may apply to you. Your right to
                control your personal data is a core principle of our privacy
                practices.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div
            className="mb-10 p-6 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Additional Information
            </h2>
            <div className="text-gray-300">
              <p className="mb-4">
                For more information about how we handle your data, please refer
                to our:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-colors text-white font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-service"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-colors text-white font-medium"
                >
                  Terms of Service
                </Link>
              </div>
              <p className="mt-6">
                If you have any questions about data deletion or privacy
                concerns, please don't hesitate to contact us at{" "}
                <a
                  href="mailto:Aidirectorscut07@gmail.com"
                  className="text-orange-500 hover:text-orange-400 font-medium"
                >
                  Aidirectorscut07@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm mt-12">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
