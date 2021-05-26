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
              src={`https://onerespintlorenzonode.azurewebsites.net/?ePRID=d97695ac-7e34-4bc8-b263-9769068a2a5e`}
            />
          </Window>
        </Wrapper>
      </Container>
    </>
  );
}
