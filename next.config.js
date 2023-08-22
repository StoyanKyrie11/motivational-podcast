/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
