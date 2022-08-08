import { styled } from "styles/stitches.config";

export const Heading = styled("span", {
  margin: "$0",
  color: "$text",

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
      // heading1
      1: {
        fontSize: "$10",
        fontFamily: "$display",
        letterSpacing: "$4",
        lineHeight: "$100",

        "@sm": {
          fontSize: "$11",
          letterSpacing: "$3",
        },

        "@md": {
          fontSize: "$12",
        },
      },

      // heading2
      2: {
        fontSize: "$9",
        fontFamily: "$display",
        letterSpacing: "$3",
        lineHeight: "$100",

        "@sm": {
          fontSize: "$10",
        },

        "@md": {
          fontSize: "$11",
        },
      },

      // heading3
      3: {
        fontFamily: "$display",
        fontSize: "$8",
        letterSpacing: "$3",
        lineHeight: "$110",

        "@sm": {
          fontSize: "$9",
        },

        "@md": {
          fontSize: "$10",
          lineHeight: "$100",
          letterSpacing: "$3",
        },
      },

      // heading4
      4: {
        fontFamily: "$display",
        fontSize: "$7",
        lineHeight: "$120",
        letterSpacing: "$2",

        "@sm": {
          fontSize: "$8",
          lineHeight: "$120",
        },

        "@md": {
          fontSize: "$9",
          lineHeight: "$100",
        },
      },

      // heading5
      5: {
        fontSize: "$6",
        lineHeight: "$110",
        letterSpacing: "$2",

        "@sm": {
          fontSize: "$7",
        },

        "@md": {
          fontFamily: "$display",
          fontSize: "$8",
        },
      },

      // heading6
      6: {
        fontSize: "$6",
        lineHeight: "$120",
        letterSpacing: "$3",

        "@sm": {
          fontSize: "$7",
        },
      },
    },
  },

  // default
  defaultVariants: {
    size: 3,
    fontWeight: "medium",
  },
});
