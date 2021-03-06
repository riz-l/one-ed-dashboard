// Import: Packages
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsSummaryOpen } from "../../../redux/slices/dashboardSlice";
import { clearPatient } from "../../../redux/slices/selectedPatientSlice";

// Import: Assets
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";

// Import: Elements
import {
  Container,
  DetailsContainer,
  Header,
  IconContainer,
  Suggestion,
  Suggestions,
  SuggestionsContainer,
  Wrapper,
} from "./PatientSummary.elements";

// Import: Components
import { Button, Display, PageTitle, PatientDemographics } from "../index";

// Component: PatientSummary
export default function PatientSummary() {
  // Redux: useSelector, useDispatch
  const status = useSelector((state) => {
    if (state.selectedPatient.dataStatus) {
      return state.selectedPatient.dataStatus;
    }
  });

  const dispatch = useDispatch();

  // Temporary renders for when status === null || "loading"
  if (status === null) {
    return (
      <Container data-testid={"patientSummary"}>
        <PageTitle heading="Summary" subheading="Details Patient information" />

        <DetailsContainer>
          <Display>Please select a Patient</Display>
        </DetailsContainer>
      </Container>
    );
  }

  if (status === "loading") {
    return (
      <Container data-testid={"patientSummary"}>
        <PageTitle heading="Summary" subheading="Details Patient information" />

        <DetailsContainer>
          <Display>Loading...</Display>
        </DetailsContainer>
      </Container>
    );
  }

  function closeAndClear() {
    dispatch(clearPatient());
    dispatch(setIsSummaryOpen(false));
  }

  return (
    <>
      <Container data-testid={"patientSummary"}>
        <Header>
          <PageTitle
            heading="Summary"
            subheading="Details Patient information"
          />

          <Button
            onClick={closeAndClear}
            margin="0 2rem -1.4rem 0"
            text="Close Summary"
          />
        </Header>

        <Wrapper>
          <PatientDemographics summary />

          <SuggestionsContainer>
            <PageTitle
              heading="Suggestions"
              subheading="Proposed sections to complete"
            />
            <Suggestions>
              <Link to="/one-ed/assessments/triage">
                <Suggestion>
                  <IconContainer>
                    <AssessmentsTriageIcon />
                  </IconContainer>

                  <span>Triage</span>
                </Suggestion>
              </Link>

              <Link to="/one-ed/assessments/observations">
                <Suggestion>
                  <IconContainer>
                    <AssessmentsObservationsIcon />
                  </IconContainer>

                  <span>Observations</span>
                </Suggestion>
              </Link>

              <Link to="/one-ed/assessments/seen">
                <Suggestion>
                  <IconContainer>
                    <AssessmentsSeenIcon />
                  </IconContainer>

                  <span>Seen</span>
                </Suggestion>
              </Link>

              <Link to="/one-ed/assessments/clinical-notes">
                <Suggestion>
                  <IconContainer>
                    <AssessmentsClinicalIcon />
                  </IconContainer>

                  <span>Clinical Notes</span>
                </Suggestion>
              </Link>
            </Suggestions>
          </SuggestionsContainer>
        </Wrapper>
      </Container>
    </>
  );
}
