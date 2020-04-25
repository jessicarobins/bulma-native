import { Theme } from './ThemeProvider';

export const getColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.derived.colors[color] || theme.base.colors[color] || null;
};

export const getInvertColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.derived.invertColors[color] || null;
};
