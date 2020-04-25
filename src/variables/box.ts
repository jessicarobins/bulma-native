import chroma from 'chroma-js';
import { baseSize, misc } from './base';
import { textColors, generalColors } from './derived';

export const box = {
  boxColor: textColors.text,
  boxBackgroundColor: generalColors.schemeMain,
  boxRadius: misc.radiusLarge,
  boxPadding: 1.25 * baseSize,

  shadowColor: chroma(generalColors.schemeInvert).alpha(0.1).hex(),
  shadowOffset: { width: 0, height: 0.5 * baseSize },
  shadowOpacity: 0.125 * baseSize,
  shadowRadius: 0.25 * baseSize,
};
