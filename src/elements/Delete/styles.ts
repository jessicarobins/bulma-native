import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

import { Theme } from '../../theme';

const createStyles = ({ size }: { size: Size }, theme: Theme) => {
  const iconContainerSize = size === 'large' ? 24 : 20;
  const iconFontSize = size === 'large' ? 14 : 12;

  return StyleSheet.create({
    button: {
      backgroundColor: chroma(theme.schemeInvert).alpha(0.2).hex(),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1000,
      height: iconContainerSize,
      width: iconContainerSize,
      overflow: 'hidden',
    },
    icon: {
      color: 'white',
      fontSize: iconFontSize,
      height: iconFontSize,
      width: iconFontSize,
      marginLeft: 4,
    },
  });
};

export default createStyles;
