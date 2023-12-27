/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    AIRTABLE_SECRET_API_TOKEN: process.env.AIRTABLE_SECRET_API_TOKEN,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    MY_EMAIL: process.env.MY_EMAIL,
    NEXT_URL: process.env.NEXT_URL,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
