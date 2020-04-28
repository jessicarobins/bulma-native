import React from 'react';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { ThemeProvider, theme, IconProvider } from '../src/theme';
import CenterView from './stories/CenterView';
import './rn-addons';

addDecorator((getStory) => (
  <CenterView>
    <IconProvider value={FontAwesome5}>
      <ThemeProvider value={theme}>{getStory()}</ThemeProvider>
    </IconProvider>
  </CenterView>
));

// import stories
configure(() => {
  require('../src/elements/Box/Box.story');
  require('../src/elements/Button/Button.story');
  require('../src/elements/Delete/Delete.story');
  require('../src/elements/Icon/Icon.story');
  require('../src/elements/Image/Image.story');
  require('../src/elements/Notification/Notification.story');
  require('../src/elements/Progress/Progress.story');
  require('../src/elements/Tag/Tag.story');
  require('../src/elements/Text/Text.story');
  require('../src/elements/Title/Title.story');
  require('../src/components/Message/Message.story');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
