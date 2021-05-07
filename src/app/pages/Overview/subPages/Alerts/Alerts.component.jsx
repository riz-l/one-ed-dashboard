// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  // Redux: Extracts patientAlerts from the global state
  const patientAlerts = useSelector(
    (state) => state.selectedPatient.patientAlerts
  );

  // Maps patientAlerts through Alerts
  const alertsRender = patientAlerts.map(
    ({ id, alertName, alertFreeText, ...otherPatientProps }) => (
      <ReportEntry
        key={id}
        alerts
        type={alertName}
        details={alertFreeText}
        {...otherPatientProps}
      />
    )
  );

  return (
    <>
      <Container data-testid={"alerts"}>
        <Wrapper>
          <Text as="h2" heading>
            Alerts
          </Text>

          {alertsRender}
        </Wrapper>
      </Container>
    </>
  );
}
