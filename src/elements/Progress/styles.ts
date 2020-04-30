import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { getSize } from '../../theme/size';
import { getColor } from '../../theme/color';

const createStyles = (
  { color, size }: { color: Nullable<Color>; size: Size },
  theme: Theme,
) =>
  StyleSheet.create({
    progress: {
      backgroundColor: theme.progressBarBackgroundColor,
      borderWidth: 0,
      borderRadius: theme.progressBorderRadius,
      height: getSize(size, theme),
      overflow: 'hidden',
      padding: 0,
    },
    progressValue: {
      backgroundColor: getColor(
        color,
        theme,
        theme.progressValueBackgroundColor,
      ),
      height: '100%',
    },
  });

export default createStyles;
