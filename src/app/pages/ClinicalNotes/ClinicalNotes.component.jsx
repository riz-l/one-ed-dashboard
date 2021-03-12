// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./ClinicalNotes.elements";

// Component: ClinicalNotes
export default function ClinicalNotes() {
  return (
    <>
      <Container data-testid={"clinicalNotes"}>
        <h2>Clinical Notes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores autem et quo tempora cupiditate dolor laborum totam nesciunt
          nulla aliquid voluptate, fuga maxime vitae eos? Quas fuga provident
          cum.
        </p>
      </Container>
    </>
  );
}
