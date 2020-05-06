import React, { FC, useContext } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import createStyles from './Text.styles';
import { ThemeContext } from '../../theme';

export interface OwnProps {
  /** @default left */
  alignment?: TextAlignment;
  children: React.ReactNode;

  /** Bulma Color variable */
  color?: Color;

  /** Bulma Size variable
   * @default normal
   */
  size?: TextSize;
  transform?: TextTransform;

  /** @default normal */
  weight?: TextWeight;
}

export type TextProps = OwnProps & RNTextProps;

/** Wraps `Text` to add Bulma [typography helpers](https://bulma.io/documentation/modifiers/typography-helpers/)
 * and default text styling
 */
const Text: FC<TextProps> = (props: TextProps) => {
  const {
    alignment = 'left',
    children,
    color,
    size = 'normal',
    style,
    transform,
    weight = 'normal',
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles(
    { alignment, color, size, transform, weight },
    theme,
  );
  const text = [styles.text, style];

  return (
    <RNText style={text} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
