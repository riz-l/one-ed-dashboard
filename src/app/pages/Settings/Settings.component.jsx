// Import: Packages
import React from "react";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Settings.elements";

// Import: Components
import { PageTitle } from "../../components";

// Page: Settings
export default function Settings() {
  return (
    <>
      <Container data-testid={"settings"}>
        <Wrapper>
          <PageTitle
            heading="Settings"
            subheading="Customise and Configure OneED"
          />

          <ContentWrapper></ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
