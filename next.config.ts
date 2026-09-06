import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "src/app/api/payments/invoice/route": ["src/assets/fonts/*.ttf"],
  },
};

export default nextConfig;
