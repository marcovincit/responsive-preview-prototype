import { PathStyled, SvgStyled } from "./styles";

export const YouTube = (props) => {
  return (
    <SvgStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      <PathStyled
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.216 8.942a5.513 5.513 0 0 1 3.878 3.878c.942 3.444.906 10.62.906 10.62s0 7.14-.906 10.583a5.513 5.513 0 0 1-3.878 3.878c-3.444.906-17.216.906-17.216.906s-13.736 0-17.216-.942a5.513 5.513 0 0 1-3.878-3.878C2 30.58 2 23.404 2 23.404s0-7.14.906-10.584c.508-1.884 2.03-3.406 3.878-3.914C10.227 8 24 8 24 8s13.773 0 17.216.942ZM31.067 23.404 19.614 30V16.807l11.453 6.597Z"
        fill="#fff"
      />
    </SvgStyled>
  );
};
