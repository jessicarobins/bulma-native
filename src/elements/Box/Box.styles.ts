import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    view: {
      backgroundColor: theme.boxBackgroundColor,
      borderRadius: theme.boxRadius,
      elevation: 1,

      padding: theme.boxPadding,

      shadowColor: theme.boxShadowColor,
      shadowOffset: theme.boxShadowOffset,
      shadowOpacity: theme.boxShadowOpacity,
      shadowRadius: theme.boxShadowRadius,
    },
    text: {
      color: theme.boxColor,
    },
  });

export default createStyles;
