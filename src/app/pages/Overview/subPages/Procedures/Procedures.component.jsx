// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./Procedures.elements";

// Import: Components
import { Display, Grid, ReportEntry, Text } from "../../../../components";

// SubPage: Procedures
export default function Procedures() {
  // Redux: useSelector
  const patientProcedures = useSelector((state) => {
    if (state.selectedPatient.patientProcedures) {
      return state.selectedPatient.patientProcedures;
    }
  });

  // Maps patientProcedures
  const proceduresRender =
    patientProcedures && patientProcedures.length > 0
      ? patientProcedures.map(
          ({
            id,
            procedureName,
            status,
            procedureCode,
            ...otherPatientProps
          }) => (
            <ReportEntry
              details={
                procedureCode !== "undefined"
                  ? procedureCode
                  : "No further detail"
              }
              key={id}
              procedures
              status={status}
              type={procedureName}
              {...otherPatientProps}
            />
          )
        )
      : null;

  if (!patientProcedures || patientProcedures.length < 0) {
    return (
      <>
        <Container data-testid={"procedures"}>
          <Wrapper>
            <Text as="h2" heading>
              Procedures
            </Text>

            <Grid>
              <Grid.Item>
                <Display>This Patient has no historic procedures</Display>
              </Grid.Item>
            </Grid>
          </Wrapper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container data-testid={"procedures"}>
        <Wrapper>
          <Text as="h2" heading>
            Procedures
          </Text>

          {patientProcedures && patientProcedures.length > 0 ? (
            proceduresRender
          ) : (
            <Text as="p">The Patient has no historic procedures</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
