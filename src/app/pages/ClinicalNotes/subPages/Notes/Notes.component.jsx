// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Notes.elements";

// Import: Components
import { Form, NotesEntry, Text } from "../../../../components";

// SubPage: Notes
export default function Notes() {
  return (
    <>
      <Container data-testid={"notes"}>
        <Wrapper>
          <Text as="h2" heading>
            Notes
          </Text>

          <Form>
            <Form.TextArea
              htmlFor="enterObservationNote"
              labelText="Enter observation note..."
              rows="8"
            />
          </Form>

          <Text as="h3" subheading>
            Previous Notes
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
