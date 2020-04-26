import chroma from 'chroma-js';
import { TextStyle } from 'react-native';
import { findLightColor, findColorInvert, findDarkColor } from '../utils/color';

const variables = {
  baseSize: 16,

  colors: {
    black: 'hsl(0, 0%, 4%)',
    blackBis: 'hsl(0, 0%, 7%)',
    blackTer: 'hsl(0, 0%, 14%)',

    greyDarker: 'hsl(0, 0%, 21%)',
    greyDark: 'hsl(0, 0%, 29%)',
    grey: 'hsl(0, 0%, 48%)',
    greyLight: 'hsl(0, 0%, 71%)',
    greyLighter: 'hsl(0, 0%, 86%)',
    greyLightest: 'hsl(0, 0%, 93%)',

    whiteTer: 'hsl(0, 0%, 96%)',
    whiteBis: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)',

    orange: 'hsl(14,  100%, 53%)',
    yellow: 'hsl(48,  100%, 67%)',
    green: 'hsl(141, 53%,  53%)',
    turquoise: 'hsl(171, 100%, 41%)',
    cyan: 'hsl(204, 71%,  53%)',
    blue: 'hsl(217, 71%,  53%)',
    purple: 'hsl(271, 100%, 71%)',
    red: 'hsl(348, 86%, 61%)',

    get primary() {
      return this.turquoise;
    },
    get info() {
      return this.cyan;
    },
    get success() {
      return this.green;
    },
    get warning() {
      return this.yellow;
    },
    get danger() {
      return this.red;
    },

    get light() {
      return this.whiteTer;
    },
    get dark() {
      return this.greyDarker;
    },

    get link() {
      return this.blue;
    },

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
  } as StyleMap,

  get invertColors(): StyleMap {
    return {
      black: this.colors.white,
      white: this.colors.black,

      orange: findColorInvert(this.colors.orange),
      yellow: findColorInvert(this.colors.yellow),
      green: findColorInvert(this.colors.green),
      turquoise: findColorInvert(this.colors.turquoise),
      cyan: findColorInvert(this.colors.cyan),
      blue: findColorInvert(this.colors.blue),
      purple: findColorInvert(this.colors.purple),
      red: findColorInvert(this.colors.red),

      primary: findColorInvert(this.colors.primary),
      info: findColorInvert(this.colors.info),
      success: findColorInvert(this.colors.success),
      warning: findColorInvert(this.colors.warning),
      danger: findColorInvert(this.colors.danger),
      light: findColorInvert(this.colors.light),
      dark: findColorInvert(this.colors.dark),
      link: findColorInvert(this.colors.link),

      get primaryLight() {
        return findDarkColor(this.primary);
      },
      get infoLight() {
        return findDarkColor(this.info);
      },
      get successLight() {
        return findDarkColor(this.success);
      },
      get warningLight() {
        return findDarkColor(this.warning);
      },
      get dangerLight() {
        return findDarkColor(this.danger);
      },
      get linkLight() {
        return findDarkColor(this.link);
      },
    };
  },

  // General colors
  get schemeMain() {
    return this.colors.white;
  },
  get schemeMainBis() {
    return this.colors.whiteBis;
  },
  get schemeMainTer() {
    return this.colors.whiteTer;
  },
  get schemeInvert() {
    return this.colors.black;
  },
  get schemeInvertBis() {
    return this.colors.blackBis;
  },
  get schemeInvertTer() {
    return this.colors.blackTer;
  },
  get background() {
    return this.colors.whiteTer;
  },
  get border() {
    return this.colors.greyLighter;
  },
  get borderLight() {
    return this.colors.greyLightest;
  },

  // Text colors
  get text() {
    return this.colors.greyDark;
  },
  get textInvert() {
    return findColorInvert(this.text);
  },
  get textLight() {
    return this.colors.grey;
  },
  get textStrong() {
    return this.colors.greyDarker;
  },

  // Code colors
  get code() {
    return this.colors.red;
  },
  get codeBackground() {
    return this.background;
  },
  get pre() {
    return this.text;
  },
  get preBackground() {
    return this.background;
  },

  // Typography
  get baseFontSize() {
    return this.baseSize;
  },
  weightLight: '300' as TextStyle['fontWeight'],
  weightNormal: '400' as TextStyle['fontWeight'],
  weightMedium: '500' as TextStyle['fontWeight'],
  weightSemibold: '600' as TextStyle['fontWeight'],
  weightBold: '700' as TextStyle['fontWeight'],
  get size1() {
    return this.baseFontSize * 3;
  },
  get size2() {
    return this.baseFontSize * 2.5;
  },
  get size3() {
    return this.baseFontSize * 2;
  },
  get size4() {
    return this.baseFontSize * 1.5;
  },
  get size5() {
    return this.baseFontSize * 1.25;
  },
  get size6() {
    return this.baseFontSize * 1;
  },
  get size7() {
    return this.baseFontSize * 0.75;
  },

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

  // Border radius
  radiusSmall: 2,
  radius: 4,
  radiusLarge: 6,
  radiusRounded: 290486,

  // Control
  get controlRadius() {
    return this.radius;
  },
  get controlRadiusSmall() {
    return this.radiusSmall;
  },
  controlBorderWidth: 1,
  get controlHeight() {
    return 2.5 * this.baseSize;
  },
  controlLineHeight: 1.5,
  get controlPaddingVertical() {
    return 0.5 * this.baseSize;
  },
  get controlPaddingHorizontal() {
    return 0.75 * this.baseSize;
  },

  /** ELEMENTS */
  // Box
  get boxColor() {
    return this.text;
  },
  get boxBackgroundColor() {
    return this.schemeMain;
  },
  get boxRadius() {
    return this.radiusLarge;
  },
  get boxPadding() {
    return 1.25 * this.baseSize;
  },
  get boxShadowColor() {
    return chroma(this.schemeInvert).alpha(0.1).hex();
  },
  get boxShadowOffset() {
    return { width: 0, height: 0.5 * this.baseSize };
  },
  get boxShadowOpacity() {
    return 0.125 * this.baseSize;
  },
  get boxShadowRadius() {
    return 0.25 * this.baseSize;
  },

  // Button
  get buttonColor() {
    return this.textStrong;
  },
  get buttonBackgroundColor() {
    return this.schemeMain;
  },
  buttonFamily: false,

  get buttonBorderColor() {
    return this.border;
  },
  get buttonBorderWidth() {
    return this.controlBorderWidth;
  },

  get buttonPaddingVertical() {
    return 0.5 * this.baseSize;
  },
  get buttonPaddingHorizontal() {
    return this.baseSize;
  },

  get buttonDisabledBackgroundColor() {
    return this.schemeMain;
  },
  get buttonDisabledBorderColor() {
    return this.border;
  },
  buttonDisabledShadow: 'none',
  buttonDisabledOpacity: 0.5,
  get buttonStaticColor() {
    return this.textLight;
  },
  get buttonStaticBackgroundColor() {
    return this.schemeMainTer;
  },
  get buttonStaticBorderColor() {
    return this.border;
  },

  // Notification
  get notificationBackgroundColor() {
    return this.background;
  },
  get notificationCodeBackgroundColor() {
    return this.schemeMain;
  },
  get notificationRadius() {
    return this.radius;
  },
  get notificationPaddingHorizontal() {
    return 1.5 * this.baseSize;
  },
  get notificationPaddingVertical() {
    return this.baseSize;
  },

  // Progress
  get progressBarBackgroundColor() {
    return this.borderLight;
  },
  get progressValueBackgroundColor() {
    return this.textLight;
  },
  get progressBorderRadius() {
    return this.radiusRounded;
  },
  progressIndeterminateDuration: 1.5,

  // Tag
  get tagBackgroundColor() {
    return this.background;
  },
  get tagColor() {
    return this.text;
  },
  get tagRadius() {
    return this.radius;
  },
  tagDeleteMargin: 1,

  // Title
  titleFamily: false,
  get titleLineHeightMultiplier() {
    return 1.125;
  },
  subtitleFamily: false,
  get subtitleLineheightMultiplier() {
    return 1.25;
  },
  get subtitleNegativeMargin() {
    return -1.25 * this.baseSize;
  },
};

export default variables;
