// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.span`
  color: ${(props) => props.color ?? "#6b7a99;"};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  ${({ bold, heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: #6b7a99;
          font-family: "PoppinsBold", sans-serif;
          font-size: 1.5em;
          font-weight: 700;
        `;
      case subheading:
        return css`
          color: #6b7a99;
          font-family: "PoppinsSemiBold", sans-serif;
          font-size: 18px;
          font-weight: 600;
        `;
      case text:
        return css`
          color: #6b7a99;
          font-family: "PoppinsRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
        `;
      case bold:
        return css`
          color: #6b7a99;
          font-family: "PoppinsSemiBold", sans-serif;
          font-size: 1rem;
          font-weight: 600;
        `;
      default:
        return css`
          color: #6b7a99;
          font-family: "PoppinsRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
  font-size: ${({ fontSize }) =>
    fontSize &&
    fontSize}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;
