import React, { FC, useContext } from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import { ThemeContext } from '../../theme';
import Text, { Props as TextProps } from '../Text';
import createStyles from './Title.styles';

export interface OwnProps {
  subtitle?: string;
  subtitleProps?: Omit<TextProps, 'children'>;
  subtitleStyle?: StyleProp<TextStyle>;
  title?: string;
  titleProps?: Omit<TextProps, 'children'>;
  titleStyle?: StyleProp<TextStyle>;
}

export type Props = OwnProps;

const Title: FC<Props> = (props: Props) => {
  const {
    subtitle,
    subtitleProps,
    subtitleStyle,
    title,
    titleProps,
    titleStyle,
  } = props;
  const theme = useContext(ThemeContext);
  const titleSize = titleProps?.size ?? '3';
  const subtitleSize = subtitleProps?.size ?? '5';

  const styles = createStyles({ subtitleSize, titleSize }, theme);

  const finalTitleStyle = [
    styles.title,
    !!subtitle && styles.titleWithSubtitle,
    titleStyle,
  ];
  const finalSubtitleStyle = [
    styles.subtitle,
    !!title && styles.subtitleWithTitle,
    subtitleStyle,
  ];

  return (
    <View>
      {title && (
        <Text
          style={finalTitleStyle}
          {...titleProps}
          color={titleProps?.color ?? 'dark'}
          size={titleSize}
          weight={titleProps?.weight ?? 'semibold'}
        >
          {title}
        </Text>
      )}

      {subtitle && (
        <Text
          style={finalSubtitleStyle}
          {...subtitleProps}
          size={subtitleSize}
          weight={subtitleProps?.weight ?? 'normal'}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default Title;
