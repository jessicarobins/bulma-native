const path = require('path');
const webpack = require('webpack');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'url-loader',
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  });

  config.resolve.extensions = [
    '.web.js',
    '.js',
    '.json',
    '.web.jsx',
    '.jsx',
    '.ts',
    '.tsx',
    '.jpg',
  ];

  config.resolve.alias = {
    'react-native': 'react-native-web',
    '@storybook/react-native': '@storybook/react',
    react: path.resolve('./node_modules/react'),
  };

  return config;
};
