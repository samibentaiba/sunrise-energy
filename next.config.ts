import type { NextConfig } from "next";
import path from "path";
import fs from "fs";

// Define or import the searchProject function
function searchProject(term: string): any[] {
  // Replace this with the actual implementation
  return [];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
  // Use `generateStaticParams` instead of `exportPathMap`
  async generateStaticParams() {
    // Replace 'search term' with the actual term or variable you want to search
    const searchResults = searchProject("search term");

    // Write the search results to a JSON file in the public directory
    const outputPath = path.join(__dirname, "public", "search-index.json");
    fs.writeFileSync(outputPath, JSON.stringify(searchResults));

    return []; // Return an empty array since we don't need paths here
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
