// Import: Packages
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.a`
  color: ${(props) =>
    props.color ?? props.theme.colors.formComponents.tickBoxChecked};
  margin: ${(props) => props.margin ?? "0 0 0.8rem 0"};
  padding: ${(props) => props.padding ?? "0"};
  ${({ heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: ${({ color }) =>
            color
              ? color
              : (props) => props.theme.colors.formComponents.tickBoxChecked};
          font-family: "PoppinsBold", sans-serif;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5em")};
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover
                ? colorOnHover
                : (props) =>
                    props.theme.colors.formComponents.tickBoxCheckedHover};
            transition: all 100ms linear;
          }
        `;
      case subheading:
        return css`
          color: ${({ color }) =>
            color
              ? color
              : (props) => props.theme.colors.formComponents.tickBoxChecked};
          font-family: "PoppinsSemiBold", sans-serif;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover
                ? colorOnHover
                : (props) =>
                    props.theme.colors.formComponents.tickBoxCheckedHover};
            transition: all 100ms linear;
          }
        `;
      case text:
        return css`
          color: ${({ color }) =>
            color
              ? color
              : (props) => props.theme.colors.formComponents.tickBoxChecked};
          font-family: "PoppinsRegular", sans-serif;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover
                ? colorOnHover
                : (props) =>
                    props.theme.colors.formComponents.tickBoxCheckedHover};
            transition: all 100ms linear;
          }
        `;
      default:
        return css`
          color: ${({ color }) =>
            color
              ? color
              : (props) => props.theme.colors.formComponents.tickBoxChecked};
          font-family: "PoppinsRegular", sans-serif;
          font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
          font-weight: 400;
          transition: all 100ms linear;

          &:hover {
            color: ${({ colorOnHover }) =>
              colorOnHover
                ? colorOnHover
                : (props) =>
                    props.theme.colors.formComponents.tickBoxCheckedHover};
            transition: all 100ms linear;
          }
        `;
    }
  }}
`;
