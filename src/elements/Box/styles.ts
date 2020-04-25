import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    view: {
      backgroundColor: theme.box.boxBackgroundColor,
      borderRadius: theme.box.boxRadius,
      elevation: 1,

      padding: theme.box.boxPadding,

      shadowColor: theme.box.shadowColor,
      shadowOffset: theme.box.shadowOffset,
      shadowOpacity: theme.box.shadowOpacity,
      shadowRadius: theme.box.shadowRadius,
    },
    text: {
      color: theme.box.boxColor,
    },
  });

export default createStyles;
