import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;
