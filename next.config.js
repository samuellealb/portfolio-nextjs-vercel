const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
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
