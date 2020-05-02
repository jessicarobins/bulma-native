import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { select, boolean, text } from '@storybook/addon-knobs';

import { SIZES, COLORS } from '../../constants';
import { Button } from '../../elements';
import Input from '../Input';
import Field from './Field';

storiesOf('Form/Field', module)
  .add('Basic', () => (
    <Field label="Email" help="Help text">
      <Input placeholder="Email Address" />
    </Field>
  ))
  .add('Basic with Addons', () => (
    <Field label="From" help="Do not enter the first zero">
      <Button static>+44</Button>
      <Input placeholder="Your phone number" />
      <Button>Submit</Button>
    </Field>
  ))
  .add('Interactive', () => (
    <Field
      color={select('color', COLORS, undefined)}
      help={text('help', 'This is a help text')}
      horizontal={boolean('horizontal', false)}
      label={text('label', 'Label')}
      size={select('size', SIZES, 'normal')}
    >
      <Input />
    </Field>
  ));
