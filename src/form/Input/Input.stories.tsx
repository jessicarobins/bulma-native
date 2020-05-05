import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { select, boolean, text } from '@storybook/addon-knobs';

import { SIZES, COLORS } from '../../constants';
import Input from './Input';

storiesOf('Form/Input', module)
  .addParameters({ component: Input })
  .add('Basic', () => <Input />)
  .add('Basic with Icon', () => <Input iconLeft="envelope" />)
  .add('Basic with two Icons', () => (
    <Input iconLeft="envelope" iconRight="check" />
  ))
  .add('Interactive', () => (
    <Input
      color={select('color', COLORS, undefined)}
      editable={boolean('editable', true)}
      loading={boolean('loading', false)}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
    />
  ))
  .add('Interactive with Icons', () => (
    <Input
      color={select('color', COLORS, undefined)}
      editable={boolean('editable', true)}
      iconLeft={text('iconLeft', 'envelope')}
      iconRight={text('iconRight', 'check')}
      loading={boolean('loading', false)}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
    />
  ));
