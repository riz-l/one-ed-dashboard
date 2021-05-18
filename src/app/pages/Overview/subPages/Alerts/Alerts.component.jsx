// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  // Redux: Extracts patientAlerts from the global state
  const patientAlerts = useSelector(
    (state) => state.selectedPatient.patientAlerts
  );

  // Maps patientAlerts through Alerts
  const alertsRender =
    patientAlerts && patientAlerts.length > 0
      ? patientAlerts.map(
          ({
            id,
            alertCode,
            alertName,
            alertFreeText,
            status,
            ...otherPatientProps
          }) => (
            <ReportEntry
              key={id}
              alerts
              type={alertName}
              details={alertFreeText}
              openedModal={
                <>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Status" htmlFor="status">
                          {status}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Alert Code" htmlFor="alertCode">
                          {alertCode}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>
                  </Grid>
                </>
              }
              {...otherPatientProps}
            />
          )
        )
      : null;

  if (!patientAlerts || patientAlerts.length < 0) {
    return (
      <>
        <Container data-testid={"alerts"}>
          <Wrapper>
            <Text as="h2" heading>
              Alerts
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic alerts</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"alerts"}>
        <Wrapper>
          <Text as="h2" heading>
            Alerts
          </Text>

          {patientAlerts && patientAlerts.length > 0 ? (
            alertsRender
          ) : (
            <Text as="p">The Patient has no historic alerts</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
