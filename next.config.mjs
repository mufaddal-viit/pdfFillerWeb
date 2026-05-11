/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'yoursite.com',
			},
		],
	},
};

export default nextConfig;
