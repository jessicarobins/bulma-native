import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Icon from './Icon';
import { IconProvider } from '../../theme';
import { COLORS } from '../../constants';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => (
    <IconProvider value={FontAwesome5}>{getStory()}</IconProvider>
  ))
  .add('Basic', () => <Icon name="beer" />)
  .add('Interactive', () => (
    <Icon
      color={select('color', COLORS, undefined)}
      name={text('name', 'beer')}
      size={select('size', ['small', 'normal', 'medium', 'large'], 'normal')}
    />
  ));
