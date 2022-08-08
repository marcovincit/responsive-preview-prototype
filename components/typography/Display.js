import { styled } from "styles/stitches.config";

export const Display = styled("span", {
  fontFamily: "$display",

  letterSpacing: "$4",
  color: "$foreground100",
  margin: "$0",

  variants: {
    // fontWeight
    fontWeight: {
      light: { fontWeight: "$light" },
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
    },

    // lineHeight
    lineHeight: {
      100: { lineHeight: "$100" },
      120: { lineHeight: "$100" },
      140: { lineHeight: "$140" },
      160: { lineHeight: "$160" },
    },

    // size
    size: {
      // display1
      1: {
        fontSize: "$13",

        "@sm": {
          fontSize: "$14",
        },
        "@md": {
          fontSize: "$15",
        },
      },

      // display2
      2: {
        fontSize: "$12",

        "@sm": {
          fontSize: "$13",
        },
        "@md": {
          fontSize: "$14",
        },
      },

      // display3
      3: {
        fontSize: "$11",
        "@sm": {
          fontSize: "$12",
        },
        "@md": {
          fontSize: "$13",
        },
      },
    },
  },

  // default
  defaultVariants: {
    size: 3,
    fontWeight: "medium",
    lineHeight: 100,
  },
});
