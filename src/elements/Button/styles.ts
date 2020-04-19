import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
import { misc } from '../../variables/base';
import { button } from '../../variables/button';
import { control } from '../../variables/derived';

const getButtonStyle = ({
  color,
  size,
  variant,
}: {
  color: Nullable<Color>;
  size: Size;
  variant: ButtonVariant;
}) => {
  const colorHex = getColor(color);
  const invertedColorHex = getInvertColor(color);
  let textColor, backgroundColor, borderColor;

  switch (variant) {
    case 'outline': {
      backgroundColor = 'transparent';
      borderColor = colorHex;
      textColor = colorHex;
    }
    case 'inverted': {
      backgroundColor = invertedColorHex || button.buttonBackgroundColor;
      borderColor = 'transparent';
      textColor = colorHex || button.buttonColor;
    }
    case 'invertedOutline': {
      backgroundColor = 'transparent';
      borderColor = invertedColorHex;
      textColor = invertedColorHex;
    }
    default:
    case 'solid': {
      backgroundColor = colorHex || button.buttonBackgroundColor;
      borderColor = 'transparent';
      textColor = invertedColorHex || button.buttonColor;
    }
  }

  return StyleSheet.create({
    container: {
      backgroundColor,
      borderColor,
      borderWidth: button.buttonBorderWidth,
      borderRadius: size === 'small' ? misc.radiusSmall : control.controlRadius,
      justifyContent: 'center',
      paddingVertical: button.buttonPaddingVertical,
      paddingHorizontal: button.buttonPaddingHorizontal,
    },
    text: {
      color: textColor,
      textAlign: 'center',
      fontSize: getTextSize(size),
    },
  });
};

export default getButtonStyle;
