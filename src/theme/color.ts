import { colors as baseColors } from '../variables/base';
import { colors as derivedColors, invertColors } from '../variables/derived';

export const getColor = (color: Nullable<Color>) => {
  if (!color) {
    return;
  }

  if (derivedColors[color]) {
    return derivedColors[color];
  }

  if (baseColors[color]) {
    return baseColors[color];
  }
};

export const getInvertColor = (color: Nullable<Color>) => {
  if (!color) {
    return;
  }

  if (invertColors[color]) {
    return invertColors[color];
  }
};
