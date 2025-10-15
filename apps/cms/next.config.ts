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
      {
        protocol: "https",
        hostname: "**.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
