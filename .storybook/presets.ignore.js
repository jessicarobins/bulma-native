const path = require('path');

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
      include: [path.resolve(__dirname, '../src')],
    },
  },
  {
    name: '@storybook/addon-docs/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
    },
  },
];