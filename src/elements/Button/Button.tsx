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
  /** Children to display inside the button */
  children?: React.ReactNode;

  /** Corresponds to Bulma Colors */
  color?: Color;

  /** Optional icon to display on the left of the button. Requires setting up an IconProvider */
  iconLeft?: string;

  /** Optional icon to display on the left of the button. Requires setting up an IconProvider */
  iconRight?: string;

  /** Optional props to pass to the icon on the left */
  iconLeftProps?: {
    solid?: boolean;
    style?: StyleProp<TextStyle>;
  };

  /** Optional props to pass to the icon on the right */
  iconRightProps?: {
    solid?: boolean;
    style?: StyleProp<TextStyle>;
  };

  /** [React Native color](https://reactnative.dev/docs/colors) for the `ActivityIndicator` */
  loaderColor?: string;

  /**
   * Display a spinner instead of text
   * @default false
   * */
  loading?: boolean;

  /** @default false */
  rounded?: boolean;

  /**
   * Corresponds to Bulma Sizes
   * @default normal
   * */
  size?: Size;

  /**
   * Display a non-interactive button, for use with form add-ons
   * @default false
   */
  static?: boolean;

  /** Optional styles to pass to the inner `Text` component */
  textStyle?: StyleProp<TextStyle>;

  /**
   * @default solid
   */
  variant?: ButtonVariant;
}

export type ButtonProps = OwnProps & TouchableOpacityProps;

/**
 * `TouchableOpacity` with styles based on the [Bulma Button element](https://bulma.io/documentation/elements/button)
 * Usage with an icon requires `iconPack` to be supplied to the root `ApplicationProvider` component
 */
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
