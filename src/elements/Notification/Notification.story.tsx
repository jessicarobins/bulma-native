import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import Notification from './Notification';
import { COLORS } from '../../constants';

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Notification isOpen>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
      Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
      Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
      dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit
    </Notification>
  ))
  .add('Interactive', () => (
    <Notification isOpen color={select('color', COLORS, undefined)}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
        et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing
        elit
      </Text>
    </Notification>
  ))
  .add('Basic Delete', () => (
    <Notification
      isOpen
      color={select('color', COLORS, undefined)}
      onClose={action('clicked-delete')}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
        et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing
        elit
      </Text>
    </Notification>
  ));
