import type { NextConfig } from "next";

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
  compiler: { removeConsole: { exclude: ["error", "warn"] } },
};

export default nextConfig;
