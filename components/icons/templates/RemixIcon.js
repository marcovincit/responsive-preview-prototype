import { PathStyled, SvgStyled } from "./styles";

export const RemixIcon = (props) => {
  return (
    <SvgStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <PathStyled
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1364 16.8581C19.298 18.9343 19.298 19.9076 19.298 20.97H14.4942C14.4942 20.7386 14.4983 20.5269 14.5025 20.3122C14.5155 19.645 14.529 18.9491 14.4209 17.5439C14.278 15.4866 13.3921 15.0294 11.7631 15.0294H4.20773V11.2863H11.9918C14.0494 11.2863 15.0782 10.6603 15.0782 9.00308C15.0782 7.54584 14.0494 6.66276 11.9918 6.66276H4.20773V3H12.8491C17.5074 3 19.8223 5.20017 19.8223 8.71469C19.8223 11.3434 18.1933 13.0578 15.9927 13.3436C17.8503 13.715 18.9363 14.7722 19.1364 16.8581Z"
        fill="#212121"
      />
      <PathStyled
        d="M4.20773 20.97V18.1796H9.28709C10.1355 18.1796 10.3197 18.8089 10.3197 19.1842V20.97H4.20773Z"
        fill="#212121"
      />
    </SvgStyled>
  );
};
