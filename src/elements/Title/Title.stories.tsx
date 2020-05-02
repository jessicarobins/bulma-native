import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';

import Title from './Title';
import {
  TEXT_SIZES,
  TEXT_ALIGNMENTS,
  COLORS,
  TEXT_TRANSFORMS,
  TEXT_WEIGHTS,
} from '../../constants';

storiesOf('Elements/Title', module)
  .add('Basic', () => <Title title="Title" subtitle="Subtitle" />)
  .add('Interactive', () => (
    <Title
      titleProps={{
        alignment: select('titleAlignment', TEXT_ALIGNMENTS, 'left'),
        color: select('titleColor', COLORS, 'dark'),
        size: select('titleSize', TEXT_SIZES, '3'),
        transform: select('titleTransform', TEXT_TRANSFORMS, undefined),
        weight: select('titleWeight', TEXT_WEIGHTS, 'semibold'),
      }}
      title="Title"
      subtitleProps={{
        alignment: select('subtitleAlignment', TEXT_ALIGNMENTS, 'left'),
        color: select('subtitleColor', COLORS, undefined),
        size: select('subtitleSize', TEXT_SIZES, '5'),
        transform: select('subtitleTransform', TEXT_TRANSFORMS, undefined),
        weight: select('subtitleWeight', TEXT_WEIGHTS, 'normal'),
      }}
      subtitle="Subtitle"
    />
  ));
