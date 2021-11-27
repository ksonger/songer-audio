export const baseColors = {
  white: "#fff",
  black: "#000",
  green: "#4DA00F",
  altGreen: "#4b8e10",
  darkGreen: "#3F850A",
  tan: "#B57A3A",
  brown: "#76451A",
  orange: "#F59420",
  altOrange: "#de7749",
  darkOrange: "#dd841e",
  darkAltOrange: "#bc6742",
  lightOrange: "#ffb99b",
  yellow: "#ffd357",
  blue: "#2F2E41",
  neutral05: "#F8F8F8",
  neutral10: "#f1f1f1",
  neutral15: "#efefef",
  neutral20: "#e5e5e5",
  neutral30: "#c5c5c5",
  neutral40: "#acadac",
  neutral50: "#707070",
  neutral90: "#323232",
  neutral100: "#000",
};

export const palette = {
  defaultColor: {
    value: baseColors.neutral90,
  },
  defaultBgColor: {
    value: baseColors.white,
  },
  accentPrimary: {
    value: baseColors.green,
  },
  accentPrimaryAlt: {
    value: baseColors.altGreen,
  },
  accentPrimaryDark: {
    value: baseColors.darkGreen,
  },
  accentSecondary: {
    value: baseColors.orange,
  },
  accentSecondaryAlt: {
    value: baseColors.altOrange,
  },
  accentSecondaryDark: {
    value: baseColors.darkOrange,
  },
  accentSecondaryDarkAlt: {
    value: baseColors.darkAltOrange,
  },
  accentSecondaryLight: {
    value: baseColors.lightOrange,
  },
  accentTertiary: {
    value: baseColors.yellow,
  },
  neutral05: {
    value: baseColors.neutral05,
  },
  neutral10: {
    value: baseColors.neutral10,
  },
  neutral15: {
    value: baseColors.neutral15,
  },
  neutral20: {
    value: baseColors.neutral20,
  },
  neutral30: {
    value: baseColors.neutral30,
  },
  neutral40: {
    value: baseColors.neutral40,
  },
  neutral50: {
    value: baseColors.neutral50,
  },
  neutral90: {
    value: baseColors.neutral90,
  },
  neutral100: {
    value: baseColors.neutral100,
  },
};

// Use fluidScale mixin to responsively scale type from mobile to desktop
export const fontSize = {
  base: {
    max: {
      value: 18,
      unit: "px",
    },
    min: {
      value: 16,
      unit: "px",
    },
  },
  baseLarge: {
    max: {
      value: 24,
      unit: "px",
    },
    min: {
      value: 20,
      unit: "px",
    },
  },
  hXLarge: {
    max: {
      value: 80,
      unit: "px",
    },
    min: {
      value: 30,
      unit: "px",
    },
  },
  hLarge: {
    max: {
      value: 64,
      unit: "px",
    },
    min: {
      value: 30,
      unit: "px",
    },
  },
  hMedium: {
    max: {
      value: 44,
      unit: "px",
    },
    min: {
      value: 20,
      unit: "px",
    },
  },
  hSmall: {
    max: {
      value: 38,
      unit: "px",
    },
    min: {
      value: 20,
      unit: "px",
    },
  },
  hXSmall: {
    max: {
      value: 22,
      unit: "px",
    },
    min: {
      value: 20,
      unit: "px",
    },
  },
};

export const fontFamily = {
  default: {
    value: "'Roboto', Tahoma, sans-serif",
  },
  header: {
    value: "'Roboto', Tahoma, sans-serif",
  },
};

export const fontWeight = {
  light: {
    value: 300,
  },
  regular: {
    value: 400,
  },
  medium: {
    value: 500,
  },
  bold: {
    value: 700,
  },
  black: {
    value: 900,
  },
};

export const lineHeight = {
  default: {
    value: 1.444,
  },
  hDefault: {
    value: 1.1,
  },
  hXLarge: {
    value: 1.1,
  },
  hLarge: {
    value: 1.125,
  },
  hMedium: {
    value: 1.182,
  },
  hSmall: {
    value: 1.158,
  },
  hXSmall: {
    value: 1.444,
  },
};

export const containerWidth = {
  max: {
    value: 1284,
    unit: "px",
  },
  wide: {
    value: 1088,
    unit: "px",
  },
  medium: {
    value: 994,
    unit: "px",
  },
  narrow: {
    value: 904,
    unit: "px",
  },
  min: {
    value: 689,
    unit: "px",
  },
};

export const containerPadding = {
  inline: {
    max: {
      value: 90,
      unit: "px",
    },
    min: {
      value: 18,
      unit: "px",
    },
  },
  blockStart: {
    max: {
      value: 78,
      unit: "px",
    },
    min: {
      value: 25,
      unit: "px",
    },
  },
  blockEnd: {
    max: {
      value: 66,
      unit: "px",
    },
    min: {
      value: 48,
      unit: "px",
    },
  },
};

export const containerBackgroundColor = {
  white: {
    value: "default",
  },
  lightGray: {
    value: "neutral05",
  },
  gray: {
    value: "neutral15",
  },
  black: {
    value: "neutral90",
  },
  green: {
    value: "accent-primary",
  },
  orange: {
    value: "accent-secondary",
  },
};

export const cardTextWrapperPadding = {
  max: {
    value: 30,
    unit: "px",
  },
  min: {
    value: 14,
    unit: "px",
  },
};

export const boxShadow = {
  default: {
    value: `0px 0px 10px rgb(0 0 0 / 6%)`,
  },
  header: {
    value: `0px 0px 10px rgb(0 0 0 / 17%)`,
  },
  foodFinder: {
    widget: {
      value: `0px 0px 10px rgb(0 0 0 / 10%)`,
    },
    form: {
      value: `0px 3px 10px rgb(0 0 0 / 10%)`,
    },
  },
  quizStep: {
    value: `0px 0px 10px rgb(0 0 0 / 35%)`,
  },
};

export const borderWidth = {
  default: {
    value: 3,
    unit: "px",
  },
  thin: {
    value: 2,
    unit: "px",
  },
};

export const aspectRatio = {
  calloutMobile: {
    x: {
      value: 1.61,
    },
    y: {
      value: 1,
    },
  },
};

export const breakpoint = {
  wide: {
    value: containerWidth.max.value + containerPadding.inline.max.value * 2,
    unit: "px",
  },
  narrow: {
    value: 400,
    unit: "px",
  },
  interiorHero: {
    value: 650,
    unit: "px",
  },
  foodFinderWidget: {
    value: 650,
    unit: "px",
  },
  callout: {
    value: 750,
    unit: "px",
  },
  hero: {
    value: 895,
    unit: "px",
  },
  header: {
    width: {
      value: 895,
      unit: "px",
    },
    height: {
      value: 500,
      unit: "px",
    },
  },
  quoteCallout: {
    value: 850,
    unit: "px",
  },
  iconCallout: {
    value: 600,
    unit: "px",
  },
  mobileSlider: {
    value: 540,
    unit: "px",
  },
  introText: {
    value: 600,
    unit: "px",
  },
  quiz: {
    value: 600,
    unit: "px",
  },
};

export const focusOutline = {
  width: {
    value: 2,
    unit: "px",
  },
  style: {
    value: "solid",
  },
  color: {
    value: "currentColor",
  },
};

export const transition = {
  duration: {
    value: 200,
    unit: "ms",
  },
  timing: {
    value: "linear",
  },
};

export const zStack = {
  dialog: {
    value: 30,
  },
  dialogBackdrop: {
    value: 25,
  },
  overlay: {
    value: 20,
  },
  skipToLink: {
    value: 15,
  },
  header: {
    value: 10,
  },
  insetCallout: {
    value: 5,
  },
};

export const offsetImageOffset = {
  max: {
    value: 45,
    unit: "px",
  },
  min: {
    value: 22,
    unit: "px",
  },
};
