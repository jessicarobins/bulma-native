import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
import { Theme } from '../../theme/ThemeProvider';

const getColorStyles = (
  variant: ButtonVariant,
  color: Nullable<Color>,
  userTheme: Theme,
) => {
  const colorHex = getColor(color, userTheme);
  const invertedColorHex = getInvertColor(color, userTheme);

  switch (variant) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderColor: colorHex,
        textColor: colorHex,
      };
    case 'inverted':
      return {
        backgroundColor:
          invertedColorHex || userTheme.button.buttonBackgroundColor,
        borderColor: 'transparent',
        textColor: colorHex || userTheme.button.buttonColor,
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
        backgroundColor: colorHex || userTheme.button.buttonBackgroundColor,
        borderColor: 'transparent',
        textColor: invertedColorHex || userTheme.button.buttonColor,
      };
  }
};

const radiusStyles = (size: Size, rounded: boolean, userTheme: Theme) => {
  let paddingHorizontal = userTheme.button.buttonPaddingHorizontal;
  let borderRadius = userTheme.derived.control.controlRadius;

  if (rounded) {
    paddingHorizontal *= 0.25 * userTheme.base.baseSize;
    borderRadius = userTheme.base.misc.radiusRounded;
  } else if (size === 'small') {
    borderRadius = userTheme.base.misc.radiusSmall;
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
      borderWidth: userTheme.button.buttonBorderWidth,
      borderRadius,
      justifyContent: 'center',
      opacity: disabled ? userTheme.button.buttonDisabledOpacity : 1,
      paddingVertical: userTheme.button.buttonPaddingVertical,
      paddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize: getTextSize(size),
    },
  });
};

export default getButtonStyle;
