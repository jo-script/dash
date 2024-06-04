// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const production = "https://albayt.site/api";
const beta = "http://elbit.mega";

module.exports = {
  reactStrictMode: false, // Disable React Strict Mode

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: production + "/:path*",
      },
      {
        source: "/data/:path*",
        destination: production + "/image/:path*",
      },
      {
        source: "/firebase-messaging-sw.js",
        destination:
          "https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js",
      },
    ];
  },
  images: {
    domains: ["albayt.site", "learnbestcoding.com"],
  },
};
