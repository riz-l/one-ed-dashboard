// Import: Packages
import React from "react";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, TableData } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  colOne,
  colOneMinor,
  colTwo,
  colTwoMinor,
  colThree,
  colThreeMinor,
  colFour,
  colFourMinor,
  colFive,
  colFiveMinor,
  colSix,
  colSixMinor,
  incomingPatients,
  onClick,
  patient,
  patientID,
  patientList,
}) {
  return (
    <>
      <Container
        data-testid={"patientItem"}
        onClick={onClick}
        incomingPatients={incomingPatients}
        patient={patient}
        patientID={patientID}
        patientList={patientList}
      >
        {colOne && (
          <TableData minor={colOneMinor}>
            {capitalizeFirstLetter(colOne)}
          </TableData>
        )}
        {colTwo && <TableData minor={colTwoMinor}>{colTwo}</TableData>}
        {colThree && (
          <TableData minor={colThreeMinor}>
            {capitalizeFirstLetter(colThree)}
          </TableData>
        )}
        {colFour && <TableData minor={colFourMinor}>{colFour}</TableData>}
        {colFive && <TableData minor={colFiveMinor}>{colFive}</TableData>}
        {colSix && <TableData minor={colSixMinor}>{colSix}</TableData>}
      </Container>
    </>
  );
}
