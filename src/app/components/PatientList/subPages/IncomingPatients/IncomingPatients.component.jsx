// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./IncomingPatients.elements";

// SubPage: IncomingPatients
export default function IncomingPatients() {
  return (
    <>
      <Container data-testid={"incomingPatients"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Period</th>
          </tr>
        </thead>
      </Container>
    </>
  );
}
