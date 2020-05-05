import React, { FC } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import createStyles from './Flyout.styles';

interface Props {
  children: React.ReactNode;
  open: boolean;
  style?: StyleProp<ViewStyle>;
}

const Flyout: FC<Props> = (props: Props) => {
  const styles = createStyles();

  if (!props.open) {
    return null;
  }

  return (
    <View style={[styles.flyoutContainer]}>
      <View style={[styles.flyout, props.style]}>{props.children}</View>
    </View>
  );
};

export default Flyout;
