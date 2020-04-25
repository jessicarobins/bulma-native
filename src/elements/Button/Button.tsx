import React, { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import getButtonStyle from './styles';

interface OwnProps {
  children?: React.ReactNode;
  color?: Color;
  loaderColor?: string;
  loading?: boolean;
  rounded?: boolean;
  size?: Size;
  textStyle?: StyleProp<TextStyle>;
  variant?: ButtonVariant;
}

export type ButtonProps = OwnProps & TouchableOpacityProps;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    disabled = false,
    children,
    color,
    loaderColor,
    loading = false,
    rounded = false,
    size = 'normal',
    style,
    textStyle = {},
    variant = 'solid',
    ...rest
  } = props;
  const buttonStyles = getButtonStyle({
    color,
    disabled,
    rounded,
    size,
    variant,
  });
  const containerStyles = [buttonStyles.container];
  const activityIndicatorColor =
    loaderColor || buttonStyles.activityIndicator.color;
  const textStyles = [buttonStyles.text, textStyle];

  return (
    <TouchableOpacity disabled={disabled} style={containerStyles} {...rest}>
      {loading ? (
        <ActivityIndicator color={activityIndicatorColor} />
      ) : (
        <Text style={textStyles}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
