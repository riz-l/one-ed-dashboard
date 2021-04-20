// Import: Packages
import React from "react";

// Import: Elements
import { Container, ContentWrapper, Header, Wrapper,} from "./ViewSeen.elements";

// Import: Components
import { PatientDemographics} from "../../components"

// Component: ViewSeen
export default function ViewSeen() {
  return (
    <>
      <Container data-testid={"viewSeen"}>
      <Wrapper>
        <Header>
        <h2>View Seen</h2>
        <span>Displays the seen history for a patient</span>
        </Header>
        <PatientDemographics/>
        <ContentWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora
          veniam tenetur molestiae corporis laudantium aliquam distinctio eos?
          Cum omnis officiis tempora ipsa esse. Minima unde velit voluptatum
          doloribus natus.
        </p>
        </ContentWrapper>
      </Wrapper>
      </Container>
    </>
  );
}
