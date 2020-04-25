import { StyleSheet } from 'react-native';
import { box } from '../../variables/box';

const styles = StyleSheet.create({
  view: {
    backgroundColor: box.boxBackgroundColor,
    borderRadius: box.boxRadius,
    elevation: 1,

    padding: box.boxPadding,

    shadowColor: box.shadowColor,
    shadowOffset: box.shadowOffset,
    shadowOpacity: box.shadowOpacity,
    shadowRadius: box.shadowRadius,
  },
  text: {
    color: box.boxColor,
  },
});

export default styles;
