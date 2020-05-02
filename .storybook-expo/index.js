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
  require('../src/elements/Box/Box.stories');
  require('../src/elements/Button/Button.stories');
  require('../src/elements/Delete/Delete.stories');
  require('../src/elements/Icon/Icon.stories');
  require('../src/elements/Image/Image.stories');
  require('../src/elements/Notification/Notification.stories');
  require('../src/elements/Progress/Progress.stories');
  require('../src/elements/Tag/Tag.stories');
  require('../src/elements/Text/Text.stories');
  require('../src/elements/Title/Title.stories');
  require('../src/components/Message/Message.stories');
  require('../src/form/Field/Field.stories');
  require('../src/form/Input/Input.stories');
  require('../src/form/Select/Select.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
