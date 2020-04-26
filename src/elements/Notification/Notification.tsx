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
  isOpen: boolean;
  // onClose: () => void;
  textProps?: TextProps;
  textStyles?: StyleProp<TextStyle>;
} & ViewProps;

const Notification: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    isOpen,
    // onClose,
    style,
    textProps,
    textStyles,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color }, theme);
  const text = [styles.text, textStyles];
  const view = [styles.view, style];

  if (!isOpen) {
    return null;
  }

  return (
    <View style={view} {...rest}>
      <Text style={text} {...textProps}>
        {children}
      </Text>
    </View>
  );
};

export default Notification;
