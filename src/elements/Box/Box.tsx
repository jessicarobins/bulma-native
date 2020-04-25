import React, { FC } from 'react';
import { Text, View, ViewProps, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

interface OwnProps {
  children?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export type BoxProps = OwnProps & ViewProps;

const Box: FC<BoxProps> = (props: BoxProps) => {
  const { children, style = {}, textStyle = {}, ...rest } = props;

  return (
    <View style={[styles.view, style]} {...rest}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default Box;
