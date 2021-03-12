// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  Details,
  DetailsColumn,
  DetailsContainer,
  DetailsHeading,
  DetailsItem,
  DetailsRow,
  DetailsWrapper,
  IconContainer,
  Wrapper,
} from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem() {
  return (
    <>
      <Container data-testid={"patientItem"}>
        <Wrapper>
          <IconContainer>
            <UserSvg />
            <DetailsHeading>NEWS</DetailsHeading>
            <Details>2</Details>
          </IconContainer>

          <DetailsContainer>
            <DetailsWrapper>
              <DetailsColumn>
                <DetailsColumn>
                  <DetailsItem>
                    <DetailsHeading>Name</DetailsHeading>
                    <Details>Johnathan Smith Doe Black</Details>
                  </DetailsItem>
                </DetailsColumn>

                <DetailsColumn>
                  <DetailsItem>
                    <DetailsHeading>Complaint</DetailsHeading>
                    <Details>A00 - Cardiac arrest</Details>
                  </DetailsItem>
                </DetailsColumn>

                <DetailsColumn>
                  <DetailsRow>
                    <DetailsItem>
                      <DetailsHeading>Age</DetailsHeading>
                      <Details>34 years</Details>
                    </DetailsItem>

                    <DetailsItem>
                      <DetailsHeading>Duration</DetailsHeading>
                      <Details
                        style={{ borderBottom: "2px solid rgba(255,0,0,0.6)" }}
                      >
                        154 minutes
                      </Details>
                    </DetailsItem>
                  </DetailsRow>
                </DetailsColumn>
              </DetailsColumn>
            </DetailsWrapper>
          </DetailsContainer>
        </Wrapper>
      </Container>
    </>
  );
}
