import path from 'path';

export default {
  sassOptions: {
    includePaths: [path.join(import.meta.dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
};
