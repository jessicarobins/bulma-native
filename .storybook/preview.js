import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
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
    extractComponentDescription: (_target, parameters) => {
      try {
        return parameters.component.__docgenInfo.description;
      } catch {
        return '';
      }
    },
  },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
  },
});
