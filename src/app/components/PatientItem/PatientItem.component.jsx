// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Gender, Name } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  diagnosis,
  age,
  gender,
  name,
  onClick,
  patientID,
  period,
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
      >
        <Name>{name}</Name>
        <td>{age}</td>
        <Gender>{gender}</Gender>
        <td>{diagnosis}</td>
        <td>{period}</td>
      </Container>
    </>
  );
}
