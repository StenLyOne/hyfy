import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/(.*).(js|css|png|jpg|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
});

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "1337",
  //       pathname: "/uploads/**", // путь к файлам Strapi
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.strapiapp.com" }, // разрешаем домены Strapi
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 год для next/image
    formats: ["image/avif", "image/webp"],
  },
  // compiler: { removeConsole: { exclude: ["error", "warn"] } },
};

export default withBundleAnalyzer(nextConfig);
