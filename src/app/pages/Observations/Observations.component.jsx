// Import: Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopsAssessmentDateTime,
  addPopsAssessmentEncounterID,
  addPopsAssessmentPatientID,
  addPopsAssessmentPatientName,
  addPopsAssessmentPractionerID,
  addPopsAssessmentPractionerName,
  addPopsAssessmentRTGCEDObservationsPOPSScore,
  addPopsAssessmentRTGChildObsComments,
  addPopsAssessmentSysObsNeuroEDObsAVPU,
  addPopsAssessmentSysObsNeuroPatientrackPainScore,
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

// Import: Components, subPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import { CEDObs, NeuroObs, POPSHistory, Save, UrineObs } from "./subPages";

// Page: Observations
export default function Observations() {
  // Redux: useSelector, useDispatch
  const userExtension = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.extension;
    }
  });
  const userName = useSelector((state) => {
    if (state.userDetails.details.ControlActEvent) {
      return state.userDetails.details.ControlActEvent.Subject.Value[0]
        .UserRoleProfile[0].UserID.identifierName;
    }
  });
  const patientID = useSelector((state) => {
    if (state.selectedPatient.patient) {
      return state.selectedPatient.patient;
    }
  });
  const patientName = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].name;
    }
  });
  const encounterID = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].encounterID;
    }
  });
  const dispatch = useDispatch();

  // State: Local state
  const [isCEDObs, setIsCEDObs] = useState(true);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isPaediatricObs, setIsPaediatricObs] = useState(true);
  const [isPOPSHistory, setIsPOPSHistory] = useState(false);
  const [isPOPSHistorySubPage, setISPOPSHistorySubPage] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isUrineObs, setIsUrineObs] = useState(false);

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

  // onClick: Functions for rendering subPages
  function renderPaediatricObs() {
    setIsCEDObs(true);
    setIsNeuroObs(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
    dispatch(addPopsAssessmentDateTime(putEditedNewDateTime));
    dispatch(addPopsAssessmentEncounterID(encounterID));
    dispatch(addPopsAssessmentPatientID(patientID));
    dispatch(addPopsAssessmentPatientName(patientName));
    dispatch(addPopsAssessmentPractionerName(userName));
    dispatch(addPopsAssessmentPractionerID(userExtension));
    // TODO: REQUIRES IMMEDIATE ATTENTION
    dispatch(addPopsAssessmentRTGCEDObservationsPOPSScore("6"));
    dispatch(
      addPopsAssessmentRTGChildObsComments(
        "This is a test comment - DEVELOPMENT"
      )
    );
    dispatch(addPopsAssessmentSysObsNeuroEDObsAVPU("Alert"));
    dispatch(addPopsAssessmentSysObsNeuroPatientrackPainScore("3"));
  }
  function renderPOPSHistory() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(true);
    setISPOPSHistorySubPage(true);
    setIsSave(false);
    setIsUrineObs(false);
  }
  function renderCEDObs() {
    setIsCEDObs(true);
    setIsNeuroObs(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
  }
  function renderNeuroObs() {
    setIsCEDObs(false);
    setIsNeuroObs(true);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(false);
  }
  function renderUrineObs() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(false);
    setIsUrineObs(true);
  }
  function renderSave() {
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsSave(true);
    setIsUrineObs(false);
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
