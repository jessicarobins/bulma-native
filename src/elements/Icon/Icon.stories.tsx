import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Icon from './Icon';
import { COLORS } from '../../constants';

storiesOf('Elements/Icon', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Icon name="beer" />)
  .add('Interactive', () => (
    <Icon
      color={select('color', COLORS, undefined)}
      name={text('name', 'beer')}
      size={select('size', ['small', 'normal', 'medium', 'large'], 'normal')}
    />
  ));
