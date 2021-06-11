// Import: Elements
import { Container, Wrapper } from "./RWWEdClinicianAssessment.elements";

// Import: Conponents
import { Text } from "../../../../components";

// SubPage: RWW Ed Clinician Assessment
export default function RWWEdClinicianAssessment() {
  return (
    <Container data-testid={"rwwEdClinicianAssessment"}>
      <Wrapper>
        <Text as="h2" heading>
          RWW Ed Clinician Assessment
        </Text>
      </Wrapper>
    </Container>
  );
}
