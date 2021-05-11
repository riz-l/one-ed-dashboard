// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  max-height: calc(100vh - 80px);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  padding: 0 2rem;
  width: 100%;
`;

// Element: ListHeader
export const ListHeader = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  padding-bottom: 1rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
`;

// Element: Item
export const Item = styled.div`
  align-items: center;
  background-color: #f7f8fa;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;
`;

// Element: TableWrapper
export const TableWrapper = styled.div``;

// Element: Table
export const Table = styled.table`
  border-radius: 8px;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  height: 100%;
  margin-bottom: 1rem;
  position: relative;
  table-layout: fixed;
  width: 100%;

  & thead {
    position: sticky;
    top: 156px;
  }

  & thead tr {
    background-color: #4d5e80;
    color: #ffffff;
    position: sticky;
    top: 0;
    text-align: left;
  }

  & td {
    color: #4d5e80;
    padding: 12px 15px;
  }
`;

// Element: THeading
export const THeading = styled.th`
  background-color: ${({ isPatientList }) =>
    isPatientList ? "#4d5e80" : "#008ba3"};
  color: #ffffff;
  padding: 12px 15px;
  transition: all 100ms linear;
  width: 100%;
`;
