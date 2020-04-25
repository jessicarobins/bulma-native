import { StyleSheet } from 'react-native';

import { getColor, getInvertColor } from '../../theme/color';
import { getTextSize } from '../../theme/size';
import { baseSize, misc } from '../../variables/base';
import { typography } from '../../variables/derived';
import tag from '../../variables/tag';

const createStyles = (color: Nullable<Color>, rounded: boolean, size: Size) => {
  const colorHex = getColor(color);
  const invertedColorHex = getInvertColor(color);
  const fontSize = getTextSize(size, typography.sizeSmall);

  return StyleSheet.create({
    view: {
      alignItems: 'center',
      backgroundColor: colorHex || tag.tagBackgroundColor,
      borderRadius: rounded ? misc.radiusRounded : tag.tagRadius,
      justifyContent: 'center',
      paddingHorizontal: 0.75 * baseSize,
      paddingVertical: 0.25 * baseSize,
    },
    text: {
      color: invertedColorHex || tag.tagColor,
      fontSize,
      lineHeight: 1.5 * fontSize,
    },
  });
};
export default createStyles;
