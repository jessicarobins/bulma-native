import React, { FC, useContext } from 'react';
import { ViewProps, View, Text } from 'react-native';
import createStyles from './styles';
import { ThemeContext } from '../../theme';
import { Delete } from '../../elements';

type Props = {
  children: React.ReactNode;
  color?: BasicColor;
  header?: React.ReactNode | string;
  isOpen: boolean;
  onClose?: (event: React.BaseSyntheticEvent) => void;
  size?: Size;
} & ViewProps;

const Message: FC<Props> = (props: Props) => {
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
