import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import Delete from './Delete';
import { IconProvider } from '../../theme';

storiesOf('Delete', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <IconProvider value={FontAwesome5}>{getStory()}</IconProvider>
  ))
  .add('Basic', () => <Delete />)
  .add('Interactive', () => (
    <Delete
      size={select('size', ['small', 'normal', 'medium', 'large'], 'normal')}
    />
  ));
