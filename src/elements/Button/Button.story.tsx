import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Button from './Button';
import { SIZES, COLORS } from '../../constants';

const VARIANTS = ['solid', 'outline', 'inverted', 'invertedOutline'] as const;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
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
  ));
