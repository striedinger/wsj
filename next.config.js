module.exports = {
  images: {
    domains: ['images.wsj.net', 'placehold.it'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
