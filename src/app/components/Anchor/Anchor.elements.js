// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.a`
  color: ${(props) => props.color ?? "#008ba3"};
  margin: ${(props) => props.margin ?? "0 0 0.8rem 0"};
  padding: ${(props) => props.padding ?? "0"};
  ${({ heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: ${({ color }) => (color ? color : "#008ba3")};
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5em")};
          font-weight: 700;
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover ? colorOnHover : "#00687a"};
            transition: all 100ms linear;
          }
        `;
      case subheading:
        return css`
          color: ${({ color }) => (color ? color : "#008ba3")};
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
          font-weight: 600;
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover ? colorOnHover : "#00687a"};
            transition: all 100ms linear;
          }
        `;
      case text:
        return css`
          color: ${({ color }) => (color ? color : "#008ba3")};
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
          font-weight: 400;
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover ? colorOnHover : "#00687a"};
            transition: all 100ms linear;
          }
        `;
      default:
        return css`
          color: ${({ color }) => (color ? color : "#008ba3")};
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
          font-weight: 400;
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover ? colorOnHover : "#00687a"};
            transition: all 100ms linear;
          }
        `;
    }
  }}
`;
