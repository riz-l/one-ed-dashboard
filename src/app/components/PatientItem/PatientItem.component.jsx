// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Capitalize } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  onClick,
  patientID,
  colOne,
  colTwo,
  colThree,
  colFour,
  colFive,
  colSix,
  patientList,
  incomingPatients,
}) {
  // Redux: Extract patient from global state
  const patient = useSelector((state) => state.selectedPatient.patient);

  return (
    <>
      <Container
        onClick={onClick}
        data-testid={"patientItem"}
        patient={patient}
        patientID={patientID}
        patientList={patientList}
        incomingPatients={incomingPatients}
      >
        {colOne && <Capitalize>{colOne}</Capitalize>}
        {colTwo && <td>{colTwo}</td>}
        {colThree && <Capitalize>{colThree}</Capitalize>}
        {colFour && <td>{colFour}</td>}
        {colFive && <td>{colFive}</td>}
        {colSix && <td>{colSix}</td>}
      </Container>
    </>
  );
}
