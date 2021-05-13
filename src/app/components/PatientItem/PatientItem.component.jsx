// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Gender, Name } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  onClick,
  patientID,
  colOne,
  colTwo,
  colThree,
  colFour,
  colFive,
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
        <Name>{colOne}</Name>
        <td>{colTwo}</td>
        <Gender>{colThree}</Gender>
        <td>{colFour}</td>
        <td>{colFive}</td>
      </Container>
    </>
  );
}
