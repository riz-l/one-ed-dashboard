// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.span`
  color: ${(props) => props.color ?? props.theme.colors.global.textSecondary};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  ${({ bold, heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsBold", sans-serif;
          font-size: 1.5em;
          font-weight: 700;
          transition: all 100ms linear;
        `;
      case subheading:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsSemiBold", sans-serif;
          font-size: 18px;
          font-weight: 600;
          transition: all 100ms linear;
        `;
      case text:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
      case bold:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsSemiBold", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          transition: all 100ms linear;
        `;
      default:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "PoppinsRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
    }
  }}
  font-size: ${({ fontSize }) =>
    fontSize &&
    fontSize}; /* At the bottom on purpose to override previous stylings if margin is passed as a prop */
`;
