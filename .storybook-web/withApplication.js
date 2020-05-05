import React from 'react';
import { makeDecorator } from '@storybook/addons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import ApplicationProvider from '../src/root/ApplicationProvider';
import { theme } from '../src/theme';

export default makeDecorator({
  name: 'withApplication',
  parameterName: 'application',
  wrapper: (storyFn, context) => (
    <ApplicationProvider iconPack={FontAwesome} theme={theme}>
      {storyFn(context)}
    </ApplicationProvider>
  ),
});
