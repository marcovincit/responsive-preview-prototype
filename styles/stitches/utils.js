export const utils = {
  // Abbreviated margin properties
  marginX: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginY: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Abbreviated padding properties
  paddingX: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingY: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // translate
  x: (value) => ({
    transform: "translateX(" + value + ")",
  }),

  y: (value) => ({
    transform: "translateY(" + value + ")",
  }),

  // A property for applying width/height together
  size: (value) => ({
    width: value,
    height: value,
  }),

  // An abbreviated property for border-radius
  br: (value) => ({
    borderRadius: value,
  }),
};
