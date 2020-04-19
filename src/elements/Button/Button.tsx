import React, { FC } from 'react';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import getButtonStyle from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: Color;
  size?: Size;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
} & TouchableOpacityProps;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    color,
    size = 'normal',
    style,
    variant = 'solid',
    ...rest
  } = props;
  const buttonStyles = getButtonStyle({ color, size, variant });
  const containerStyles = [buttonStyles.container];
  const textStyles = [buttonStyles.text];

  return (
    <TouchableOpacity style={containerStyles} {...rest}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
