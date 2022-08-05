import { PathStyled, SvgStyled } from "./styles";

export const NuxtIcon = (props) => {
  return (
    <SvgStyled
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <PathStyled
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7903 5.25583C10.1667 4.18355 8.60754 4.18353 7.98391 5.25583L1.18723 16.9422C0.563596 18.0145 1.34314 19.3548 2.59041 19.3548H7.89629C7.36332 18.889 7.16596 18.0833 7.56927 17.392L12.7168 8.56827L10.7903 5.25583Z"
        fill="#B7FFE1"
      />
      <PathStyled
        d="M15.0968 7.8193C15.6129 6.94196 16.9032 6.94196 17.4193 7.8193L23.0441 17.3808C23.5603 18.2582 22.9152 19.3548 21.883 19.3548H10.6332C9.601 19.3548 8.95584 18.2582 9.47196 17.3808L15.0968 7.8193Z"
        fill="white"
      />
    </SvgStyled>
  );
};
