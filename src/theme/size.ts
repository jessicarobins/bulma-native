import { Theme } from './ThemeProvider';

export const getIconSize = (size: IconSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.iconDimensionsSmall;
    case 'medium':
      return theme.iconDimensionsMedium;
    case 'large':
      return theme.iconDimensionsLarge;
    default:
      return theme.iconDimensions;
  }
};

export const getSize = (
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
