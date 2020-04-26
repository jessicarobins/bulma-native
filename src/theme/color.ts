import { Theme } from './ThemeProvider';

export const getColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.colors[color] || theme.colors[color] || null;
};

export const getInvertColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.invertColors[color] || null;
};
