import React, { FC, useContext } from 'react';
import { View, ViewProps, StyleProp, ViewStyle, Animated } from 'react-native';

import { ThemeContext } from '../../theme';
import createStyles from './styles';

interface OwnProps {
  color?: Color;
  progressValueStyle?: StyleProp<ViewStyle>;
  max?: number;
  size?: Size;
  value?: number;
}

export type ProgressProps = OwnProps & ViewProps;

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
