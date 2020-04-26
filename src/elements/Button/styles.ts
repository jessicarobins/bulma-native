import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
import { Theme } from '../../theme/ThemeProvider';

const getColorStyles = (
  variant: ButtonVariant,
  color: Nullable<Color>,
  userTheme: Theme,
): { backgroundColor: string; borderColor: string; textColor: string } => {
  const colorHex = getColor(color, userTheme) || userTheme.buttonColor;
  const invertedColorHex =
    getInvertColor(color, userTheme) || userTheme.buttonBackgroundColor;

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
    default:
    case 'solid':
      return {
        backgroundColor: colorHex,
        borderColor: 'transparent',
        textColor: invertedColorHex,
      };
  }
};

const radiusStyles = (size: Size, rounded: boolean, userTheme: Theme) => {
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
    rounded,
    size,
    variant,
  }: {
    color: Nullable<Color>;
    disabled: boolean;
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
  const { borderRadius, paddingHorizontal } = radiusStyles(
    size,
    rounded,
    userTheme,
  );

  return StyleSheet.create({
    activityIndicator: {
      color: textColor,
    },
    container: {
      backgroundColor,
      borderColor,
      borderWidth: userTheme.buttonBorderWidth,
      borderRadius,
      justifyContent: 'center',
      opacity: disabled ? userTheme.buttonDisabledOpacity : 1,
      paddingVertical: userTheme.buttonPaddingVertical,
      paddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize: getTextSize(size, userTheme),
    },
  });
};

export default getButtonStyle;
