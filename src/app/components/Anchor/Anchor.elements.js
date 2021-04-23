// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.a`
  color: ${(props) => props.color ?? "#008ba3"};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  ${({ heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: #008ba3;
          font-size: 1.5em;
          font-weight: 700;
          text-decoration: underline;
          transition: all 100ms linear;

          &:hover {
            color: #00687a;
            transition: all 100ms linear;
          }
        `;
      case subheading:
        return css`
          color: #008ba3;
          font-size: 18px;
          font-weight: 600;
          text-decoration: underline;
          transition: all 100ms linear;

          &:hover {
            color: #00687a;
            transition: all 100ms linear;
          }
        `;
      case text:
        return css`
          color: #008ba3;
          font-size: 1rem;
          font-weight: 400;
          text-decoration: underline;
          transition: all 100ms linear;

          &:hover {
            color: #00687a;
            transition: all 100ms linear;
          }
        `;
      default:
        return css`
          color: #008ba3;
          font-size: 1rem;
          font-weight: 400;
          text-decoration: underline;
          transition: all 100ms linear;

          &:hover {
            color: #00687a;
            transition: all 100ms linear;
          }
        `;
    }
  }}
`;

// .topnav li:hover {
//   border-bottom: 4px solid white;
// }
