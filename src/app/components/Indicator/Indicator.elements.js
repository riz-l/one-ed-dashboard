// Import: Packages
import styled from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

//Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ red, amber, green }) =>
    red
      ? (props) => props.theme.colors.formComponents.indicatorRed
      : amber
      ? (props) => props.theme.colors.formComponents.indicatorAmber
      : green
      ? (props) => props.theme.colors.formComponents.indicatorGreen
      : (props) => props.theme.colors.formComponents.tickBoxUnchecked};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  justify-content: center;
  padding: 0.8rem;
  transition: all 100ms linear;
  width: ${({ width }) => (width ? width : "300px")};

  @media ${deviceMaxWidth.tabletL} {
    width: 150px;
  }
`;
