// Import: Packages
import React from "react";

// Import: Elements
import { Container, Frame, Window, Wrapper } from "./Pacs.elements";

// Import: Components
import { Text } from "../../../../components";

// SubPage: Pacs
export default function Pacs() {
  return (
    <>
      <Container data-testid={"pacs"}>
        <Wrapper>
          <Text as="h2" heading>
            PACS
          </Text>

          <Window>
            <Frame
              src={`https://www.england.nhs.uk/wp-content/uploads/2016/09/pacs-framework.pdf`}
            />
          </Window>
        </Wrapper>
      </Container>
    </>
  );
}
