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

          <ContentWrapper>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              tempora veniam tenetur molestiae corporis laudantium aliquam
              distinctio eos? Cum omnis officiis tempora ipsa esse. Minima unde
              velit voluptatum doloribus natus.
            </p> */}
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
