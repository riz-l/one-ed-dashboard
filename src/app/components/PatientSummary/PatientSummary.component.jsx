// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import {
  Container,
  DetailsContainer,
  DetailsEntry,
  DetailsHeading,
  DetailsItem,
  Header,
  Summary,
  SummaryContainer,
  SummaryLayout,
  Wrapper,
} from "./PatientSummary.elements";

// Import: Components
import { Display } from "../index";

// Component: PatientSummary
export default function PatientSummary() {
  // Redux: Fetches selectedPatient and patientData from the global state
  const selectedPatient = useSelector((state) => state.selectedPatient.patient);
  const patientData = useSelector((state) => state.selectedPatient.patientData);
  const status = useSelector((state) => state.selectedPatient.dataStatus);

  if (status === null) {
    return (
      <Container data-testid={"patientSummary"}>
        <Header>
          <h2>Summary</h2>
          <span>Detailed Patient information</span>
        </Header>

        <DetailsContainer>
          <Display>Please select a Patient</Display>
        </DetailsContainer>
      </Container>
    );
  }

  if (status === "loading") {
    return (
      <Container data-testid={"patientSummary"}>
        <Header>
          <h2>Summary</h2>
          <span>Detailed Patient information</span>
        </Header>

        <DetailsContainer>
          <Display>Loading...</Display>
        </DetailsContainer>
      </Container>
    );
  }

  return (
    <>
      <Container data-testid={"patientSummary"}>
        <Header>
          <h2>Summary</h2>
          <span>Detailed Patient information</span>
        </Header>

        <Wrapper>
          <SummaryContainer>
            <Summary>
              <SummaryLayout>
                {selectedPatient &&
                selectedPatient.length > 0 &&
                patientData ? (
                  <>
                    <DetailsContainer>
                      <DetailsItem>
                        <Display labelText="Name">
                          {patientData[0].name && patientData[0].name}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Complaint">
                          {patientData[0].diagnosis && patientData[0].diagnosis}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Gender">
                          {patientData[0].gender && patientData[0].gender}
                        </Display>
                      </DetailsItem>
                    </DetailsContainer>

                    <DetailsContainer>
                      <DetailsItem>
                        <Display labelText="Date of Birth">
                          {patientData[0].dob && patientData[0].dob}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Encounter ID">
                          {patientData[0].encounterID &&
                            patientData[0].encounterID}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Patient ID">
                          {patientData[0].patientID && patientData[0].patientID}
                        </Display>
                      </DetailsItem>
                    </DetailsContainer>

                    <DetailsContainer>
                      <DetailsItem>
                        <Display labelText="Address" margin="0 0 0 0">
                          {patientData[0].add1 && patientData[0].add1}
                        </Display>
                        <Display>
                          {patientData[0].add2 && patientData[0].add2}
                        </Display>
                        <Display>
                          {patientData[0].add3 && patientData[0].add3}
                        </Display>
                        <Display>
                          {patientData[0].postcode && patientData[0].postcode}
                        </Display>
                      </DetailsItem>
                    </DetailsContainer>

                    <DetailsContainer>
                      <DetailsItem>
                        <DetailsHeading>Duration</DetailsHeading>
                        <DetailsEntry
                          style={{
                            borderBottom: "2px solid rgba(255,0,0,0.6)",
                          }}
                        >
                          {patientData[0].period && patientData[0].period}
                        </DetailsEntry>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Contact 1">
                          {patientData[0].telecom1 &&
                            patientData[0].telecom1.value}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Contact 2">
                          {patientData[0].telecom2 &&
                            patientData[0].telecom2.value}
                        </Display>
                      </DetailsItem>

                      <DetailsItem>
                        <Display labelText="Contact 3">
                          {patientData[0].telecom3 &&
                            patientData[0].telecom3.value}
                        </Display>
                      </DetailsItem>
                    </DetailsContainer>
                  </>
                ) : (
                  <p>Select a Patient...</p>
                )}
              </SummaryLayout>
            </Summary>
          </SummaryContainer>
        </Wrapper>
      </Container>
    </>
  );
}
