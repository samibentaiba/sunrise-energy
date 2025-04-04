import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.google.com","www.youtube.com"], // Replace with your desired external image domain
  },
};

export default nextConfig;
// No additional configuration needed for the error mentioned.
// The error seems to be related to an external script or feature not supported by the browser.
// Ensure that the external domains are correctly configured and the script is compatible with your use case.