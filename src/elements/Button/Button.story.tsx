import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import { SIZES, COLORS } from '../../constants';
import Button from './Button';

const VARIANTS = ['solid', 'outline', 'inverted', 'invertedOutline'] as const;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Basic Text Button', () => <Button>Basic Button</Button>)
  .add('Interactive Text Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      variant={select('variant', VARIANTS, 'solid')}
    >
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Basic with Icon', () => <Button iconName="beer">Basic Button</Button>)
  .add('Interactive Text & Icon Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      iconName={text('iconName', 'beer')}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      variant={select('variant', VARIANTS, 'solid')}
    >
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Basic Icon Button', () => <Button iconName="beer" />)
  .add('Interactive Icon Button', () => (
    <Button
      color={select('color', COLORS, undefined)}
      disabled={boolean('disabled', false)}
      iconName={text('iconName', 'beer')}
      loading={boolean('loading', false)}
      onPress={action('clicked-text')}
      rounded={boolean('rounded', false)}
      size={select('size', SIZES, 'normal')}
      variant={select('variant', VARIANTS, 'solid')}
    />
  ));
