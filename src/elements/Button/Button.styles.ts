import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/text';
import { Theme } from '../../theme/ThemeProvider';

const getColorStyles = (
  variant: ButtonVariant,
  color: Nullable<Color>,
  isStatic: boolean,
  theme: Theme,
): { backgroundColor: string; borderColor: string; textColor: string } => {
  if (isStatic) {
    return {
      backgroundColor: theme.buttonStaticBackgroundColor,
      borderColor: theme.buttonStaticBorderColor,
      textColor: theme.buttonStaticColor,
    };
  }

  const colorHex = getColor(color, theme) || theme.buttonBackgroundColor;
  const invertedColorHex = getInvertColor(color, theme) || theme.buttonColor;

  switch (variant) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderColor: colorHex,
        textColor: colorHex,
      };
    case 'inverted':
      return {
        backgroundColor: invertedColorHex,
        borderColor: 'transparent',
        textColor: colorHex,
      };
    case 'invertedOutline':
      return {
        backgroundColor: 'transparent',
        borderColor: invertedColorHex,
        textColor: invertedColorHex,
      };
    case 'solid':
    default:
      return {
        backgroundColor: colorHex,
        borderColor: color ? 'transparent' : theme.buttonBorderColor,
        textColor: invertedColorHex,
      };
  }
};

const getRadiusStyles = (
  size: Size,
  rounded: boolean,
  theme: Theme,
  fontSize: number,
) => {
  let paddingHorizontal = theme.buttonPaddingHorizontalMultipler * fontSize;
  let borderRadius = theme.controlRadius;

  if (rounded) {
    paddingHorizontal *= 0.25 * theme.baseSize;
    borderRadius = theme.radiusRounded;
  } else if (size === 'small') {
    borderRadius = theme.radiusSmall;
  }

  return { borderRadius, paddingHorizontal };
};

const getButtonStyle = (
  {
    color,
    disabled,
    hasChildren,
    hasIconLeft,
    hasIconRight,
    isStatic,
    rounded,
    size,
    variant,
  }: {
    color: Nullable<Color>;
    disabled: boolean;
    hasChildren: boolean;
    hasIconLeft: boolean;
    hasIconRight: boolean;
    isStatic: boolean;
    rounded: boolean;
    size: Size;
    variant: ButtonVariant;
  },
  theme: Theme,
) => {
  const { textColor, backgroundColor, borderColor } = getColorStyles(
    variant,
    color,
    isStatic,
    theme,
  );
  const fontSize = getTextSize(size, theme);
  const { borderRadius, paddingHorizontal } = getRadiusStyles(
    size,
    rounded,
    theme,
    fontSize,
  );

  const buttonPaddingHorizontal =
    fontSize * theme.buttonPaddingHorizontalMultipler;

  return StyleSheet.create({
    activityIndicator: {
      color: textColor,
    },
    container: {
      alignItems: 'center',
      backgroundColor,
      borderColor,
      borderWidth: theme.buttonBorderWidth,
      borderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      opacity: disabled ? theme.buttonDisabledOpacity : 1,
      paddingVertical: theme.buttonPaddingVerticalMultiplier * fontSize,
      paddingHorizontal,
    },
    icon: {
      color: textColor,
      marginHorizontal: hasChildren ? 0 : -0.3 * buttonPaddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize,
      marginLeft: hasIconLeft ? 0.5 * buttonPaddingHorizontal : 0,
      marginRight: hasIconRight ? 0.5 * buttonPaddingHorizontal : 0,
    },
  });
};

export default getButtonStyle;
