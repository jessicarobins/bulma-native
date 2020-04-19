import { StyleSheet } from 'react-native';
import { control } from './variables/derived';
import { getTextSize } from './theme/size';

export const getControlStyles = ({ size }: { size: Size }) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: control.controlBorderWidth,
      borderRadius:
        size === 'small' ? control.controlRadiusSmall : control.controlRadius,
      boxShadow: 'none',
      display: 'flex',
      height: control.controlHeight,
      justifyContent: 'flex-start',
      paddingVertical: control.controlPaddingVertical,
      paddingHorizontal: control.controlPaddingHorizontal,
      position: 'relative',
    },
    text: {
      fontSize: getTextSize(size),
      lineHeight: control.controlLineHeight,
    },
  });
