import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

const getAspectRatio = (aspectRatio: Nullable<AspectRatio>) => {
  switch (aspectRatio) {
    case 'is1by1':
    case 'isSquare':
      return {
        aspectRatio: 1,
      };
    case 'is5by4':
      return {
        aspectRatio: 5 / 4,
      };
    case 'is4by3':
      return {
        aspectRatio: 4 / 3,
      };
    case 'is3by2':
      return {
        aspectRatio: 3 / 2,
      };
    case 'is5by3':
      return {
        aspectRatio: 5 / 3,
      };
    case 'is16by9':
      return {
        aspectRatio: 16 / 9,
      };
    case 'is2by1':
      return {
        aspectRatio: 2,
      };
    case 'is3by1':
      return {
        aspectRatio: 3,
      };
    case 'is4by5':
      return {
        aspectRatio: 4 / 5,
      };
    case 'is3by4':
      return {
        aspectRatio: 3 / 4,
      };
    case 'is2by3':
      return {
        aspectRatio: 2 / 3,
      };
    case 'is3by5':
      return {
        aspectRatio: 3 / 5,
      };
    case 'is9by16':
      return {
        aspectRatio: 9 / 16,
      };
    case 'is1by2':
      return {
        aspectRatio: 1 / 2,
      };
    case 'is1by3':
      return {
        aspectRatio: 1 / 3,
      };
    default:
      return {
        flex: 1,
      };
  }
};

const createStyles = (
  {
    aspectRatio,
    rounded,
  }: { aspectRatio: Nullable<AspectRatio>; rounded: boolean },
  theme: Theme,
) => {
  return StyleSheet.create({
    image: {
      ...getAspectRatio(aspectRatio),
      borderRadius: rounded ? theme.radiusRounded : 0,
      width: '100%',
      resizeMode: 'cover',
    },
  });
};

export default createStyles;
