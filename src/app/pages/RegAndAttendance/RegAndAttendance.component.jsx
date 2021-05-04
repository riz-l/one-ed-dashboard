// Import: Packages
import React, { useState } from "react";

// Import: Elements
import {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
} from "./RegAndAttendance.elements";

// Import: Components, SubPages
import { PrimaryNavigation, ReportSection } from "../../components";
import { Registration, CreateAttendance } from "./subPages";

// Page: RegAndAttendnace
export default function RegAndAttendance() {
  // State: isRegistration, isCreaetAttendance
  const [isRegistration, setIsRegistration] = useState(true);
  const [isCreateAttendance, setIsCreateAttendance] = useState(false);

  // onClick: Renders Registration SubPage
  function renderRegistration() {
    setIsCreateAttendance(false);
    setIsRegistration(true);
  }

  // onClick: Renders CreateAttendance SubPage
  function renderCreateAttendance() {
    setIsRegistration(false);
    setIsCreateAttendance(true);
  }

  return (
    <>
      <Container data-testid={"regAndAttendance"}>
        <Wrapper>
          <Header>
            <h2>Registration and Create Attendance</h2>
            <span>Patient registration and attendance</span>
          </Header>

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isRegistration ? true : false}
                    onClick={renderRegistration}
                  >
                    <PrimaryNavigation.Text>
                      Registration
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isCreateAttendance ? true : false}
                    onClick={renderCreateAttendance}
                  >
                    <PrimaryNavigation.Text>
                      Create Attendance
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              content={
                isRegistration ? (
                  <Registration />
                ) : isCreateAttendance ? (
                  <CreateAttendance />
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
