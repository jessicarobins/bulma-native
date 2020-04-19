type ButtonVariant = 'solid' | 'outline' | 'inverted' | 'invertedOutline';

type Color =
  | 'primary'
  | 'primaryLight'
  | 'link'
  | 'linkLight'
  | 'info'
  | 'infoLight'
  | 'success'
  | 'successLight'
  | 'warning'
  | 'warningLight'
  | 'danger'
  | 'dangerLight'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text';
type Nullable<T> = T | undefined | null;
type Size = 'small' | 'normal' | 'medium' | 'large';
type StyleMap = { [key: string]: string };
