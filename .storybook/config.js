import React from 'react';
import { create } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome';
import { IconProvider, ThemeProvider, theme } from '../src/theme';

import centered from './decorator-centered';

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator((getStory) => (
  <IconProvider value={FontAwesome5}>
    <ThemeProvider value={theme}>{getStory()}</ThemeProvider>
  </IconProvider>
));

// Option defaults:
addParameters({
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];

      return sectionB.localeCompare(sectionA);
    },
    theme: create({
      base: 'light',
      brandTitle: 'React Native for Web',
      brandUrl: 'https://necolas.github.io/react-native-web',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    panelPosition: 'bottom',
  },
});

const context = require.context('../src', true, /\.stories\.(js|mdx|tsx)$/);

configure(context, module);
