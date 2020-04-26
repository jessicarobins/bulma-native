import { StyleSheet } from 'react-native';

import { Theme } from '../../theme';
import { getTextSize } from '../../theme/text';
import { getLineHeight } from '../../utils/font';

const createStyles = (
  {
    hasTitle,
    subtitleSize,
    titleSize,
  }: { hasTitle: boolean; subtitleSize: TextSize; titleSize: TextSize },
  theme: Theme,
) => {
  const titleFontSize = getTextSize(titleSize, theme);
  const subtitleFontSize = getTextSize(subtitleSize, theme);

  return StyleSheet.create({
    subtitle: {
      lineHeight: getLineHeight(
        subtitleFontSize,
        theme.subtitleLineheightMultiplier,
      ),
      marginTop: hasTitle ? theme.subtitleNegativeMargin : 0,
    },
    title: {
      lineHeight: getLineHeight(titleFontSize, theme.titleLineHeightMultiplier),
    },
  });
};
export default createStyles;
