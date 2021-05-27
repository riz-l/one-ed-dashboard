// Import: Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopsAssessmentPatientID,
  addPopsAssessmentPractionerName,
  addPopsAssessmentPractionerID,
  addPopsAssessmentPatientName,
  addPopsAssessmentEncounterID,
  addPopsAssessmentDateTime,
  addPopsAssessmentSysObsNeuroPatientrackPainScore,
  addPopsAssessmentRTGCEDObservationsPOPSScore,
  addPopsAssessmentSysObsNeuroEDObsAVPU,
  addPopsAssessmentRTGChildObsComments,
} from "../../../redux/slices/triageSlice";
import moment from "moment";

// Import: Assets
import { ReactComponent as CEDIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as NeuroObsIcon } from "../../../assets/img/icon/neuroObs.svg";
import { ReactComponent as POPSHistoryIcon } from "../../../assets/img/icon/popsHistory.svg";
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";
import { ReactComponent as UrineObsIcon } from "../../../assets/img/icon/urineObs.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Observations.elements";

// Import: Components, SubPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { CEDObs, NeuroObs, POPSHistory, UrineObs, Save } from "./subPages";

// Page: Observations
export default function Observations() {
  // Redux:
  const userExtension = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension
  );
  const userName = useSelector(
    (state) =>
      state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName
  );
  const patientID = useSelector((state) => state.selectedPatient.patient);
  const patientName = useSelector(
    (state) => state.selectedPatient.patientData[0].name
  );
  const encounterID = useSelector(
    (state) => state.selectedPatient.patientData[0].encounterID
  );
  const dispatch = useDispatch();

  // State: isPaediatricObs, isPOPSHistory, isSave
  const [isPaediatricObs, setIsPaediatricObs] = useState(true);
  const [isPOPSHistory, setIsPOPSHistory] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isCEDObs, setIsCEDObs] = useState(true);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isUrineObs, setIsUrineObs] = useState(false);
  const [isPOPSHistorySubPage, setISPOPSHistorySubPage] = useState(false);

  // Current Date, Time
  const date = new Date();
  const formattedDate = date.toISOString().substr(0, 10);
  const time = date.toLocaleTimeString(); // Triage Time
  const finalDate = moment(formattedDate).format("YYYY-MM-DD"); // Triage Date
  const putDateTime = finalDate.concat("T", time, "Z");
  const newDateTime = new Date(putDateTime);
  newDateTime.setHours(newDateTime.getHours() - 2);
  newDateTime.setSeconds(newDateTime.getSeconds() - 10);
  const newTime = newDateTime.toLocaleTimeString();
  const editedNewDateTime = moment(newDateTime).format("YYYY-MM-DD");
  const putEditedNewDateTime = editedNewDateTime.concat("T", newTime, "Z");

  // onClick: Renders PaediatricObs SubPage
  function renderPaediatricObs() {
    setIsNeuroObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);

    dispatch(addPopsAssessmentPatientID(patientID));
    dispatch(addPopsAssessmentPractionerName(userName));
    dispatch(addPopsAssessmentPractionerID(userExtension));
    dispatch(addPopsAssessmentPatientName(patientName));
    dispatch(addPopsAssessmentEncounterID(encounterID));
    dispatch(addPopsAssessmentDateTime(putEditedNewDateTime));
    // TODO: REQUIRES IMMEDIATE ATTENTION
    dispatch(addPopsAssessmentSysObsNeuroPatientrackPainScore("3"));
    dispatch(addPopsAssessmentRTGCEDObservationsPOPSScore("6"));
    dispatch(addPopsAssessmentSysObsNeuroEDObsAVPU("Alert"));
    dispatch(
      addPopsAssessmentRTGChildObsComments("This is a test comment - JLayton")
    );
  }

  // onClick: Renders POPSHistory SubPage
  function renderPOPSHistory() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsSave(false);
    setIsUrineObs(false);
    setIsPOPSHistory(true);
    setISPOPSHistorySubPage(true);
  }

  // onClick: Renders CEDObs SubPage
  function renderCEDObs() {
    setIsNeuroObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsCEDObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders NeuroObs SubPage
  function renderNeuroObs() {
    setIsCEDObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
    setIsSave(false);
    setIsNeuroObs(true);
    setIsPaediatricObs(true);
  }

  // onClick: Renders UrineObs SubPage
  function renderUrineObs() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsPaediatricObs(true);
    setIsUrineObs(true);
  }

  // onClick: Renders Save SubPage
  function renderSave() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsUrineObs(false);
    setIsSave(true);
  }

  return (
    <>
      <Container data-testid={"observations"}>
        <Wrapper>
          <PageTitle
            heading="Observations"
            subheading="Record Patient Observations"
          />

          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isPaediatricObs ? true : false}
                    onClick={renderPaediatricObs}
                  >
                    <PrimaryNavigation.Text>
                      POPS Assessment
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isPOPSHistory ? true : false}
                    onClick={renderPOPSHistory}
                  >
                    <PrimaryNavigation.Text>
                      POPS History
                    </PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isSave ? true : false}
                    onClick={renderSave}
                  >
                    <PrimaryNavigation.Save>
                      <PrimaryNavigation.Text>Save</PrimaryNavigation.Text>
                    </PrimaryNavigation.Save>
                  </PrimaryNavigation.Item>
                </PrimaryNavigation>
              }
              secondaryNavigation={
                <SecondaryNavigation>
                  {isPaediatricObs ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isCEDObs ? true : false}
                        onClick={renderCEDObs}
                      >
                        <SecondaryNavigation.Icon>
                          <CEDIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          CED Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isNeuroObs ? true : false}
                        onClick={renderNeuroObs}
                      >
                        <SecondaryNavigation.Icon>
                          <NeuroObsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Neuro Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isUrineObs ? true : false}
                        onClick={renderUrineObs}
                      >
                        <SecondaryNavigation.Icon>
                          <UrineObsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Urine Obs
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isPOPSHistory ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isPOPSHistorySubPage ? true : false}
                        onClick={renderPOPSHistory}
                      >
                        <SecondaryNavigation.Icon>
                          <POPSHistoryIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          POPS History
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isSave ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isSave ? true : false}
                        onClick={renderSave}
                      >
                        <SecondaryNavigation.Icon>
                          <SaveIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Save
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : null}
                </SecondaryNavigation>
              }
              content={
                isCEDObs ? (
                  <CEDObs />
                ) : isNeuroObs ? (
                  <NeuroObs />
                ) : isUrineObs ? (
                  <UrineObs />
                ) : isPOPSHistory ? (
                  <POPSHistory />
                ) : isSave ? (
                  <Save />
                ) : null
              }
            />
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
