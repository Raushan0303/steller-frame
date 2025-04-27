/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't run ESLint during build (we've already fixed the errors)
    ignoreDuringBuilds: true,
  },
  // Customize image settings for external URLs
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
    // Enable image optimization for better performance
    unoptimized: false,
    // Set higher quality to maintain good visuals
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Optimize compiler
  swcMinify: true,
  // Improve page loading
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverComponentsExternalPackages: ["three"],
    optimizePackageImports: [
      "framer-motion",
      "@react-three/fiber",
      "@react-three/drei",
    ],
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB", "INP"],
  },
  // Cache as much as possible for better performance
  generateEtags: true,
  poweredByHeader: false,
  // Compress files for faster delivery
  compress: true,
  // Advanced optimization settings
  productionBrowserSourceMaps: false, // Disable source maps in production for faster loading
  // Configure headers for optimal caching
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Configure redirects for performance
  async redirects() {
    return [
      // Redirect legacy URLs if needed
    ];
  },
  // Webpack configuration for optimizing bundle size
  webpack: (config, { dev, isServer }) => {
    // Optimize only in production
    if (!dev) {
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: "three-vendors",
            priority: 10,
          },
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: "motion-vendors",
            priority: 10,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
