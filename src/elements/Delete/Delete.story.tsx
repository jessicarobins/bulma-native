import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import Delete from './Delete';

storiesOf('Delete', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Delete />)
  .add('Interactive', () => (
    <Delete
      size={select('size', ['small', 'normal', 'medium', 'large'], 'normal')}
    />
  ));
