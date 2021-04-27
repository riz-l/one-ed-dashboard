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

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;

  & h2 {
    color: #4d5e80;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & span {
    color: #6b7a99;
    font-size: 0.8rem;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  padding: 0 2rem;
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
  table-layout: fixed;
  width: 100%;

  & thead {
    position: sticky;
    top: 90px;
  }

  & thead tr {
    background-color: #4d5e80;
    color: #ffffff;
    text-align: left;

    & th:first-child {
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
    }

    & th:last-child {
      border-bottom-right-radius: 8px;
      border-top-right-radius: 8px;
    }

    & th {
      background-color: #4d5e80;
      color: #ffffff;
      width: 100%;
    }
  }

  & th,
  td {
    color: #4d5e80;
    padding: 12px 15px;
  }
`;
