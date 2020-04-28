import chroma from 'chroma-js';
import { Theme } from './ThemeProvider';
import { lighten, darken } from '../utils/color';

export const getColor = (
  color: Nullable<Color>,
  theme: Theme,
  fallback?: string,
) => {
  if (!color) {
    return fallback;
  }

  return theme.colors[color] || fallback;
};

export const getInvertColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.invertColors[color] || null;
};

export const getLightColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  if (theme.colors[`${color}Light`]) {
    return theme.colors[`${color}Light`];
  }

  const colorValue = theme.colors[color];

  if (!colorValue) {
    return null;
  }

  const chromaColor = chroma(colorValue);
  const colorLightning = Math.max(0.98 - chromaColor.get('hsl.l'), 0);
  return lighten(chromaColor, colorLightning).hex();
};

export const getDarkColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  if (theme.invertColors[`${color}Light`]) {
    return theme.invertColors[`${color}Light`];
  }

  const colorValue = theme.colors[color];

  if (!colorValue) {
    return null;
  }

  const chromaColor = chroma(colorValue);
  const colorLuminance = chromaColor.luminance();
  const darkenPercentage = colorLuminance * 0.7;
  const desaturatePercentage = colorLuminance * 0.3;
  const colorDark = darken(chromaColor, darkenPercentage).set(
    'hsl.s',
    desaturatePercentage,
  );
  return colorDark.hex();
};
