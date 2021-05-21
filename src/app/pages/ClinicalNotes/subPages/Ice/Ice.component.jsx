// Import: Packages
import React from "react";

// Import: Elements
import { Container, Frame, Window, Wrapper } from "./Ice.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Ice
export default function Ice() {
  return (
    <>
      <Container data-testid={"ice"}>
        <Wrapper>
          <Text as="h2" heading>
            ICE
          </Text>

          <Window>
            <Frame
              src={`https://www.newcastlelaboratories.com/wp-content/uploads/2015/10/EMIS-Web-ICE-Manual_.pdf`}
            />
          </Window>
        </Wrapper>
      </Container>
    </>
  );
}
