import { createStitches, createTheme } from "@stitches/react";
import { colorsLight } from "./stitches/colorsLight";

import {
  media,
  colors,
  sizes,
  space,
  fontSizes,
  fonts,
  fontWeights,
  letterSpacings,
  radii,
  lineHeights,
  utils,
} from "./stitches";

export const { getCssText, globalCss, styled, css } = createStitches({
  media,
  theme: {
    colors,
    sizes,
    space,
    fontSizes,
    fonts,
    fontWeights,
    letterSpacings,
    radii,
    lineHeights,
  },
  utils,
});

export const lightTheme = createTheme({
  colors: colorsLight,
});
