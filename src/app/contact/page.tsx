"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-30 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/90"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-orange-600/5 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-40 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] -z-20"></div>
      <div className="fixed bottom-40 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] -z-20"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Get in{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or want to learn more about our AI video generation
              platform? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div>
                    <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300">Aidirectorscut07@gmail.com</p>
                    <a
                      href="mailto:Aidirectorscut07@gmail.com"
                      className="inline-block mt-3 text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      Send an email
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-300">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-gray-300">Weekend: Closed</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-medium text-white mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/aidirectorscuts?igsh=MTdtdHBqZ3N4MW04Ng=="
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/aidirectorscuts?igsh=MTdtdHBqZ3N4MW04Ng=="
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/aidirectorscuts?igsh=MTdtdHBqZ3N4MW04Ng=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-300">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-white text-sm font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white text-sm font-medium mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-premium px-8 py-3 rounded-full text-white flex items-center justify-center group"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-active:opacity-0 group-active:rotate-90" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute ml-2 h-4 w-4 opacity-0 transition-all duration-300 group-active:opacity-100 group-active:translate-y-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 20V10"></path>
                              <path d="M18 14l-6-6-6 6"></path>
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                  Questions
                </span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-orange-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">
                  How quickly can I get my first video?
                </h3>
                <p className="text-gray-300">
                  Depending on complexity, most videos are ready within minutes
                  after you submit your request. Our AI works rapidly to create
                  professional-quality content.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-orange-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Do I need technical skills to use your platform?
                </h3>
                <p className="text-gray-300">
                  Not at all! Our platform is designed to be user-friendly.
                  Simply describe what you want, and our AI handles all the
                  technical aspects of video creation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-orange-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">
                  What file formats do you support?
                </h3>
                <p className="text-gray-300">
                  Our platform exports videos in all standard formats including
                  MP4, MOV, and others. You can easily download your videos for
                  use on any platform.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-orange-500/20 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white">
                  How do I get started?
                </h3>
                <p className="text-gray-300">
                  Simply create an account, describe the video you want to
                  create, and our AI will generate it for you. It's that simple!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>© 2025 Stelllar Frame. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
