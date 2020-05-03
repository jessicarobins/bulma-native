import React, { FC, useContext } from 'react';
import { ViewStyle, StyleProp, TouchableOpacity, View } from 'react-native';

import { ThemeContext } from '../../theme';
import { Button, Text } from '../../elements';
import Flyout from '../../other/Flyout';
import createStyles from './Select.styles';

interface OwnProps {
  color?: Color;
  iconName?: string;
  loading?: boolean;
  onChange: (value: SelectOption) => void;
  options: SelectOption[];
  placeholder?: string;
  rounded?: boolean;
  size?: Size;
  style?: StyleProp<ViewStyle>;
  value: Nullable<SelectOption>;
}

export type SelectProps = OwnProps;

const Select: FC<SelectProps> = (props: SelectProps) => {
  const {
    color,
    iconName,
    loading,
    options,
    placeholder,
    rounded = false,
    size = 'normal',
    value,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, rounded, size }, theme);

  const handleChange = (option: SelectOption) => {
    props.onChange(option);
    setOpen(false);
  };

  return (
    <View>
      <Button
        iconLeft={iconName}
        iconLeftProps={{ style: styles.buttonIconLeft }}
        iconRight={loading ? 'loading' : 'angle-down'}
        iconRightProps={{ style: styles.buttonIconRight }}
        onPress={() => setOpen(!open)}
        size={size}
        style={[styles.button]}
        textStyle={[styles.buttonText, !value && styles.buttonTextPlaceholder]}
      >
        {value?.name ?? placeholder}
      </Button>
      <Flyout
        isOpen={open}
        onBackdropPress={() => setOpen(false)}
        style={[styles.flyout, rounded && styles.flyoutRounded]}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => handleChange(option)}
          >
            <Text style={[styles.option]}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </Flyout>
    </View>
  );
};

export default Select;
