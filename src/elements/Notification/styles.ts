import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { Theme } from '../../theme';

const createStyles = ({ color }: { color: Nullable<Color> }, theme: Theme) => {
  const colorHex = getColor(color, theme);
  const invertedColorHex = getInvertColor(color, theme);

  return StyleSheet.create({
    delete: {
      position: 'absolute',
      right: 0.5 * theme.baseSize,
      top: 0.5 * theme.baseSize,
    },
    view: {
      backgroundColor: colorHex || theme.notificationBackgroundColor,
      borderRadius: theme.notificationRadius,
      paddingHorizontal: theme.notificationPaddingHorizontal,
      paddingVertical: theme.notificationPaddingVertical,
      position: 'relative',
    },
    text: {
      color: invertedColorHex || theme.text,
      fontSize: theme.sizeNormal,
      lineHeight: 1.5 * theme.sizeNormal,
    },
  });
};

export default createStyles;
