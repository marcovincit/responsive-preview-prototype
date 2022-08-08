import { styled } from "styles/stitches.config";

export const Body = styled("span", {
  letterSpacing: "$1",
  margin: "$0",
  color: "$text",

  // variants
  variants: {
    // fontWeight
    fontWeight: {
      light: { fontWeight: "$light" },
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
      bold: { fontWeight: "$bold" },
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
      // body1
      1: {
        fontSize: "$5",
        "@md": {
          fontSize: "$6",
        },
      },

      // body2
      2: {
        fontSize: "$5",
      },

      // body3
      3: {
        fontSize: "$4",
      },

      // body4
      4: {
        fontSize: "$3",
      },

      // body5
      5: {
        fontSize: "$2",
      },

      // body6
      6: {
        fontSize: "$1",
      },
    },
  },

  // defaultVariants
  defaultVariants: {
    size: 2,
    fontWeight: "regular",
    lineHeight: 140,
  },
});
