import { Theme } from './ThemeProvider';

export const getColor = (
  color: Nullable<Color>,
  theme: Theme,
  fallback?: string,
) => {
  if (!color) {
    return fallback;
  }

  return theme.colors[color] || theme.colors[color] || fallback;
};

export const getInvertColor = (color: Nullable<Color>, theme: Theme) => {
  if (!color) {
    return null;
  }

  return theme.invertColors[color] || null;
};
