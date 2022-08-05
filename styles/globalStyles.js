import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "@font-face": {
    fontFamily: "TWK Everett",
    fontWeight: 500,
    src: `
    url("fonts/TWKEverett-Medium-web.woff2") format("woff2"),
     url("fonts/TWKEverett-Medium-web.woff") format("woff"),
     url("fonts/TWKEverett-Medium-web.ttf") format("ttf")
     `,
    fontDisplay: "swap",
  },

  ".material-symbols-outlined": {
    fontSize: "inherit!important",
    fontWeight: "200!important",
  },

  "html, body": {
    background: "$background",
    color: "$text",
    padding: 0,
    margin: 0,
    fontFamily: "$default",
    "-webkit-font-smoothing": "antialiased",
    fontDisplay: "swap",
  },

  html: {
    fontSize: "10px",

    "@lg": {
      fontSize: "calc(100vw / 1440 * 10)",
    },

    "@xl": {
      fontSize: "calc(100vw / 1921 * 10)",
    },
  },

  body: {
    fontSize: "1.6rem",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "*": {
    boxSizing: "border-box",
  },
});
