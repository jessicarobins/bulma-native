import { StyleSheet } from 'react-native';

const createStyles = () => {
  return StyleSheet.create({
    flyout: {
      position: 'absolute',
      top: -1,
      left: 0,
      right: 0,
      overflow: 'hidden',
    },
    flyoutContainer: {
      position: 'relative',
      zIndex: 10,
    },
  });
};

export default createStyles;
