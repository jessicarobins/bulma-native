const path = require('path');
const webpack = require('webpack');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'url-loader',
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
          transpileOnly: true,
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
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
