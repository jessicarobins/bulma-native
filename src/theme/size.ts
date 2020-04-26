import { Theme } from './ThemeProvider';

export const getTextSize = (
  size: Size,
  theme: Theme,
  fallback: number = theme.sizeNormal,
) => {
  switch (size) {
    case 'small':
      return theme.sizeSmall;
    case 'medium':
      return theme.sizeMedium;
    case 'large':
      return theme.sizeLarge;
    default:
      return fallback;
  }
};
