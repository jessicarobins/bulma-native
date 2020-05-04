import React from 'react';
import { StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';

import { ASPECT_RATIOS } from '../../constants';
import tony from '../../../assets/tony.jpg';
import Image from './Image';

const styles = StyleSheet.create({
  image: {
    minHeight: 200,
  },
});

storiesOf('Elements/Image', module)
  .add('Basic', () => <Image style={styles.image} source={tony} />)
  .add('Interactive', () => (
    <Image
      aspectRatio={select('aspectRatio', ASPECT_RATIOS, undefined)}
      rounded={boolean('rounded', false)}
      source={tony}
      style={styles.image}
    />
  ));
