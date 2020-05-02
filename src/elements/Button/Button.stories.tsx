import React from 'react';
import {
  Description,
  DocsStory,
  Props,
  Title,
} from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { COLORS, SIZES } from '../../constants';
import Button from './Button';

const VARIANTS = ['solid', 'outline', 'inverted', 'invertedOutline'] as const;

export default {
  title: 'Elements/Button',
  component: Button,
};

export const simple = () => <Button>Basic Button</Button>;

export const interactive = () => (
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
