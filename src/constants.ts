export const COLORS = [
  'primary',
  'primaryLight',
  'link',
  'linkLight',
  'info',
  'infoLight',
  'success',
  'successLight',
  'warning',
  'warningLight',
  'danger',
  'dangerLight',
  'white',
  'light',
  'dark',
  'black',
  'text',
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
