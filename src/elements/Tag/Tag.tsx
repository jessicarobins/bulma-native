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
import Delete from '../Delete';

type Props = {
  children: React.ReactNode;
  color?: Color;
  onDelete?: (event: React.BaseSyntheticEvent) => void;
  rounded?: boolean;
  size?: Size;
  textProps?: TextProps;
  textStyles?: StyleProp<TextStyle>;
} & ViewProps;

const Tag: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    onDelete,
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
      {onDelete && <Delete onPress={onDelete} style={styles.deleteContainer} />}
    </View>
  );
};

export default Tag;
