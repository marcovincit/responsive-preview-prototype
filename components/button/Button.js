import { styled } from "styles/stitches.config";

export const Button = styled("button", {
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$100",
  letterSpacing: "$0",

  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  borderWidth: "1px",
  borderStyle: "solid",

  transition: "background-color 300ms, border-color 300ms, color 300ms",

  // variants
  variants: {
    // color
    color: {
      // default
      default: {
        color: "$foreground800",
        background: "$neutral400",
        borderColor: "$neutral100",
        "&:hover": {
          color: "$foreground400",
          background: "$neutral200",
          borderColor: "$neutral100",
        },
        "&:active": {
          color: "$foreground700",
          background: "$neutral500",
          borderColor: "$neutral400",
        },
      },

      // lime
      lime: {
        color: "$neutral100",
        background: "$lime500",
        borderColor: "$lime500",
        "&:hover": {
          color: "$neutral100",
          background: "$lime300",
          borderColor: "$lime300",
        },
        "&:active": {
          color: "$neutral100",
          background: "$lime600",
          borderColor: "$lime600",
        },
      },

      //   purple
      purple: {
        color: "$foreground200",
        background: "$purple800",
        borderColor: "$purple800",
        "&:hover": {
          color: "$foreground200",
          background: "$purple700",
          borderColor: "$purple700",
        },
        "&:active": {
          color: "$foreground200",
          background: "$purple800",
          borderColor: "$purple800",
        },
      },
    },

    // size
    size: {
      small: {
        fontSize: "$2",
        padding: "8px",
        gap: "4px",
        borderRadius: "4px",
      },
      medium: {
        fontSize: "$3",
        padding: "10px",
        gap: "5px",
        borderRadius: "5px",
      },
      large: {
        fontSize: "$4",
        padding: "12px",
        gap: "6px",
        borderRadius: "6px",
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
        background: "transparent",
        borderColor: "transparent",
        "&:hover": {
          color: "$foreground600",
          background: "$neutral600",
          borderColor: "$neutral600",
        },
        "&:active": {
          color: "$foreground600",
          background: "$neutral700",
          borderColor: "$neutral700",
        },
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
        background: "transparent",
        borderColor: "transparent",
        "&:hover": {
          color: "$lime500",
          background: "$neutral600",
          borderColor: "$neutral600",
        },
        "&:active": {
          color: "$lime500",
          background: "$neutral700",
          borderColor: "$neutral700",
        },
      },
    },
    {
      color: "purple",
      text: true,
      css: {
        color: "$purple400",
        background: "transparent",
        borderColor: "transparent",
        "&:hover": {
          color: "$purple400",
          background: "$neutral600",
          borderColor: "$neutral600",
        },
        "&:active": {
          color: "$purple400",
          background: "$neutral700",
          borderColor: "$neutral700",
        },
      },
    },
  ],

  defaultVariants: {
    color: "default",
    size: "medium",
  },
});
