import React, { FC, useContext } from 'react';
import { View, ViewProps, StyleProp, ViewStyle, Animated } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './Progress.styles';

interface OwnProps {
  /** Bulma Color variable */
  color?: Color;

  /** Styles to pass to the inner `Animated.View` */
  progressValueStyle?: StyleProp<ViewStyle>;

  /** Used to calculate the percent filled
   * @default 100
   */
  max?: number;

  /** Bulma Size variable
   * @default normal
   */
  size?: Size;

  /** Used to calculate the perfect filled. If not provided, the Progress bar
   * will render as indeterminate (animated)
   */
  value?: number;
}

export type ProgressProps = OwnProps & ViewProps;

/**
 * Wraps `ActivityIndicator` to provide styles from the
 * [Bulma Progress Bar element](https://bulma.io/documentation/elements/progress/)
 * */
const Progress: FC<ProgressProps> = (props: ProgressProps) => {
  const {
    color,
    max = 100,
    progressValueStyle = {},
    size = 'normal',
    style = {},
    value,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const styles = createStyles({ color, size }, theme);

  const valueMargin = new Animated.Value(0);

  if (!value) {
    Animated.loop(
      Animated.timing(valueMargin, {
        toValue: 1,
        duration: theme.progressIndeterminateDuration * 1000,
      }),
    ).start();
  }

  const valueStyle = {
    marginLeft: value
      ? 0
      : valueMargin.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        }),
    width: value ? `${(value / max) * 100}%` : '30%',
  };

  return (
    <View style={[styles.progress, style]} {...rest}>
      <Animated.View
        style={[styles.progressValue, valueStyle, progressValueStyle]}
      />
    </View>
  );
};

export default Progress;
