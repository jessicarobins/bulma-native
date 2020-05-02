import React from 'react';
import { create } from '@storybook/theming';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome';
import { IconProvider, ThemeProvider, theme } from '../src/theme';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator((getStory) => (
  <IconProvider value={FontAwesome5}>
    <ThemeProvider value={theme}>{getStory()}</ThemeProvider>
  </IconProvider>
));

addParameters({
  docs: {
    container: DocsContainer,
    extractComponentDescription: (_target, parameters) => {
      try {
        return parameters.component.__docgenInfo.description;
      } catch {
        return '';
      }
    },
  },
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];

      return sectionB.localeCompare(sectionA);
    },
    theme: create({
      base: 'light',
      brandTitle: 'Bulma Native',
      brandUrl: 'https://jessicarobins.github.io/bulma-native',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    showPanel: true,
    showRoots: true,
    panelPosition: 'bottom',
    // showAddonPanel: true,
    // addonPanelInRight: true,
  },
});
