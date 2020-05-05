import React, { FC, useContext } from 'react';
import { ViewProps, View, Text, TextProps } from 'react-native';
import createStyles from './Notification.styles';
import { ThemeContext } from '../../theme';
import Delete from '../Delete';

type Props = {
  children: React.ReactNode;

  /** Bulma Color variable */
  color?: Color;
  isOpen: boolean;

  /**
   * Callback which, if provided, will display the Delete component in the header and
   * call it on tap
   */
  onClose?: () => void;

  /** Props to pass down to the inner `Text` component */
  textProps?: TextProps;
} & ViewProps;

/** Stand-in for the [Bulma Notification element](https://bulma.io/documentation/elements/notification/) */
const Notification: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    isOpen,
    onClose,
    style,
    textProps: { style: textStyles, ...restText } = {},
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
      {onClose && <Delete onPress={onClose} style={styles.delete} />}
      <Text style={text} {...restText}>
        {children}
      </Text>
    </View>
  );
};

export default Notification;
