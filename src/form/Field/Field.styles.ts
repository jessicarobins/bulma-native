import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { getColor } from '../../theme/color';
import { getSize } from '../../theme/size';

const createStyles = (
  { color, size }: { color: Nullable<Color>; size: Size },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const fontSize = getSize(size, theme);

  return StyleSheet.create({
    childStretched: {
      flex: 1,
    },
    childNotFirst: {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    },
    childNotLast: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      marginRight: -1,
    },
    children: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    field: {
      alignItems: 'stretch',
      display: 'flex',
      flexDirection: 'column',
    },
    fieldHorizontal: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    help: {
      color: colorHex || theme.text,
      fontSize: theme.helpSize,
      marginTop: 0.25 * fontSize,
    },
    input: {
      marginBottom: 0.75 * fontSize,
    },
    inputContainerHorizontal: {
      flex: 1,
    },
    label: {
      color: theme.labelColor,
      fontSize,
      fontWeight: theme.labelWeight,
      marginBottom: 0.5 * fontSize,
      marginRight: 1.5 * fontSize,
    },
    labelHorizontal: {
      marginBottom: 0,
      paddingTop: 0.375 * fontSize,
    },
  });
};

export default createStyles;
