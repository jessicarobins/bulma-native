import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';

import Delete from './Delete';

storiesOf('Elements/Delete', module)
  .addParameters({ component: Delete })
  .add('Basic', () => <Delete />)
  .add('Interactive', () => (
    <Delete
      size={select('size', ['small', 'normal', 'medium', 'large'], 'normal')}
    />
  ));
