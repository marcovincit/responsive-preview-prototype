import { ButtonCircleStyled } from "./styles";

export const ButtonCircle = (props) => {
  const { children, customColor, as, solid } = props;

  return (
    <ButtonCircleStyled
      css={{
        color: customColor ? customColor : "",

        "&::before": {
          backgroundColor: customColor ? customColor : "",
          opacity: solid ? 1 : customColor ? "0.1" : "",
        },
        "&:hover::before": {
          backgroundColor: customColor ? customColor : "",
          opacity: solid
            ? 1
            : (customColor && as === "button") || (customColor && as === "a")
            ? "0.15"
            : "",
        },
      }}
      {...props}
    >
      {children}
    </ButtonCircleStyled>
  );
};
