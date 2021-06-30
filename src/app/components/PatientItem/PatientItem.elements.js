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

// Notes on colours:
// The Patientlist and IncomingPatientsList have different color schemes to make it easy to tell them apart.
// The odd rows don't have a background color so the primary background color shows through.
// The even rows have a contrasting background color to the odd rows.
// The tables have an on hover background color and a contrasting text color
// The patientList table selected item keeps its OnHover color.
// The header does not count towards the rows so the first row (the first odd row) is the first patient.

// Element: Container
// Sets the background color of the selected patient in patientList.
export const Container = styled.tr`
  background-color: ${({ patient, patientID, patientList }) =>
    patientList &&
    patient === patientID &&
    function (props) {
      return props.theme.colors.patientList.rowHover;
    }};
  cursor: pointer;
  transition: all 100ms linear;

  /* This sets the text color of the even rows to textprimary. 
  It is set to white text for the selected patient. */
  &:nth-of-type(odd) {
    & td {
      color: ${({ patient, patientID, patientList, incomingPatients }) =>
        patientList && patient === patientID
          ? function (props) {
              return props.theme.colors.patientList.whiteText;
            }
          : incomingPatients
          ? function (props) {
              return props.theme.colors.global.textPrimary;
            }
          : patientList
          ? function (props) {
              return props.theme.colors.global.textPrimary;
            }
          : null};

      transition: all 100ms linear;
    }
  }

  /* This sets the background of the odd rows to the rowEven color. */
  &:nth-of-type(even) {
    background-color: ${({
      patient,
      patientID,
      patientList,
      incomingPatients,
    }) =>
      patientList && patient === patientID
        ? function (props) {
            return props.theme.colors.patientList.rowHover;
          }
        : incomingPatients
        ? function (props) {
            return props.theme.colors.incomingPatientsList.rowEven;
          }
        : patientList
        ? function (props) {
            return props.theme.colors.patientList.rowEven;
          }
        : null};
    transition: all 100ms linear;

    /* This sets the text color of the odd rows. 
if the table data is for the selected patient then use the whiteText color is used. */
    & td {
      color: ${({ patient, patientID, patientList, incomingPatients }) =>
        patientList && patient === patientID
          ? function (props) {
              return props.theme.colors.patientList.whiteText;
            }
          : incomingPatients
          ? function (props) {
              return props.theme.colors.incomingPatientsList.blackText;
            }
          : patientList
          ? function (props) {
              return props.theme.colors.global.textPrimary;
            }
          : null};
      transition: all 100ms linear;
    }
  }

  /* This sets the onHover background color and text color for all rows.  */
  &:hover {
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

    & td {
      color: ${(props) => props.theme.colors.patientList.whiteText};
      transition: all 100ms linear;
    }
  }
`;
