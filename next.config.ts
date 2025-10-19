import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apps.mynexthire.io",
        port: "",
        pathname: "/**", // must include this
      },
      {
        protocol: "https",
        hostname: "gppune.ac.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
