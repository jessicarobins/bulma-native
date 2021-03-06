export const ASPECT_RATIOS = [
  'isSquare',
  'is1by1',
  'is5by4',
  'is4by3',
  'is3by2',
  'is5by3',
  'is16by9',
  'is2by1',
  'is3by1',
  'is4by5',
  'is3by4',
  'is2by3',
  'is3by5',
  'is9by16',
  'is1by2',
  'is1by3',
] as const;

export const BASIC_COLORS = [
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'light',
  'dark',
  'black',
] as const;

export const BUTTON_VARIANTS = [
  'solid',
  'outline',
  'inverted',
  'invertedOutline',
] as const;

export const COLORS = [
  ...BASIC_COLORS,
  'primaryLight',
  'linkLight',
  'infoLight',
  'successLight',
  'warningLight',
  'dangerLight',
] as const;
export const SIZES = ['small', 'normal', 'medium', 'large'] as const;

export const TEXT_ALIGNMENTS = ['center', 'left', 'right'] as const;
export const TEXT_SIZES = [
  ...SIZES,
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
] as const;
export const TEXT_TRANSFORMS = [
  'capitalize',
  'lowercase',
  'uppercase',
] as const;
export const TEXT_WEIGHTS = [
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
] as const;
