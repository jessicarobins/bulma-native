import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Tag from './Tag';
import { SIZES, COLORS } from '../../constants';

storiesOf('Tag', module)
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
  ));
