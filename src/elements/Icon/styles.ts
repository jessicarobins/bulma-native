import { Theme } from '../../theme';
import { getColor } from '../../theme/color';
import { getIconSize } from '../../theme/size';

const createStyles = (
  props: { color: Nullable<Color>; size: IconSize },
  theme: Theme,
) => {
  const color = getColor(props.color, theme);
  const size = getIconSize(props.size, theme);
  return { color, size };
};

export default createStyles;
