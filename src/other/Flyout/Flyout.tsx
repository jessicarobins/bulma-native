import React, { FC } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';

import createStyles from './Flyout.styles';

interface Props {
  children: React.ReactNode;
  onBackdropPress: () => void;
  open: boolean;
  style?: StyleProp<ViewStyle>;
}

const Flyout: FC<Props> = (props: Props) => {
  const styles = createStyles();

  if (!props.open) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={props.onBackdropPress}>
      <View style={[styles.flyoutContainer]}>
        <View style={[styles.flyout, props.style]}>{props.children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Flyout;
