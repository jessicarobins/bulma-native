import React, { FC, useContext } from 'react';
import { ViewProps, View, Text } from 'react-native';
import createStyles from './Message.styles';
import { ThemeContext } from '../../theme';
import { Delete } from '../../elements';

export type Props = {
  /** Content to display inside the Message */
  children: React.ReactNode;

  /** Corresponds to Bulma Color variables */
  color?: BasicColor;

  /** Content to display inside message header */
  header?: React.ReactNode | string;

  /** Whether to display the message (to be controlled by an external component, and toggled via the onClose prop) */
  isOpen: boolean;

  /** Optional callback on tap of the Delete button  */
  onClose?: (event: React.BaseSyntheticEvent) => void;

  /**
   * Corresponds to Bulma Size variables
   * @default normal
   * */
  size?: Size;
} & ViewProps;

/** Based on the [Bulma Message Component](https://bulma.io/documentation/components/message/) */
export const Message: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    header,
    isOpen,
    onClose,
    size = 'normal',
    style,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, size }, theme);

  if (!isOpen) {
    return null;
  }

  return (
    <View style={[styles.message, style]} {...rest}>
      {header && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
          {onClose && <Delete onPress={onClose} />}
        </View>
      )}
      <View style={[styles.body, header ? styles.bodyWithHeader : {}]}>
        <Text style={styles.bodyText}>{children}</Text>
      </View>
    </View>
  );
};

export default Message;
