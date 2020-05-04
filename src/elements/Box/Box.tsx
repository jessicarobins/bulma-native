import React, { FC, useContext } from 'react';
import { Text, View, ViewProps, StyleProp, TextStyle } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './Box.styles';

interface OwnProps {
  /** Children to display inside the box */
  children: React.ReactNode;

  /** Optional styles to apply to the text inside the box */
  textStyle?: StyleProp<TextStyle>;
}

export type BoxProps = OwnProps & ViewProps;

/** Based on the [Bulma Box Element](https://bulma.io/documentation/elements/box/) */
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
