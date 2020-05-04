import { StyleSheet } from 'react-native';

import { getColor } from '../../theme/color';
import { getTextSize, getTextWeight } from '../../theme/text';
import { Theme } from '../../theme';

const createStyles = (
  {
    alignment,
    color,
    size,
    transform,
    weight,
  }: {
    alignment: TextAlignment;
    color: Nullable<Color>;
    size: TextSize;
    transform: Nullable<TextTransform>;
    weight: TextWeight;
  },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const fontSize = getTextSize(size, theme);
  const fontWeight = getTextWeight(weight, theme);

  return StyleSheet.create({
    text: {
      color: colorHex || theme.text,
      fontSize,
      fontWeight,
      textAlign: alignment,
      textTransform: transform || 'none',
    },
  });
};
export default createStyles;
