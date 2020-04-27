import React, { FC, useContext } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import getButtonStyle from './styles';
import { ThemeContext } from '../../theme/ThemeProvider';
import Icon from '../Icon';

interface OwnProps {
  children?: React.ReactNode;
  color?: Color;
  iconName?: string;
  iconPosition?: ButtonIconPosition;
  iconProps?: {
    solid?: boolean;
    style?: StyleProp<TextStyle>;
  };
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
    iconName,
    iconPosition = 'left',
    iconProps: { solid: iconSolid = false, style: iconStyle = {} } = {},
    loaderColor,
    loading = false,
    rounded = false,
    size = 'normal',
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
      hasIcon: !!iconName,
      iconPosition,
      rounded,
      size,
      variant,
    },
    theme,
  );
  const containerStyles = [buttonStyles.container, style];
  const activityIndicatorColor =
    loaderColor || buttonStyles.activityIndicator.color;
  const iconStyles = [buttonStyles.icon, iconStyle];
  const textStyles = [buttonStyles.text, textStyle];

  const ButtonIcon = iconName ? (
    <Icon name={iconName} size={size} solid={iconSolid} style={iconStyles} />
  ) : null;

  return (
    <TouchableOpacity disabled={disabled} style={containerStyles} {...rest}>
      {loading ? (
        <ActivityIndicator color={activityIndicatorColor} />
      ) : (
        <>
          {ButtonIcon && iconPosition === 'left' ? ButtonIcon : null}
          {children && <Text style={textStyles}>{children}</Text>}
          {ButtonIcon && iconPosition === 'right' ? ButtonIcon : null}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
