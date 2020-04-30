import React, { FC, useContext } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import getButtonStyle from './Button.styles';
import { ThemeContext } from '../../theme/ThemeProvider';
import Icon from '../Icon';

interface OwnProps {
  children?: React.ReactNode;
  color?: Color;
  iconLeft?: string;
  iconRight?: string;
  iconLeftProps?: {
    solid?: boolean;
    style?: StyleProp<TextStyle>;
  };
  iconRightProps?: {
    solid?: boolean;
    style?: StyleProp<TextStyle>;
  };
  loaderColor?: string;
  loading?: boolean;
  rounded?: boolean;
  size?: Size;
  static?: boolean;
  textStyle?: StyleProp<TextStyle>;
  variant?: ButtonVariant;
}

export type ButtonProps = OwnProps & TouchableOpacityProps;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    disabled = false,
    children,
    color,
    iconLeft,
    iconRight,
    iconLeftProps: {
      solid: iconSolidLeft = false,
      style: iconStyleLeft = {},
    } = {},
    iconRightProps: {
      solid: iconSolidRight = false,
      style: iconStyleRight = {},
    } = {},
    loaderColor,
    loading = false,
    rounded = false,
    size = 'normal',
    static: isStatic = false,
    style,
    textStyle = {},
    variant = 'solid',
    ...rest
  } = props;
  const theme = useContext(ThemeContext);

  const buttonStyles = getButtonStyle(
    {
      color,
      disabled,
      hasChildren: !!children,
      hasIconLeft: !!iconLeft,
      hasIconRight: !!iconRight,
      isStatic,
      rounded,
      size,
      variant,
    },
    theme,
  );
  const containerStyles = [buttonStyles.container, style];
  const activityIndicatorColor =
    loaderColor || buttonStyles.activityIndicator.color;
  const textStyles = [buttonStyles.text, textStyle];

  const ButtonIconLeft = iconLeft ? (
    <Icon
      name={iconLeft}
      size={size}
      solid={iconSolidLeft}
      style={[buttonStyles.icon, iconStyleLeft]}
    />
  ) : null;

  const ButtonIconRight =
    iconRight &&
    (iconRight === 'loading' ? (
      <ActivityIndicator color={activityIndicatorColor} />
    ) : (
      <Icon
        name={iconRight}
        size={size}
        solid={iconSolidRight}
        style={[buttonStyles.icon, iconStyleRight]}
      />
    ));

  return (
    <TouchableOpacity
      disabled={disabled || isStatic}
      style={containerStyles}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={activityIndicatorColor} />
      ) : (
        <>
          {ButtonIconLeft}
          {children && <Text style={textStyles}>{children}</Text>}
          {ButtonIconRight}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
