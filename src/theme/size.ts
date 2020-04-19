import { typography } from '../variables/derived';

export const getTextSize = (size: Size) => {
  switch (size) {
    case 'small':
      return typography.sizeSmall;
    case 'medium':
      return typography.sizeMedium;
    case 'large':
      return typography.sizeLarge;
    default:
      return typography.sizeNormal;
  }
};
