import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Box from './Box';

storiesOf('Box', module).add('Box', () => (
  <Box>
    <Text>Default Box</Text>
  </Box>
));
