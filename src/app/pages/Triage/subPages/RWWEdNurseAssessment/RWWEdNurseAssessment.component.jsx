// Import: Elements
import { Container, Wrapper } from "./RWWEdNurseAssessment.elements";

// Import: Conponents
import { Text } from "../../../../components";

// SubPage: RWW Ed Nurse Assessment
export default function RWWEdNurseAssessment() {
  return (
    <Container data-testid={"rwwEdNurseAssessment"}>
      <Wrapper>
        <Text as="h2" heading>
          RWW Ed Nurse Assessment
        </Text>
      </Wrapper>
    </Container>
  );
}
