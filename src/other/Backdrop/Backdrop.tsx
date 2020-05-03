import React, { FC } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './Backdrop.styles';

type Props = {
  isOpen: boolean;
  onBackdropPress: (e: React.BaseSyntheticEvent) => void;
};

const Backdrop: FC<Props> = (props: Props) => {
  if (props.isOpen) {
    return (
      <TouchableWithoutFeedback onPress={props.onBackdropPress}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
    );
  }

  return null;
};

export default Backdrop;
