// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.tr`
  background-color: ${({ patient, patientID, patientList }) =>
    patientList && patient === patientID && "#6a7ca0"};
  cursor: pointer;
  transition: all 100ms linear;

  &:nth-of-type(odd) {
    & td {
      color: ${({ patient, patientID }) => patient === patientID && "#ffffff"};
    }
  }

  &:nth-of-type(even) {
    background-color: ${({
      patient,
      patientID,
      patientList,
      incomingPatients,
    }) =>
      patientList && patient === patientID
        ? "#6a7ca0"
        : incomingPatients
        ? "#deedf2"
        : patientList
        ? "#e6e9ef"
        : null};
    transition: all 100ms linear;

    & td {
      color: ${({ patient, patientID }) => patient === patientID && "#ffffff"};
    }

    &:hover {
      & td {
        color: #ffffff;
        transition: all 100ms linear;
      }

      background-color: ${({ patientList, incomingPatients }) =>
        patientList ? "#6a7ca0" : incomingPatients ? "#509FB9" : null};
      transition: all 100ms linear;
    }
  }

  &:hover {
    & td {
      color: #ffffff;
      transition: all 100ms linear;
    }

    background-color: ${({ patientList, incomingPatients }) =>
      patientList ? "#6a7ca0" : incomingPatients ? "#509FB9" : null};
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
