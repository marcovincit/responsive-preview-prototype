import { styled } from "styles/stitches.config";

// https://fonts.google.com/icons
export const MaterialStyled = styled("span", {
  fontFamily: "'Material Symbols Outlined'",
  fontWeight: "200",
  fontStyle: "normal",
  fontSize: "inherit",
  display: "inline-block",
  lineHeight: 1,
  textTransform: "none",
  letterSpacing: "normal",
  wordWrap: "normal",
  whiteSpace: "nowrap",
  direction: "ltr",
});

export const MaterialIcon = (props) => {
  const { name, css } = props;
  return <MaterialStyled css={css}>{name}</MaterialStyled>;
};
