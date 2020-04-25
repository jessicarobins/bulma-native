import React, { FC, useContext } from 'react';
import {
  ViewProps,
  View,
  Text,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';
import createStyles from './styles';
import { ThemeContext } from '../../theme';

type Props = {
  children: React.ReactNode;
  color?: Color;
  rounded?: boolean;
  size?: Size;
  textProps?: TextProps;
  textStyles?: StyleProp<TextStyle>;
} & ViewProps;

const Tag: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    rounded = false,
    size = 'normal',
    style,
    textProps,
    textStyles,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, rounded, size }, theme);
  const text = [styles.text, textStyles];
  const view = [styles.view, style];

  return (
    <View style={view} {...rest}>
      <Text style={text} {...textProps}>
        {children}
      </Text>
    </View>
  );
};

export default Tag;
