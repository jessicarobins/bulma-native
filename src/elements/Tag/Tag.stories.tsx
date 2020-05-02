import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SIZES, COLORS } from '../../constants';
import Tag from './Tag';

storiesOf('Elements/Tag', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Tag>Basic Tag</Tag>)
  .add('Interactive', () => (
    <Tag
      color={select('color', COLORS, undefined)}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
    >
      <Text>Default Tag</Text>
    </Tag>
  ))
  .add('With Delete', () => (
    <Tag
      color={select('color', COLORS, undefined)}
      onDelete={action('clicked-delte')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
    >
      <Text>Default Tag</Text>
    </Tag>
  ));
