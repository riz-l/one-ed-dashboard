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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora
          veniam tenetur molestiae corporis laudantium aliquam distinctio eos?
          Cum omnis officiis tempora ipsa esse. Minima unde velit voluptatum
          doloribus natus.
        </p>
      </Container>
    </>
  );
}
