import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/text';
import { Theme } from '../../theme/ThemeProvider';
import { theme } from '../../theme';

const getColorStyles = (
  variant: ButtonVariant,
  color: Nullable<Color>,
  isStatic: boolean,
  userTheme: Theme,
): { backgroundColor: string; borderColor: string; textColor: string } => {
  if (isStatic) {
    return {
      backgroundColor: theme.buttonStaticBackgroundColor,
      borderColor: theme.buttonStaticBorderColor,
      textColor: theme.buttonStaticColor,
    };
  }

  const colorHex =
    getColor(color, userTheme) || userTheme.buttonBackgroundColor;
  const invertedColorHex =
    getInvertColor(color, userTheme) || userTheme.buttonColor;

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
        borderColor: color ? 'transparent' : userTheme.buttonBorderColor,
        textColor: invertedColorHex,
      };
  }
};

const getRadiusStyles = (size: Size, rounded: boolean, userTheme: Theme) => {
  let paddingHorizontal = userTheme.buttonPaddingHorizontal;
  let borderRadius = userTheme.controlRadius;

  if (rounded) {
    paddingHorizontal *= 0.25 * userTheme.baseSize;
    borderRadius = userTheme.radiusRounded;
  } else if (size === 'small') {
    borderRadius = userTheme.radiusSmall;
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
  userTheme: Theme,
) => {
  const { textColor, backgroundColor, borderColor } = getColorStyles(
    variant,
    color,
    isStatic,
    userTheme,
  );
  const { borderRadius, paddingHorizontal } = getRadiusStyles(
    size,
    rounded,
    userTheme,
  );

  const fontSize = getTextSize(size, userTheme);

  return StyleSheet.create({
    activityIndicator: {
      color: textColor,
    },
    container: {
      alignItems: 'center',
      backgroundColor,
      borderColor,
      borderWidth: userTheme.buttonBorderWidth,
      borderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      opacity: disabled ? userTheme.buttonDisabledOpacity : 1,
      paddingVertical: userTheme.buttonPaddingVertical,
      paddingHorizontal,
    },
    icon: {
      color: textColor,
      marginHorizontal: hasChildren
        ? 0
        : -0.3 * userTheme.buttonPaddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize,
      marginLeft: hasIconLeft ? 0.5 * userTheme.buttonPaddingHorizontal : 0,
      marginRight: hasIconRight ? 0.5 * userTheme.buttonPaddingHorizontal : 0,
    },
  });
};

export default getButtonStyle;
