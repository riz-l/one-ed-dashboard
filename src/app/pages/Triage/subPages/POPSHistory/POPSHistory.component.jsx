// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./POPSHistory.elements";

// Import: Components
import { POPSHistoryModal, Text } from "../../../../components";

// SubPage: POPSHistory
export default function POPSHistory() {
  return (
    <>
      <Container data-testid={"popsHistory"}>
        <Wrapper>
          <Text as="h2" heading>
            POPS History
          </Text>

          <POPSHistoryModal />
        </Wrapper>
      </Container>
    </>
  );
}
