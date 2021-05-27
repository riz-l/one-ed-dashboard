// Import: Packages
import React from "react";

// Import: Elements
import { Container, Frame, Window, Wrapper } from "./Ambulance.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Ambulance
export default function Ambulance() {
  return (
    <>
      <Container data-testid={"ambulance"}>
        <Wrapper>
          <Text as="h2" heading>
            Ambulance Integration
          </Text>

          <Window>
            {/* TODO: The ePR below is currently hard coded. The ePRID needs to a variable so that the correct Report shows up for the selected patient.  */}
            <Frame
              src={`https://onerespintlorenzonode.azurewebsites.net/?ePRID=63cfa7dd-22b7-4d7c-b4f6-ee77b1a23585`}
            />
          </Window>
        </Wrapper>
      </Container>
    </>
  );
}
