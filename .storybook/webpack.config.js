const path = require('path');
const webpack = require('webpack');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = async ({ config, mode }) => {
  // config.module.rules.push({
  //   test: /\.(gif|jpe?g|png|svg)$/,
  //   use: {
  //     loader: 'url-loader',
  //     options: { name: '[name].[ext]' },
  //   },
  // });

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('awesome-typescript-loader'),
  //     },
  //     {
  //       loader: require.resolve('react-docgen-typescript-loader'),
  //     },
  //   ],
  // });

  config.module.rules.push({
    test: /\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  // config.resolve.extensions = [
  //   '.web.js',
  //   '.js',
  //   '.json',
  //   '.web.jsx',
  //   '.jsx',
  //   '.ts',
  //   '.tsx',
  // ];

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
};
