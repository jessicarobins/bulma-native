import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';

import { BUTTON_VARIANTS } from '../constants';
import { Button } from '../elements';
import ApplicationProvider from '../root/ApplicationProvider';
import { theme } from '.';

storiesOf('Customization/Theming', module)
  .addParameters({ application: { disable: true } })
  .add('Basic', () => {
    const myCustomTheme = {
      ...theme,
      colors: { ...theme.colors, primary: text('primary', 'purple') },
    };
    return (
      <ApplicationProvider theme={myCustomTheme}>
        <Button
          color="primary"
          variant={select('variant', BUTTON_VARIANTS, 'solid')}
        >
          <Text>Custom Button</Text>
        </Button>
      </ApplicationProvider>
    );
  });
