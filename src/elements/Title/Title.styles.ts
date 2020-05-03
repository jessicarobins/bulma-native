import { StyleSheet } from 'react-native';

import { Theme } from '../../theme';
import { getTextSize } from '../../theme/text';
import { getLineHeight } from '../../utils/font';

const createStyles = (
  { subtitleSize, titleSize }: { subtitleSize: TextSize; titleSize: TextSize },
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
      marginTop: 0,
    },
    subtitleWithTitle: {
      marginTop: theme.subtitleNegativeMarginMultiplier * titleFontSize,
    },
    title: {
      lineHeight: getLineHeight(titleFontSize, theme.titleLineHeightMultiplier),
    },
    titleWithSubtitle: {
      marginBottom: 1.5 * titleFontSize,
    },
  });
};
export default createStyles;
