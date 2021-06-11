// Import: Elements
import { Container, Wrapper } from "./CDCForms.elements";

// Import: Conponents
import { Text } from "../../../../components";

// SubPage: CDCForms
export default function CDCForms() {
  return (
    <Container data-testid={"cdcForms"}>
      <Wrapper>
        <Text as="h2" heading>
          CDC Forms
        </Text>
      </Wrapper>
    </Container>
  );
}
