// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.span`
  color: ${(props) => props.color ?? "#6b7a99;"};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  ${({ heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: #6b7a99;
          font-size: 1.5em;
          font-weight: 700;
        `;
      case subheading:
        return css`
          color: #6b7a99;
          font-size: 18px;
          font-weight: 600;
        `;
      case text:
        return css`
          color: #6b7a99;
          font-size: 1rem;
          font-weight: 400;
        `;
      default:
        return css`
          color: #6b7a99;
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;
