// Import: Packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientAllergies,
  getPatientAlerts,
} from "../../../redux/slices/selectedPatientSlice";
import {
  addPopsAssessmentDateTime,
  addPopsAssessmentEncounterID,
  addPopsAssessmentPatientID,
  addPopsAssessmentPatientName,
  addPopsAssessmentPractionerID,
  addPopsAssessmentPractionerName,
  addPopsAssessmentRTGChildObsComments,
  addPopsAssessmentRTGCEDObservationsPOPSScore,
  addPopsAssessmentSysObsNeuroEDObsAVPU,
  addPopsAssessmentSysObsNeuroPatientrackPainScore,
} from "../../../redux/slices/triageSlice";
import moment from "moment";

// Import: Assets
import { ReactComponent as AlertsIcon } from "../../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../../assets/img/icon/allergies.svg";
import { ReactComponent as CEDIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as NeuroObsIcon } from "../../../assets/img/icon/neuroObs.svg";
import { ReactComponent as NEWSIcon } from "../../../assets/img/icon/NEWS.svg";
import { ReactComponent as POPSHistoryIcon } from "../../../assets/img/icon/popsHistory.svg";
import { ReactComponent as SaveIcon } from "../../../assets/img/icon/save.svg";
import { ReactComponent as TriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as UrineObsIcon } from "../../../assets/img/icon/urineObs.svg";

// Import: Elements
import { Container, ContentWrapper, Wrapper } from "./Triage.elements";

// Import: Components, SubPages
import {
  PageTitle,
  PatientDemographics,
  PrimaryNavigation,
  ReportSection,
  SecondaryNavigation,
} from "../../components";
import {
  Alerts,
  Allergies,
  CDCForms,
  CEDObs,
  NeuroObs,
  NEWS2,
  POPSHistory,
  RWWEdClinicianAssessment,
  RWWEdNurseAssessment,
  Save,
  TriageAndStream,
  UrineObs,
} from "./subPages";

// Page: Triage
export default function Triage() {
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
      return state.selectedPatient.patientData[0].patientID;
    }
  });
  const patientName = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].name;
    }
  });
  const patientAlerts = useSelector((state) => {
    if (state.selectedPatient.patientAlerts) {
      return state.selectedPatient.patientAlerts;
    }
  });
  const patientAllergies = useSelector((state) => {
    if (state.selectedPatient.patientAllergies) {
      return state.selectedPatient.patientAllergies;
    }
  });
  const encounterID = useSelector((state) => {
    if (state.selectedPatient.patientData[0]) {
      return state.selectedPatient.patientData[0].encounterID;
    }
  });
  const dispatch = useDispatch();

  // State: Local state
  const [isAlerts, setIsAlerts] = useState(false);
  const [isAllergies, setIsAllergies] = useState(false);
  const [isCDCForms, setIsCDCForms] = useState(false);
  const [isCEDObs, setIsCEDObs] = useState(false);
  const [isNeuroObs, setIsNeuroObs] = useState(false);
  const [isNEWS, setIsNEWS] = useState(false);
  const [isNEWS2, setIsNEWS2] = useState(false);
  const [isPaediatricObs, setIsPaediatricObs] = useState(false);
  const [isPOPSHistory, setIsPOPSHistory] = useState(false);
  const [isPOPSHistorySubPage, setISPOPSHistorySubPage] = useState(false);
    const [isRWWEdClinicianAssessment, setIsRWWEdClinicianAssessment] =
    useState(false);
  const [isRWWEdNurseAssessment, setIsRWWEdNurseAssessment] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isTriage, setIsTriage] = useState(true);
  const [isTriageAndStream, setIsTriageAndStream] = useState(true);
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

  // Effect: Fetches Alerts and Allergies
  useEffect(() => {
    dispatch(getPatientAlerts());
    dispatch(getPatientAllergies());
  }, [dispatch]);

  // onClick: Functions for rendering subPages
  function renderAlerts() {
    setIsAlerts(true);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(true);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderAllergies() {
    setIsAlerts(false);
    setIsAllergies(true);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(true);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderCDCForms() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(true);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(true);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderCEDObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(true);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderNeuroObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(true);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderNEWS() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(true);
    setIsNEWS2(true);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderNEWS2() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(true);
    setIsNEWS2(true);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderPaediatricObs() {
    dispatch(addPopsAssessmentDateTime(putEditedNewDateTime));
    dispatch(addPopsAssessmentEncounterID(encounterID));
    dispatch(addPopsAssessmentPatientID(patientID));
    dispatch(addPopsAssessmentPatientName(patientName));
    dispatch(addPopsAssessmentPractionerID(userExtension));
    dispatch(addPopsAssessmentPractionerName(userName));
    //#region #TODO: REQUIRES IMMEDIATE ATTENTION
    dispatch(addPopsAssessmentRTGCEDObservationsPOPSScore("6"));
    dispatch(
      addPopsAssessmentRTGChildObsComments("This is a test comment - JLayton")
    );
    dispatch(addPopsAssessmentSysObsNeuroEDObsAVPU("Alert"));
    dispatch(addPopsAssessmentSysObsNeuroPatientrackPainScore("3"));
    //#endregion /REQUIRES IMMEDIATE ATTENTION
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(true);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }

  function renderPOPSHistory() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(true);
    setISPOPSHistorySubPage(true);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderRWWEdClinicianAssessment() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(true);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(true);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderRWWEdNurseAssessment() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(true);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(true);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
    function renderSave() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(true);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(false);
  }
  function renderTriage() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
    setIsUrineObs(false);
  }
  function renderTriageAndStream() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(false);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(true);
    setIsTriageAndStream(true);
    setIsUrineObs(false);
  }
  function renderUrineObs() {
    setIsAlerts(false);
    setIsAllergies(false);
    setIsCDCForms(false);
    setIsCEDObs(false);
    setIsNeuroObs(false);
    setIsNEWS(false);
    setIsNEWS2(false);
    setIsPaediatricObs(true);
    setIsPOPSHistory(false);
    setISPOPSHistorySubPage(false);
    setIsRWWEdClinicianAssessment(false);
    setIsRWWEdNurseAssessment(false);
    setIsSave(false);
    setIsTriage(false);
    setIsTriageAndStream(false);
    setIsUrineObs(true);
  }

  return (
    <>
      <Container data-testid={"triage"}>
        <Wrapper>
          <PageTitle
            heading="Triage"
            subheading="Complete Triage, POPS and NEWS"
          />

          <PatientDemographics />

          <ContentWrapper>
            <ReportSection
              primaryNavigation={
                <PrimaryNavigation>
                  <PrimaryNavigation.Item
                    isActive={isTriage ? true : false}
                    onClick={renderTriage}
                  >
                    <PrimaryNavigation.Text>Triage</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

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
                    isActive={isNEWS ? true : false}
                    onClick={renderNEWS}
                  >
                    <PrimaryNavigation.Text>NEWS</PrimaryNavigation.Text>
                  </PrimaryNavigation.Item>

                  <PrimaryNavigation.Item
                    isActive={isCDCForms ? true : false}
                    onClick={renderCDCForms}
                  >
                    <PrimaryNavigation.Text>CDC Forms</PrimaryNavigation.Text>
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
                  {isTriage ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isTriageAndStream ? true : false}
                        onClick={renderTriageAndStream}
                      >
                        <SecondaryNavigation.Icon>
                          <TriageIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Triage
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isAlerts ? true : false}
                        onClick={renderAlerts}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientAlerts && patientAlerts.length > 0
                              ? true
                              : false
                          }
                        >
                          <AlertsIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Alerts
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isAllergies ? true : false}
                        onClick={renderAllergies}
                      >
                        <SecondaryNavigation.Icon
                          isRed={
                            patientAllergies && patientAllergies.length > 0
                              ? true
                              : false
                          }
                        >
                          <AllergiesIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          Allergies
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isPaediatricObs ? (
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
                  ) : isNEWS ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isNEWS2 ? true : false}
                        onClick={renderNEWS2}
                      >
                        <SecondaryNavigation.Icon>
                          <NEWSIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          NEWS2
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>
                    </>
                  ) : isCDCForms ? (
                    <>
                      <SecondaryNavigation.Item
                        isActive={isRWWEdClinicianAssessment ? true : false}
                        onClick={renderRWWEdClinicianAssessment}
                      >
                        <SecondaryNavigation.Icon>
                          <SaveIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          RWW Ed Clinician Assessment
                        </SecondaryNavigation.Text>
                      </SecondaryNavigation.Item>

                      <SecondaryNavigation.Item
                        isActive={isRWWEdNurseAssessment ? true : false}
                        onClick={renderRWWEdNurseAssessment}
                      >
                        <SecondaryNavigation.Icon>
                          <SaveIcon />
                        </SecondaryNavigation.Icon>
                        <SecondaryNavigation.Text>
                          RWW Ed Nurse Assessment
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
                isTriageAndStream ? (
                  <TriageAndStream />
                ) : isAlerts ? (
                  <Alerts />
                ) : isAllergies ? (
                  <Allergies />
                ) : isCEDObs ? (
                  <CEDObs />
                ) : isNeuroObs ? (
                  <NeuroObs />
                ) : isUrineObs ? (
                  <UrineObs />
                ) : isPOPSHistory ? (
                  <POPSHistory />
                ) : isNEWS2 ? (
                  <NEWS2 />
                ) : isRWWEdClinicianAssessment ? (
                  <RWWEdClinicianAssessment />
                ) : isRWWEdNurseAssessment ? (
                  <RWWEdNurseAssessment />
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
