import { styled } from "styles/stitches.config";

export const ButtonCircleStyled = styled("div", {
  position: "relative",
  lineHeight: "$100",
  letterSpacing: "$0",

  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  borderWidth: "0",
  borderRadius: "$rounded",
  backgroundColor: "transparent",
  transition: "color 300ms",

  cursor: "pointer",

  "&::before": {
    content: "",
    display: "block",
    borderRadius: "$rounded",
    size: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,

    transition: "background-color 300ms,  color 300ms, opacity 300ms",
  },

  "> *": {
    zIndex: 2,
  },

  // variants
  variants: {
    solid: {
      // solid
      true: {
        "&::before": {
          opacity: "1!important",
        },
      },
    },

    // color
    color: {
      // default
      default: {
        color: "$foreground800",

        "&::before": {
          backgroundColor: "$neutral400",
        },

        "&:hover::before": {
          backgroundColor: "$neutral100",
        },
        "&:hover::focus": {
          backgroundColor: "$neutral800",
        },
      },

      // lime
      lime: {
        color: "$neutral500",

        "&::before": {
          backgroundColor: "$lime600",
        },
        "&:hover::before": {
          backgroundColor: "$lime500",
        },
      },

      //   purple
      purple: {
        color: "$neutral500",

        "&::before": {
          backgroundColor: "$purple600",
        },
        "&:hover::before": {
          backgroundColor: "$purple500",
        },
      },
    },

    // size
    size: {
      small: {
        size: "$space$5",
        fontSize: "$4",
        svg: {
          size: "$space$3",
        },
      },
      medium: {
        size: "$space$7",
        fontSize: "$6",
        svg: {
          size: "$space$5",
        },
      },
      large: {
        size: "$space$8",
        fontSize: "$7",
        svg: {
          size: "$space$5",
        },

        "@md": {
          size: "$space$9",
          fontSize: "$8",
          svg: {
            size: "$space$6",
          },
        },
      },
    },

    //   disabled
    disabled: {
      true: {
        opacity: 0.25,
        pointerEvents: "none",
      },
    },
    //   text
    text: {
      true: {
        color: "$foreground800",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$foreground600",
          backgroundColor: "$neutral600",
        },
      },
    },

    // customColor

    customColor: {
      true: {
        opacity: 1,
      },
    },
  },

  compoundVariants: [
    //   text
    {
      color: "lime",
      text: true,
      css: {
        color: "$lime500",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$lime500",
          backgroundColor: "$neutral600",
        },
      },
    },
    {
      color: "purple",
      text: true,
      css: {
        color: "$purple400",
        backgroundColor: "transparent",
        "&:hover": {
          color: "$purple400",
          backgroundColor: "$neutral600",
        },
      },
    },
  ],

  defaultVariants: {
    color: "default",
    size: "medium",
  },
});
