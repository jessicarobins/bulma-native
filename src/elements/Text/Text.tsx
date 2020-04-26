import React, { FC, useContext } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import createStyles from './styles';
import { ThemeContext } from '../../theme';

export interface OwnProps {
  alignment?: TextAlignment;
  children: React.ReactNode;
  color?: Color;
  size?: TextSize;
  transform?: TextTransform;
  weight?: TextWeight;
}

export type Props = OwnProps & RNTextProps;

const Text: FC<Props> = (props: Props) => {
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
