import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { getColor } from '../../theme/color';
import { getSize } from '../../theme/size';

const createStyles = (
  {
    color,
    rounded,
    size,
  }: { color: Nullable<Color>; rounded: boolean; size: Size },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const fontSize = getSize(size, theme);

  return StyleSheet.create({
    button: {
      borderColor: colorHex || theme.inputBorderColor,
      borderRadius: rounded ? theme.radiusRounded : theme.inputRadius,
    },
    buttonIconLeft: {
      color: theme.inputIconColor,
    },
    buttonIconRight: {
      color: colorHex || theme.inputArrow,
    },
    buttonText: {
      fontSize,
      flex: 1,
      textAlign: 'left',
    },
    buttonTextPlaceholder: {
      color: theme.inputIconColor,
    },
    buttonTextContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    flyout: {
      backgroundColor: theme.inputBackgroundColor,
      borderColor: colorHex || theme.inputBorderColor,
      borderBottomLeftRadius: theme.inputRadius,
      borderBottomRightRadius: theme.inputRadius,
      borderWidth: theme.controlBorderWidth,
    },
    flyoutRounded: {
      marginHorizontal: fontSize,
    },
    option: {
      backgroundColor: 'white',
      paddingHorizontal: fontSize,
      paddingVertical: 0.5 * fontSize,
    },
  });
};

export default createStyles;
