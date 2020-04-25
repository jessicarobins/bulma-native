import React from 'react';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';

import ThemeProvider, { theme } from '../src/theme';
import CenterView from './stories/CenterView';
import './rn-addons';

addDecorator((getStory) => (
  <CenterView>
    <ThemeProvider value={theme}>{getStory()}</ThemeProvider>
  </CenterView>
));

// import stories
configure(() => {
  require('../src/elements/Box/Box.story');
  require('../src/elements/Button/Button.story');
  require('../src/elements/Tag/Tag.story');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
