import React from 'react';
import { addons } from '@storybook/addons';
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
    showAddonPanel: true,
    // addonPanelInRight: true,
  },
});

addons.setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true,

  /**
   * theme storybook, see link below
   */
  theme: undefined,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,

  /**
   * Select the default active tab on Mobile.
   * 'sidebar' | 'canvas' | 'addons'
   * @type {('sidebar'|'canvas'|'addons')}
   */
  initialActive: 'addons',
});
