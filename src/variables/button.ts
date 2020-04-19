import { baseSize } from './base';
import { control, textColors, generalColors } from './derived';

export const button = {
  buttonColor: textColors.textStrong,
  buttonBackgroundColor: generalColors.schemeMain,
  buttonFamily: false,

  buttonBorderColor: generalColors.border,
  buttonBorderWidth: control.controlBorderWidth,

  buttonPaddingVertical: 0.5 * baseSize,
  buttonPaddingHorizontal: baseSize,

  buttonDisabledBackgroundColor: generalColors.schemeMain,
  buttonDisabledBorderColor: generalColors.border,
  buttonDisabledShadow: 'none',
  buttonDisabledOpacity: 0.5,

  buttonStaticColor: textColors.textLight,
  buttonStaticBackgroundColor: generalColors.schemeMainTer,
  buttonStaticBorderColor: generalColors.border,
};
