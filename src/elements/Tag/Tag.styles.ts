import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/text';
import { Theme } from '../../theme';

const createStyles = (
  {
    color,
    rounded,
    size,
  }: {
    color: Nullable<Color>;
    rounded: boolean;
    size: Size;
  },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const invertedColorHex = getInvertColor(color, theme);
  const fontSize = getTextSize(size, theme, theme.sizeSmall);

  return StyleSheet.create({
    view: {
      alignItems: 'center',
      backgroundColor: colorHex || theme.tagBackgroundColor,
      borderRadius: rounded ? theme.radiusRounded : theme.tagRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 0.75 * theme.baseSize,
      paddingVertical: 0.25 * theme.baseSize,
    },
    text: {
      color: invertedColorHex || theme.tagColor,
      fontSize,
      lineHeight: 1.5 * fontSize,
    },
    deleteContainer: {
      marginLeft: 0.25 * theme.baseSize,
      marginRight: -0.375 * theme.baseSize,
    },
  });
};
export default createStyles;
