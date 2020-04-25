import React, { FC } from 'react';
import {
  ViewProps,
  View,
  Text,
  StyleProp,
  TextStyle,
  TextProps,
} from 'react-native';
import createStyles from './styles';

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
  const styles = createStyles(color, rounded, size);
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
