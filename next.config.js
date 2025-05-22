const path = require('path');

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https://app.contentful.com;',
          },
        ],
      },
    ];
  },
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
