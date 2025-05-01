/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
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