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
export default function PatientItem({
  add1,
  add2,
  add3,
  diagnosis,
  dob,
  encounterID,
  gender,
  id,
  location,
  name,
  participant,
  period,
  postcode,
}) {
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
                    <Details>{name}</Details>
                  </DetailsItem>
                </DetailsColumn>

                <DetailsColumn>
                  <DetailsItem>
                    <DetailsHeading>Complaint</DetailsHeading>
                    <Details>{diagnosis}</Details>
                  </DetailsItem>
                </DetailsColumn>

                <DetailsColumn>
                  <DetailsRow>
                    <DetailsItem>
                      <DetailsHeading>Date of Birth</DetailsHeading>
                      <Details>{dob}</Details>
                    </DetailsItem>

                    <DetailsItem>
                      <DetailsHeading>Period</DetailsHeading>
                      <Details
                        style={{ borderBottom: "2px solid rgba(255,0,0,0.6)" }}
                      >
                        {period}
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
