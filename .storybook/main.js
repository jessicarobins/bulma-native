const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.mdx'],
  addons: [
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
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },

    '@storybook/addon-knobs/preset',
    '@storybook/addon-actions/register',
    'storybook-addon-jsx/register',
  ],
};
