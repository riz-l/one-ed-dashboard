// Import: Packages
import React from "react";

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

// Component: PatientSummary
export default function PatientSummary() {
  return (
    <>
      <Container data-testid={"patientSummary"}>
        <Header>
          <h2>Patient Summary</h2>
          <span>Detailed Patient information</span>
        </Header>

        <Wrapper>
          <SummaryContainer>
            <Summary>
              <SummaryLayout>
                <DetailsContainer>
                  <DetailsItem>
                    <DetailsHeading>Name</DetailsHeading>
                    <DetailsEntry>Johnathan Smith Doe Black</DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Complaint</DetailsHeading>
                    <DetailsEntry>A00 - Cardiac arrest</DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Gender</DetailsHeading>
                    <DetailsEntry>Male</DetailsEntry>
                  </DetailsItem>
                </DetailsContainer>

                <DetailsContainer>
                  <DetailsItem>
                    <DetailsHeading>NEWS Score</DetailsHeading>
                    <DetailsEntry>2</DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Date of Birth</DetailsHeading>
                    <DetailsEntry>03/02/1992</DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Age (Years)</DetailsHeading>
                    <DetailsEntry>28</DetailsEntry>
                  </DetailsItem>
                </DetailsContainer>

                <DetailsContainer>
                  <DetailsItem>
                    <DetailsHeading>Address</DetailsHeading>
                    <DetailsEntry>38 Pinnerton Street</DetailsEntry>
                    <DetailsEntry>Kinnegad</DetailsEntry>
                    <DetailsEntry>Co. Westmeath</DetailsEntry>
                    <DetailsEntry>N91 PX33</DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Country</DetailsHeading>
                    <DetailsEntry>Irish Republic</DetailsEntry>
                  </DetailsItem>
                </DetailsContainer>

                <DetailsContainer>
                  <DetailsItem>
                    <DetailsHeading>Duration</DetailsHeading>
                    <DetailsEntry
                      style={{ borderBottom: "2px solid rgba(255,0,0,0.6)" }}
                    >
                      154 minutes
                    </DetailsEntry>
                  </DetailsItem>

                  <DetailsItem>
                    <DetailsHeading>Phone No.</DetailsHeading>
                    <DetailsEntry>+44 7857375613</DetailsEntry>
                  </DetailsItem>
                </DetailsContainer>
              </SummaryLayout>
            </Summary>
          </SummaryContainer>
        </Wrapper>
      </Container>
    </>
  );
}
