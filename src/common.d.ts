type AspectRatio =
  | 'isSquare'
  | 'is1by1'
  | 'is5by4'
  | 'is4by3'
  | 'is3by2'
  | 'is5by3'
  | 'is16by9'
  | 'is2by1'
  | 'is3by1'
  | 'is4by5'
  | 'is3by4'
  | 'is2by3'
  | 'is3by5'
  | 'is9by16'
  | 'is1by2'
  | 'is1by3';

type LightColor =
  | 'primaryLight'
  | 'linkLight'
  | 'infoLight'
  | 'successLight'
  | 'warningLight'
  | 'dangerLight';

type BasicColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'light'
  | 'dark'
  | 'black';

type Color = LightColor | BasicColor;

type Nullable<T> = T | undefined | null;
type Size = 'small' | 'normal' | 'medium' | 'large';
type StyleMap = { [key: string]: string };
