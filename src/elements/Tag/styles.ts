import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
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
  const fontSize = getTextSize(size, theme.derived.typography.sizeSmall);

  return StyleSheet.create({
    view: {
      alignItems: 'center',
      backgroundColor: colorHex || theme.tag.tagBackgroundColor,
      borderRadius: rounded
        ? theme.base.misc.radiusRounded
        : theme.tag.tagRadius,
      justifyContent: 'center',
      paddingHorizontal: 0.75 * theme.base.baseSize,
      paddingVertical: 0.25 * theme.base.baseSize,
    },
    text: {
      color: invertedColorHex || theme.tag.tagColor,
      fontSize,
      lineHeight: 1.5 * fontSize,
    },
  });
};
export default createStyles;
