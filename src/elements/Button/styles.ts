import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
import { misc, baseSize } from '../../variables/base';
import button from '../../variables/button';
import { control } from '../../variables/derived';

const getColorStyles = (variant: ButtonVariant, color: Nullable<Color>) => {
  const colorHex = getColor(color);
  const invertedColorHex = getInvertColor(color);

  switch (variant) {
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderColor: colorHex,
        textColor: colorHex,
      };
    case 'inverted':
      return {
        backgroundColor: invertedColorHex || button.buttonBackgroundColor,
        borderColor: 'transparent',
        textColor: colorHex || button.buttonColor,
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
        backgroundColor: colorHex || button.buttonBackgroundColor,
        borderColor: 'transparent',
        textColor: invertedColorHex || button.buttonColor,
      };
  }
};

const radiusStyles = (size: Size, rounded: boolean) => {
  let paddingHorizontal = button.buttonPaddingHorizontal;
  let borderRadius = control.controlRadius;

  if (rounded) {
    paddingHorizontal *= 0.25 * baseSize;
    borderRadius = misc.radiusRounded;
  } else if (size === 'small') {
    borderRadius = misc.radiusSmall;
  }

  return { borderRadius, paddingHorizontal };
};

const getButtonStyle = ({
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
}) => {
  const { textColor, backgroundColor, borderColor } = getColorStyles(
    variant,
    color,
  );
  const { borderRadius, paddingHorizontal } = radiusStyles(size, rounded);

  return StyleSheet.create({
    activityIndicator: {
      color: textColor,
    },
    container: {
      backgroundColor,
      borderColor,
      borderWidth: button.buttonBorderWidth,
      borderRadius,
      justifyContent: 'center',
      opacity: disabled ? button.buttonDisabledOpacity : 1,
      paddingVertical: button.buttonPaddingVertical,
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
