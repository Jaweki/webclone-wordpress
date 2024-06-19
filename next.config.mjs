/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'del229.wordpress.com',
                pathname: "**",
            },
            {
                protocol: 'https',
                hostname: '*.wordpress.com',
                pathname: "**",
            },
        ]
    }
};

export default nextConfig;
