import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import Message from './Message';
import { BASIC_COLORS, SIZES } from '../../constants';

storiesOf('Components/Message', module)
  .addParameters({ component: Message })
  .add('Basic', () => (
    <Message isOpen>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
      Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
      Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
      dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit
    </Message>
  ))
  .add('Basic With Header', () => (
    <Message header="Hello World" isOpen onClose={action('clicked-delete')}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
        et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing
        elit
      </Text>
    </Message>
  ))
  .add('Interactive', () => (
    <Message
      isOpen
      color={select('color', BASIC_COLORS, undefined)}
      size={select('size', SIZES, 'normal')}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
        et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing
        elit
      </Text>
    </Message>
  ))
  .add('Interactive With Header', () => (
    <Message
      isOpen
      color={select('color', BASIC_COLORS, undefined)}
      header={text('header', 'Hello World')}
      onClose={action('clicked-delete')}
      size={select('size', SIZES, 'normal')}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
        et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing
        elit
      </Text>
    </Message>
  ));
