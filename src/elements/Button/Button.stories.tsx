import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';
import { COLORS, SIZES } from '../../constants';
import Button from './Button';

const VARIANTS = ['solid', 'outline', 'inverted', 'invertedOutline'] as const;

export default {
  title: 'Elements/Button',
  component: Button,
};

export const Simple = () => (
  <>
    <Button>Basic Button</Button>
    <Button color="primary">Primary Button</Button>
    <Button loading>Loading</Button>
  </>
);

export const SimpleTextAndIcon = () => (
  <Button iconLeft="beer">Basic Button</Button>
);

export const SimpleIcon = () => <Button iconLeft="beer" />;

export const Interactive = () => (
  <Button
    color={select('color', COLORS, undefined)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    onPress={action('clicked-text')}
    rounded={boolean('rounded', false)}
    size={select('size', SIZES, 'normal')}
    static={boolean('static', false)}
    variant={select('variant', VARIANTS, 'solid')}
  >
    Default Button
  </Button>
);

export const InteractiveTextAndIcon = () => (
  <Button
    color={select('color', COLORS, undefined)}
    disabled={boolean('disabled', false)}
    iconLeft={text('iconLeft', 'beer')}
    iconRight={text('iconRight', 'check')}
    loading={boolean('loading', false)}
    onPress={action('clicked-text')}
    rounded={boolean('rounded', false)}
    size={select('size', SIZES, 'normal')}
    variant={select('variant', VARIANTS, 'solid')}
  >
    Default Button
  </Button>
);

export const InteractiveIcon = () => (
  <Button
    color={select('color', COLORS, undefined)}
    disabled={boolean('disabled', false)}
    iconLeft={text('iconName', 'beer')}
    loading={boolean('loading', false)}
    onPress={action('clicked-text')}
    rounded={boolean('rounded', false)}
    size={select('size', SIZES, 'normal')}
    variant={select('variant', VARIANTS, 'solid')}
  />
);
