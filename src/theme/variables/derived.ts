import {
  colors as baseColors,
  misc as baseMisc,
  typography as baseTypography,
  baseSize,
} from './base';
import {
  findColorInvert,
  findLightColor,
  findDarkColor,
} from '../../utils/color';

export const colors = {
  primary: baseColors.turquoise,

  info: baseColors.cyan,
  success: baseColors.green,
  warning: baseColors.yellow,
  danger: baseColors.red,

  light: baseColors.whiteTer,
  dark: baseColors.greyDarker,

  link: baseColors.blue,

  get primaryLight() {
    return findLightColor(this.primary);
  },
  get infoLight() {
    return findLightColor(this.info);
  },
  get successLight() {
    return findLightColor(this.success);
  },
  get warningLight() {
    return findLightColor(this.warning);
  },
  get dangerLight() {
    return findLightColor(this.danger);
  },
  get linkLight() {
    return findLightColor(this.link);
  },
} as any;

export const invertColors = {
  black: baseColors.white,
  white: baseColors.black,

  orange: findColorInvert(baseColors.orange),
  yellow: findColorInvert(baseColors.yellow),
  green: findColorInvert(baseColors.green),
  turquoise: findColorInvert(baseColors.turquoise),
  cyan: findColorInvert(baseColors.cyan),
  blue: findColorInvert(baseColors.blue),
  purple: findColorInvert(baseColors.purple),
  red: findColorInvert(baseColors.red),

  primary: findColorInvert(colors.primary),
  info: findColorInvert(colors.info),
  success: findColorInvert(colors.success),
  warning: findColorInvert(colors.warning),
  danger: findColorInvert(colors.danger),
  light: findColorInvert(colors.light),
  dark: findColorInvert(colors.dark),
  link: findColorInvert(colors.link),

  get primaryLight() {
    return findDarkColor(colors.primary);
  },
  get infoLight() {
    return findDarkColor(colors.info);
  },
  get successLight() {
    return findDarkColor(colors.success);
  },
  get warningLight() {
    return findDarkColor(colors.warning);
  },
  get dangerLight() {
    return findDarkColor(colors.danger);
  },
  get linkLight() {
    return findDarkColor(colors.link);
  },
} as any;

export const control = {
  controlRadius: baseMisc.radius,
  controlRadiusSmall: baseMisc.radiusSmall,

  controlBorderWidth: 1,

  controlHeight: 2.5 * baseSize,
  controlLineHeight: 1.5,

  controlPaddingVertical: 0.5 * baseSize,
  controlPaddingHorizontal: 0.75 * baseSize,
};

export const generalColors = {
  schemeMain: baseColors.white,
  schemeMainBis: baseColors.whiteBis,
  schemeMainTer: baseColors.whiteTer,
  schemeInvert: baseColors.black,
  schemeInvertBis: baseColors.blackBis,
  schemeInvertTer: baseColors.blackTer,

  background: baseColors.whiteTer,

  border: baseColors.greyLighter,
  borderLight: baseColors.greyLightest,
};

export const textColors = {
  text: baseColors.greyDark,
  get textInvert() {
    return findColorInvert(this.text);
  },
  textLight: baseColors.grey,
  textStrong: baseColors.greyDarker,
};

export const codeColors = {
  code: baseColors.red,
  codeBackground: generalColors.background,

  pre: textColors.text,
  preBackground: generalColors.background,
};

export const typography = {
  size1: baseTypography.baseFontSize * 3,
  size2: baseTypography.baseFontSize * 2.5,
  size3: baseTypography.baseFontSize * 2,
  size4: baseTypography.baseFontSize * 1.5,
  size5: baseTypography.baseFontSize * 1.25,
  size6: baseTypography.baseFontSize * 1,
  size7: baseTypography.baseFontSize * 0.75,

  get sizeSmall() {
    return this.size7;
  },
  get sizeNormal() {
    return this.size6;
  },
  get sizeMedium() {
    return this.size5;
  },
  get sizeLarge() {
    return this.size4;
  },
};
