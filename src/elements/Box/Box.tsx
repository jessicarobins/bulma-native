import React, { FC, useContext } from 'react';
import { Text, View, ViewProps, StyleProp, TextStyle } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './styles';

interface OwnProps {
  children?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export type BoxProps = OwnProps & ViewProps;

const Box: FC<BoxProps> = (props: BoxProps) => {
  const { children, style = {}, textStyle = {}, ...rest } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <View style={[styles.view, style]} {...rest}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default Box;
