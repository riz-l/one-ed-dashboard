// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Utils
import { capitalizeFirstLetter } from "../../../../../utils/capitalizeFirstLetter";

// Import: Elements
import { Container, Wrapper } from "./Alerts.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  // Redux: useSelector
  const patientAlerts = useSelector((state) => {
    if (state.selectedPatient.patientAlerts) {
      return state.selectedPatient.patientAlerts;
    }
  });

  // Maps patientAlerts through Alerts
  const alertsRender =
    patientAlerts && patientAlerts.length > 0
      ? patientAlerts.map(
          ({
            id,
            alertCode,
            alertFreeText,
            alertName,
            status,
            ...otherPatientProps
          }) => (
            <ReportEntry
              alerts
              details={alertFreeText}
              key={id}
              openedModal={
                <>
                  <Grid>
                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Alert" htmlFor="alertName">
                          {alertName && alertName.length > 0
                            ? alertName === "undefined"
                              ? "N/A"
                              : alertName
                              ? capitalizeFirstLetter(alertName)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>

                      <Grid.Item>
                        <Display labelText="Details" htmlFor="alertDetails">
                          {alertFreeText && alertFreeText.length > 0
                            ? alertFreeText === "undefined"
                              ? "N/A"
                              : alertFreeText
                              ? capitalizeFirstLetter(alertFreeText)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Status" htmlFor="status">
                          {status && status.length > 0
                            ? status === "undefined"
                              ? "N/A"
                              : status
                              ? capitalizeFirstLetter(status)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>

                    <Grid.Column>
                      <Grid.Item>
                        <Display labelText="Alert Code" htmlFor="alertCode">
                          {alertCode && alertCode.length > 0
                            ? alertCode === "undefined"
                              ? "N/A"
                              : alertCode
                              ? capitalizeFirstLetter(alertCode)
                              : "N/A"
                            : "N/A"}
                        </Display>
                      </Grid.Item>
                    </Grid.Column>
                  </Grid>
                </>
              }
              type={alertName}
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
