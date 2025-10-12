/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  connect-src 'self' https://*.googleapis.com https://cms.aggiefiction.com;
  img-src 'self' https://res.cloudinary.com data:;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  ${isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval';"
    : "script-src 'self';"}
`;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
