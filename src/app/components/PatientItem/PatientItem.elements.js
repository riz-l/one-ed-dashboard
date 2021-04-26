// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.tr`
  cursor: pointer;
  transition: all 100ms linear;

  &:nth-of-type(even) {
    background-color: #e6e9ef;
    transition: all 100ms linear;

    &:hover {
      & td {
        color: #ffffff;
        transition: all 100ms linear;
      }

      background-color: #9ba7bf;
      transition: all 100ms linear;
    }
  }

  &:hover {
    & td {
      color: #ffffff;
      transition: all 100ms linear;
    }

    background-color: #9ba7bf;
    transition: all 100ms linear;
  }
`;

// Element: Name
export const Name = styled.td`
  text-transform: capitalize;
`;

// Element: Gender
export const Gender = styled.td`
  text-transform: capitalize;
`;
