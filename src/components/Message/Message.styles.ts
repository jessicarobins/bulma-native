import { StyleSheet } from 'react-native';

import {
  getColor,
  getInvertColor,
  getDarkColor,
  getLightColor,
} from '../../theme/color';
import { getTextSize } from '../../theme/text';
import { Theme } from '../../theme';
import { getLineHeight } from '../../utils/font';

const createStyles = (
  {
    color,
    size,
  }: {
    color: Nullable<Color>;
    size: Size;
  },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const lightColorHex = getLightColor(color, theme);
  const darkColorHex = getDarkColor(color, theme);
  const invertedColorHex = getInvertColor(color, theme);
  const fontSize = getTextSize(size, theme, theme.sizeNormal);

  return StyleSheet.create({
    body: {
      borderColor: colorHex || theme.messageBodyBorderColor,
      borderRadius: theme.messageBodyRadius,
      borderLeftWidth: theme.messageBodyBorderLeftWidth,
      paddingVertical: fontSize * theme.messageBodyPaddingVerticalMultiplier,
      paddingHorizontal:
        fontSize * theme.messageBodyPaddingHorizontalMultiplier,
    },
    bodyWithHeader: {
      borderLeftWidth: theme.messageHeaderBodyBorderWidth,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    bodyText: {
      fontSize,
      color: darkColorHex || theme.messageBodyColor,
    },
    header: {
      alignItems: 'center',
      backgroundColor: colorHex || theme.messageHeaderBackgroundColor,
      borderTopLeftRadius: theme.messageHeaderRadius,
      borderTopRightRadius: theme.messageHeaderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal:
        fontSize * theme.messageHeaderPaddingHorizontalMultiplier,
      paddingVertical: fontSize * theme.messageHeaderPaddingVerticalMultiplier,
    },
    headerText: {
      color: invertedColorHex || theme.messageHeaderColor,
      fontSize,
      fontWeight: theme.messageHeaderWeight,
      lineHeight: getLineHeight(fontSize, 1.25),
    },
    message: {
      backgroundColor: lightColorHex || theme.messageBackgroundColor,
      borderRadius: theme.messageRadius,
    },
  });
};
export default createStyles;
