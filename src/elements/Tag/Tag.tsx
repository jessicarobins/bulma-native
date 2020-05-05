import React, { FC, useContext } from 'react';
import { ViewProps, View, Text, TextProps } from 'react-native';
import createStyles from './Tag.styles';
import { ThemeContext } from '../../theme';
import Delete from '../Delete';

type Props = {
  children: React.ReactNode;

  /** Bulma Color variable */
  color?: Color;

  /** If provided, will render a Delete icon button, which will call this callback
   * on press
   */
  onDelete?: (event: React.BaseSyntheticEvent) => void;

  /** @default false */
  rounded?: boolean;

  /** Bulma Size variable
   * @default normal
   */
  size?: Size;

  /** Props to pass to the inner `Text` component */
  textProps?: TextProps;
} & ViewProps;

/** Stand-in for the [Bulma Tag element](https://bulma.io/documentation/elements/tag/) */
const Tag: FC<Props> = (props: Props) => {
  const {
    children,
    color,
    onDelete,
    rounded = false,
    size = 'normal',
    style,
    textProps: { style: textStyles, ...restText } = {},
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, rounded, size }, theme);
  const text = [styles.text, textStyles];
  const view = [styles.view, style];

  return (
    <View style={view} {...rest}>
      <Text style={text} {...restText}>
        {children}
      </Text>
      {onDelete && <Delete onPress={onDelete} style={styles.deleteContainer} />}
    </View>
  );
};

export default Tag;
