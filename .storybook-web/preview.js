import React from 'react';
import { create } from '@storybook/theming';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import ApplicationProvider from '../src/root/ApplicationProvider';
import { theme } from '../src/theme';
import decoratorCentered from './decorator-centered';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

addDecorator(decoratorCentered);
addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator((getStory) => (
  <ApplicationProvider iconPack={FontAwesome} theme={theme}>
    {getStory()}
  </ApplicationProvider>
));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
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
