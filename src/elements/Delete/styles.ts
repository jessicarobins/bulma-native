import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { getIconSize } from '../../theme/size';

const createStyles = ({ size }: { size: IconSize }, theme: Theme) =>
  StyleSheet.create({
    button: {
      borderRadius: theme.radiusRounded,
    },
    icon: {
      fontSize: getIconSize(size, theme),
    },
  });

export default createStyles;
