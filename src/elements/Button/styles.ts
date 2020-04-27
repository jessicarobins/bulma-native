import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/text';
import { Theme } from '../../theme/ThemeProvider';

const getColorStyles = (
  variant: ButtonVariant,
  color: Nullable<Color>,
  userTheme: Theme,
): { backgroundColor: string; borderColor: string; textColor: string } => {
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
    hasIcon,
    iconPosition,
    rounded,
    size,
    variant,
  }: {
    color: Nullable<Color>;
    disabled: boolean;
    hasChildren: boolean;
    hasIcon: boolean;
    iconPosition: ButtonIconPosition;
    rounded: boolean;
    size: Size;
    variant: ButtonVariant;
  },
  userTheme: Theme,
) => {
  const { textColor, backgroundColor, borderColor } = getColorStyles(
    variant,
    color,
    userTheme,
  );
  const { borderRadius, paddingHorizontal } = getRadiusStyles(
    size,
    rounded,
    userTheme,
  );

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
      marginHorizontal: hasChildren
        ? 0
        : -0.25 * userTheme.buttonPaddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize: getTextSize(size, userTheme),
      marginLeft:
        hasIcon && iconPosition === 'left'
          ? userTheme.buttonPaddingHorizontal
          : 0,
      marginRight:
        hasIcon && iconPosition === 'right'
          ? userTheme.buttonPaddingHorizontal
          : 0,
    },
  });
};

export default getButtonStyle;
