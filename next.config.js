/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commenting out to enable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    // unoptimized: true // Removing for server-side rendering
  },
  webpack: (config, { isServer }) => {
    // Disable webpack cache to prevent ENOENT errors
    config.cache = false;
    
    // Disable minification to reduce memory usage
    config.optimization.minimize = false;
    
    // Increase memory limit for WebAssembly
    if (!isServer) {
      config.optimization.nodeEnv = 'production';
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
        }
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;