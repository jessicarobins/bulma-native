import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './Backdrop.styles';

type Props = {
  open: boolean;
  onPress: (e: React.BaseSyntheticEvent) => void;
};

const Backdrop: FC<Props> = (props: Props) => {
  if (props.open) {
    return (
      <View onTouchEnd={props.onPress}>
        <View style={styles.backdrop} />
      </View>
    );
  }

  return null;
};

export default Backdrop;
