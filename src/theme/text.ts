import { TextStyle } from 'react-native';
import { Theme } from './ThemeProvider';

export const getTextSize = (
  size: TextSize,
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
    case '1':
      return theme.size1;
    case '2':
      return theme.size2;
    case '3':
      return theme.size3;
    case '4':
      return theme.size4;
    case '5':
      return theme.size5;
    case '6':
      return theme.size6;
    case '7':
      return theme.size7;
    default:
      return fallback;
  }
};

export const getTextWeight = (
  weight: TextWeight,
  theme: Theme,
  fallback: TextStyle['fontWeight'] = theme.weightNormal,
): TextStyle['fontWeight'] => {
  switch (weight) {
    case 'light':
      return theme.weightLight;
    case 'medium':
      return theme.weightMedium;
    case 'semibold':
      return theme.weightSemibold;
    case 'bold':
      return theme.weightBold;
    case 'normal':
    default:
      return fallback;
  }
};
