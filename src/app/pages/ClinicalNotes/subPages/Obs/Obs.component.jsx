// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Obs.elements";

// Import: Components
import { NotesEntry, Text } from "../../../../components";

// SubPage: Obs
export default function Obs() {
  return (
    <>
      <Container data-testid={"obs"}>
        <Wrapper>
          <Text as="h2" heading>
            Obs
          </Text>

          <NotesEntry
            type="TEST TYPE"
            details="TEST DETAILS"
            status="TEST STATUS"
          />

          <NotesEntry
            type="TEST TYPE"
            details="TEST DETAILS"
            status="TEST STATUS"
          />
        </Wrapper>
      </Container>
    </>
  );
}
