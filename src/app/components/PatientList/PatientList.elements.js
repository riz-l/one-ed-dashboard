// Import: Packages
import styled, { css } from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 100%;
  max-height: calc(100vh - 80px);
  /* overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin; */
  overflow-y: hidden;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 100%;
  overflow-y: auto;
  padding: 0 2rem;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: ${(props) => props.theme.colors.global.icon},
    ${(props) => props.theme.colors.global.borderPrimary};
  scrollbar-width: thin;
  transition: all 100ms linear;

  @media ${deviceMaxWidth.laptopL} {
    padding: 0 1rem;
  }
`;

// Element: ListHeader
export const ListHeader = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  padding-bottom: 1rem;
  -webkit-position: sticky;
  position: sticky;
  top: 0;
  transition: all 100ms linear;
  width: 100%;
  z-index: 3;
`;

// Element: Item
export const Item = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  height: auto;
  justify-content: flex-start;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: NavWrapper
export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: flex-start;
  padding: 1rem 0 0 2rem;
  width: 100%;

  @media ${deviceMaxWidth.laptopL} {
    padding: 1rem 0 0 1rem;
  }
`;

// Element: TableWrapper
export const TableWrapper = styled.div``;

// Element: Table
export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  font-family: "PoppinsRegular", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  height: 100%;
  margin-bottom: 1rem;
  position: relative;
  table-layout: fixed;
  width: 100%;

  & thead {
    -webkit-position: sticky;
    position: sticky;
    /* top: 156px; */
  }

  & thead tr {
    color: ${(props) => props.theme.colors.global.backgroundPrimary};
    position: sticky;
    text-align: left;
    top: 0;
    transition: all 100ms linear;
  }

  & td {
    color: ${(props) => props.theme.colors.global.textPrimary};
    padding: 12px 15px;
    transition: all 100ms linear;

    @media ${deviceMaxWidth.mobileL} {
      font-size: 0.7rem;
    }
  }
`;

// Element: THeading
export const THeading = styled.th`
  background-color: ${({ isPatientList }) =>
    isPatientList
      ? (props) => props.theme.colors.patientList.header
      : (props) => props.theme.colors.incomingPatientsList.header};
  color: ${(props) => props.theme.colors.global.backgroundPrimary};
  padding: 12px 15px;
  transition: all 100ms linear;
  width: 100%;
  ${({ minor }) =>
    minor &&
    css`
      @media ${deviceMaxWidth.laptopL} {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    `}

  @media ${deviceMaxWidth.mobileL} {
    font-size: 0.7rem;
  }
`;
