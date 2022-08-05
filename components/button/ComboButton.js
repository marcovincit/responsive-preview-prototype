import { styled } from "styles/stitches.config";

export const ComboButton = styled("div", {
  "> *": {
    borderRadius: "0!important",
  },

  "> *:first-child": {
    borderTopLeftRadius: "$1!important",
    borderBottomLeftRadius: "$1!important",
    borderRight: "none!important",
  },

  "> *:last-child": {
    borderTopRightRadius: "$1!important",
    borderBottomRightRadius: "$1!important",
    borderLeft: "none!important",
  },
});
