import { colorPalette } from "./colorPalette";

export const colorsLight = {
  // neutral
  neutral800: colorPalette.neutral.gray[100],
  neutral700: colorPalette.neutral.gray[200],
  neutral600: colorPalette.neutral.gray[300],
  neutral500: colorPalette.neutral.gray[400],
  neutral400: colorPalette.neutral.gray[500],
  neutral300: colorPalette.neutral.gray[600],
  neutral200: colorPalette.neutral.gray[700],
  neutral100: colorPalette.neutral.gray[800],

  // foreground
  foreground800: colorPalette.neutral.black[100],
  foreground700: colorPalette.neutral.black[200],
  foreground600: colorPalette.neutral.black[300],
  foreground500: colorPalette.neutral.black[400],
  foreground400: colorPalette.neutral.black[500],
  foreground300: colorPalette.neutral.black[600],
  foreground200: colorPalette.neutral.black[700],
  foreground100: colorPalette.neutral.black[800],

  // default
  background: "$neutral800",
  text: "$foreground300",
};
