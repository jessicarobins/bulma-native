import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import Text from './Text';
import {
  COLORS,
  TEXT_SIZES,
  TEXT_WEIGHTS,
  TEXT_ALIGNMENTS,
  TEXT_TRANSFORMS,
} from '../../constants';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
      Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
      Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
      dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit
    </Text>
  ))
  .add('Interactive', () => (
    <Text
      alignment={select('alignment', TEXT_ALIGNMENTS, 'left')}
      color={select('color', COLORS, undefined)}
      size={select('size', TEXT_SIZES, 'normal')}
      transform={select('transform', TEXT_TRANSFORMS, undefined)}
      weight={select('weight', TEXT_WEIGHTS, 'normal')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
      Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
      Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
      dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit
    </Text>
  ));
