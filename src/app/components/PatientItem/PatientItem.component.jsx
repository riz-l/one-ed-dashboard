// Import: Packages
import React from "react";

// Import: Elements
import { Container, Gender, Name } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem({
  diagnosis,
  dob,
  gender,
  name,
  onClick,
  period,
}) {
  return (
    <>
      <Container onClick={onClick} data-testid={"patientItem"}>
        <Name>{name}</Name>
        <td>{dob}</td>
        <Gender>{gender}</Gender>
        <td>{diagnosis}</td>
        <td>{period}</td>
      </Container>
    </>
  );
}
