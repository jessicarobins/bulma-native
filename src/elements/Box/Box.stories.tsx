import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Box from './Box';

storiesOf('Elements/Box', module).add('Basic', () => (
  <Box>
    <Text>Default Box</Text>
  </Box>
));
