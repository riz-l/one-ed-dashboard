// Import: Packages
import React from "react";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  colOne,
  colTwo,
  colThree,
  colFour,
  colFive,
  colSix,
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
        {colOne && <td>{capitalizeFirstLetter(colOne)}</td>}
        {colTwo && <td>{colTwo}</td>}
        {colThree && <td>{capitalizeFirstLetter(colThree)}</td>}
        {colFour && <td>{colFour}</td>}
        {colFive && <td>{colFive}</td>}
        {colSix && <td>{colSix}</td>}
      </Container>
    </>
  );
}
