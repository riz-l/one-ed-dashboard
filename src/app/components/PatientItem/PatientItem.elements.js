// Import: Packages
import styled, { css } from "styled-components/macro";

// Import: Definitions
import { deviceMaxWidth } from "../../../definitions/breakPoints";

// Element: TableData
export const TableData = styled.td`
  ${({ minor }) =>
    minor &&
    css`
      @media ${deviceMaxWidth.laptopL} {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    `}
`;

// Element: Container
export const Container = styled.tr`
  background-color: ${({ patient, patientID, patientList }) =>
    patientList &&
    patient === patientID &&
    function (props) {
      return props.theme.colors.patientList.rowHover;
    }};
  cursor: pointer;
  transition: all 100ms linear;

  &:nth-of-type(odd) {
    & td {
      color: ${({ patient, patientID }) =>
        patient === patientID &&
        function (props) {
          return props.theme.colors.global.backgroundPrimary;
        }};
      transition: all 100ms linear;
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
        ? function (props) {
            return props.theme.colors.formComponents.tickBoxCheckedHover;
          }
        : incomingPatients
        ? function (props) {
            return props.theme.colors.incomingPatientsList.rowOdd;
          }
        : patientList
        ? function (props) {
            return props.theme.colors.patientList.rowOdd;
          }
        : null};
    transition: all 100ms linear;

    & td {
      color: ${({ patient, patientID }) =>
        patient === patientID &&
        function (props) {
          return props.theme.colors.global.backgroundPrimary;
        }};
      transition: all 100ms linear;
    }

    &:hover {
      & td {
        color: ${(props) => props.theme.colors.global.backgroundPrimary};
        transition: all 100ms linear;
      }

      background-color: ${({ patientList, incomingPatients }) =>
        patientList
          ? function (props) {
              return props.theme.colors.patientList.rowHover;
            }
          : incomingPatients
          ? function (props) {
              return props.theme.colors.incomingPatientsList.rowHover;
            }
          : null};
      transition: all 100ms linear;
    }
  }

  &:hover {
    & td {
      color: ${(props) => props.theme.colors.global.backgroundPrimary};
      transition: all 100ms linear;
    }

    background-color: ${({ patientList, incomingPatients }) =>
      patientList
        ? function (props) {
            return props.theme.colors.patientList.rowHover;
          }
        : incomingPatients
        ? function (props) {
            return props.theme.colors.incomingPatientsList.rowHover;
          }
        : null};
    transition: all 100ms linear;
  }
`;
