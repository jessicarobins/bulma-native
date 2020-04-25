import { colors as baseColors } from '../variables/base';
import { colors as derivedColors, invertColors } from '../variables/derived';

export const getColor = (color: Nullable<Color>) => {
  if (!color) {
    return null;
  }

  return derivedColors[color] || baseColors[color] || null;
};

export const getInvertColor = (color: Nullable<Color>) => {
  if (!color) {
    return null;
  }

  return invertColors[color] || null;
};
