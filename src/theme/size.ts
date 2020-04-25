import { typography } from './variables/derived';

export const getTextSize = (
  size: Size,
  fallback: number = typography.sizeNormal,
) => {
  switch (size) {
    case 'small':
      return typography.sizeSmall;
    case 'medium':
      return typography.sizeMedium;
    case 'large':
      return typography.sizeLarge;
    default:
      return fallback;
  }
};
