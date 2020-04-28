import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { getColor } from '../../theme/color';
import { getSize } from '../../theme/size';
import { rgba } from '../../utils/color';

const createStyles = (
  { color, size }: { color: Nullable<Color>; size: Size },
  theme: Theme,
) => {
  const colorHex = getColor(color, theme);
  const fontSize = getSize(size, theme);

  return StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
    },
    icon: {
      color: theme.inputIconColor,
      fontSize,
      height: fontSize,
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
    },
    iconLeft: {
      left: theme.controlPaddingHorizontalMultiplier * fontSize,
    },
    iconRight: {
      right: theme.controlPaddingHorizontalMultiplier * fontSize,
    },
    iconFocused: {
      color: theme.inputIconActiveColor,
    },
    input: {
      backgroundColor: theme.inputBackgroundColor,
      borderColor: colorHex || theme.inputBorderColor,
      borderRadius:
        size === 'small' ? theme.controlRadiusSmall : theme.inputRadius,
      borderWidth: theme.controlBorderWidth,
      color: theme.inputColor,
      fontSize,
      paddingHorizontal: theme.controlPaddingHorizontalMultiplier * fontSize,
      paddingVertical: theme.controlPaddingVerticalMultiplier * fontSize,
      width: '100%',
    },
    inputDisabled: {
      backgroundColor: theme.inputDisabledBackgroundColor,
      borderColor: theme.inputDisabledBorderColor,
      color: theme.inputDisabledColor,
      shadowRadius: 0,
    },
    inputIconLeft: {
      paddingLeft: theme.inputHeightMultiplier * fontSize,
    },
    inputIconRight: {
      paddingRight: theme.inputHeightMultiplier * fontSize,
    },
    inputFocused: {
      borderColor: colorHex || theme.inputFocusBorderColor,
      shadowColor: rgba(colorHex || theme.inputFocusBoxShadowColor, 0.25),
      shadowOffset: theme.inputFocusBoxShadowOffset,
      shadowOpacity: theme.inputFocusBoxShadowOpacityMultiplier * fontSize,
      shadowRadius: theme.inputFocusBoxShadowRadiusMultiplier * fontSize,
    },
    inputRounded: {
      borderRadius: theme.radiusRounded,
      paddingHorizontal:
        fontSize * (theme.controlPaddingHorizontalMultiplier + 0.375),
    },
  });
};

export default createStyles;
