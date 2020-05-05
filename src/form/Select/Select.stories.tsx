import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';

import { SIZES, COLORS } from '../../constants';
import Select from './Select';

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
];

storiesOf('Form/Select', module)
  .addParameters({ component: Select })
  .add('Basic', () => (
    <Select
      onChange={action('changed select')}
      options={options}
      value={options[0]}
    />
  ))
  .add('Interactive', () => {
    const [value, setValue] = React.useState(null as Nullable<SelectOption>);

    return (
      <Select
        color={select('color', COLORS, undefined)}
        iconName={text('iconName', 'globe')}
        loading={boolean('loading', false)}
        options={options}
        onChange={setValue}
        placeholder={text('placeholder', 'Pick an option')}
        rounded={boolean('rounded', false)}
        size={select('size', SIZES, 'normal')}
        value={value}
      />
    );
  });
