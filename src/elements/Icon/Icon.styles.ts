import { StyleSheet } from 'react-native';

import { Theme } from '../../theme';
import { getColor } from '../../theme/color';
import { getIconSize } from '../../theme/size';

const createStyles = (
  props: { color: Nullable<Color>; size: IconSize },
  theme: Theme,
) => {
  const color = getColor(props.color, theme);
  const size = getIconSize(props.size, theme);

  return StyleSheet.create({
    icon: {
      color,
      fontSize: size,
      height: size,
      margin: 0,
      padding: 0,
      width: size,
    },
  });
};

export default createStyles;
