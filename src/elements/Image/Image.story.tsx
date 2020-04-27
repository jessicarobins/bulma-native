import React from 'react';
import { Asset } from 'expo-asset';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Image from './Image';
import { ASPECT_RATIOS } from '../../constants';

const tony = Asset.fromModule(require('../../../assets/tony.jpg')).uri;

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Image source={{ uri: tony }} />)
  .add('Interactive', () => (
    <Image
      aspectRatio={select('aspectRatio', ASPECT_RATIOS, undefined)}
      rounded={boolean('rounded', false)}
      source={{ uri: tony }}
    />
  ));
