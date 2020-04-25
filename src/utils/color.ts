import chroma from 'chroma-js';
import { colors as baseColors } from '../theme/variables/base';

export const findColorInvert = (color: string) => {
  if (chroma(color).luminance() > 0.55) {
    return 'rgba(0, 0, 0, 0.7)';
  }

  return '#fff';
};

export const findLightColor = (color: string) => {
  try {
    const chromaColor = chroma(color);
    const lightness = Math.max(chromaColor.get('hsl.l'), 0.96);
    const newColor = chromaColor.set('hsl.l', lightness).hex();
    return newColor;
  } catch (err) {
    return baseColors.whiteTer;
  }
};

export const findDarkColor = (color: string) => {
  try {
    const chromaColor = chroma(color);
    const base = 0.29;
    const luminance = chromaColor.luminance();
    const delta = 0.53 - luminance;
    const target = base + delta * 0.53;
    const newColor = chromaColor.set('hsl.l', Math.max(base, target)).hex();
    return newColor;
  } catch (err) {
    return baseColors.greyDarker;
  }
};
