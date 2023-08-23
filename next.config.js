/** @type {import('next').NextConfig} */
const nextConfig = {
    concurrentFeatures: true,
    images: {
        formats: [ 'image/avif', 'image/webp' ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.com" || "**.org" || "**.net" || "**.bg" || "**.eu",
            },
        ],
        domains: [
            "https://github.com/StoyanKyrie11/motivational-podcast-website/blob/master/assets/",
        ],
    },
};

module.exports = nextConfig;
