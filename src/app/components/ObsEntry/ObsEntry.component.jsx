// Import: Packages
import React, { useState } from "react";
import { getObsQuestionnaireResponseDetail } from "../../../redux/slices/clinicalNotesSlice";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ReactModal from "react-modal";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { ReactComponent as ObsIcon } from "../../../assets/img/icon/obs.svg";

// Import: Elements
import {
  Arrow,
  ArrowContainer,
  Container,
  DataContainer,
  EntryContainer,
  Detail,
  Header,
  Heading,
  Icon,
  Left,
  Right,
  Status,
  Wrapper,
} from "./ObsEntry.elements";
import "./ObsEntry.styles.css";

// Import: Components
import { Button, Display, Grid, PageTitle } from "../index";

// Component: ObsEntry
export default function ObsEntry({ id, dateTime, user, status }) {
  // Redux:
  const questionnaireResponseDetail = useSelector(
    (state) => state.clinicalNotes.notes.questionnaireResponseDetail
  );
  const dispatch = useDispatch();

  // State: isModalOpen
  const [isModalOpen, setIsModalOpen] = useState(false);

  // onClick: Opens Modal
  function openModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
    dispatch(getObsQuestionnaireResponseDetail(id));
  }

  // onClick: Closes Modal
  function closeModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <Container data-testid={"obsEntry"}>
      <Wrapper onClick={openModal}>
        <EntryContainer>
          <Left>
            <Heading>
              <Icon>
                <ObsIcon />
              </Icon>
              <h3>
                {dateTime
                  ? moment(dateTime).format(
                      "[Date:] MMMM Do YYYY, [Time:] HH:mm:ss"
                    )
                  : "Date/Time"}
              </h3>
            </Heading>

            <Detail>
              <Display labelText="User: " left>
                {user && user.length > 25
                  ? user.substring(0, 25) + "..."
                  : user && user.length < 25
                  ? user
                  : "User"}
              </Display>
            </Detail>
          </Left>

          <Right>
            <Status>
              <p>{status ? status : "Status"}</p>
            </Status>
          </Right>

          <ArrowContainer>
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>

      <ReactModal
        isOpen={isModalOpen}
        contentLabel={"Default Entry"}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={100}
        ariaHideApp={false}
      >
        <Header>
          <PageTitle
            backgroundColor="#ffffff"
            heading="Previous Obs"
            padding="0 0 2rem 0"
            subheading={
              dateTime
                ? moment(dateTime).format(
                    "[Date:] MMMM Do YYYY, [Time:] HH:mm:ss"
                  )
                : "Date/Time"
            }
          />

          <Button text="Close" onClick={closeModal} />
        </Header>

        <DataContainer>
          <Grid>
            <Grid.Column>
              <Display labelText="Neuro Pain Score: ">
                {questionnaireResponseDetail.SysObsNeuroPainScore
                  ? questionnaireResponseDetail.SysObsNeuroPainScore
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Patient Pain Score: ">
                {questionnaireResponseDetail.SysObsNeuroPatientrackPainScore
                  ? questionnaireResponseDetail.SysObsNeuroPatientrackPainScore
                  : "N/A"}
              </Display>

              <Display labelText="Observations POPS Score: ">
                {questionnaireResponseDetail.RTGCEDObservationsPOPSScore
                  ? questionnaireResponseDetail.RTGCEDObservationsPOPSScore
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular Pulse Rate Value: ">
                {questionnaireResponseDetail.SysObsCardiovascPulseRateValueRTG
                  ? questionnaireResponseDetail.SysObsCardiovascPulseRateValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular BP Systolic Value: ">
                {questionnaireResponseDetail.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  ? questionnaireResponseDetail.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular BP Diastolic Value: ">
                {questionnaireResponseDetail.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  ? questionnaireResponseDetail.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Rate: ">
                {questionnaireResponseDetail.RTG_RespiratoryRate
                  ? questionnaireResponseDetail.RTG_RespiratoryRate
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Target SATS9498 Value: ">
                {questionnaireResponseDetail.SysObsRespiratoryTargetSATS9498ValueRTG
                  ? questionnaireResponseDetail.SysObsRespiratoryTargetSATS9498ValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Supplemental Oxygen Type Options: ">
                {questionnaireResponseDetail.SysObsRespiratorySupplementalOxygenTypeOptions
                  ? questionnaireResponseDetail.SysObsRespiratorySupplementalOxygenTypeOptions
                  : "N/A"}
              </Display>

              <Display labelText="Body Temperature Value: ">
                {questionnaireResponseDetail.RegObsBodyTemperatureValueRTG
                  ? questionnaireResponseDetail.RegObsBodyTemperatureValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Any Age Other): ">
                {questionnaireResponseDetail.IntervenCEDObsAnyAgeOtherScore
                  ? questionnaireResponseDetail.IntervenCEDObsAnyAgeOtherScore
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Any Age Gut Feeling): ">
                {questionnaireResponseDetail.IntervenCEDObsAnyAgeGutFeelingScore
                  ? questionnaireResponseDetail.IntervenCEDObsAnyAgeGutFeelingScore
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Breathing): ">
                {questionnaireResponseDetail.IntervenCEDObsAnyAgeBreathingScore
                  ? questionnaireResponseDetail.IntervenCEDObsAnyAgeBreathingScore
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value #1: ">
                {questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_1
                  ? questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_1
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value #2: ">
                {questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_2
                  ? questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_2
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Display labelText="Neuro AVPU Score Value #3: ">
                {questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_3
                  ? questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_3
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value: ">
                {questionnaireResponseDetail.SysObsNeuroAVPUScoreValue
                  ? questionnaireResponseDetail.SysObsNeuroAVPUScoreValue
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs AVPU: ">
                {questionnaireResponseDetail.SysObsNeuroEDObsAVPU
                  ? questionnaireResponseDetail.SysObsNeuroEDObsAVPU
                  : "N/A"}
              </Display>

              <Display labelText="Body Height Value - Body Height Comp: ">
                {questionnaireResponseDetail.RegObsBodyHeightValue_RegObsBodyHeightComp
                  ? questionnaireResponseDetail.RegObsBodyHeightValue_RegObsBodyHeightComp
                  : "N/A"}
              </Display>

              <Display labelText="Body Weight Value - Body Weight Comp: ">
                {questionnaireResponseDetail.RegObsBodyWeightValue_RegObsBodyWeightComp
                  ? questionnaireResponseDetail.RegObsBodyWeightValue_RegObsBodyWeightComp
                  : "N/A"}
              </Display>

              <Display labelText="RTG Child Obs Comments: ">
                {questionnaireResponseDetail.RTGChildObsComments
                  ? capitalizeFirstLetter(
                      questionnaireResponseDetail.RTGChildObsComments
                    )
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Chem Blood Glucose Random: ">
                {questionnaireResponseDetail.IntervenPathTestChemBloodGlucoseRandom
                  ? questionnaireResponseDetail.IntervenPathTestChemBloodGlucoseRandom
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory ED Obs PEFR L/min: ">
                {questionnaireResponseDetail.SysObsRespiratoryEDObsPEFRLMin
                  ? questionnaireResponseDetail.SysObsRespiratoryEDObsPEFRLMin
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular CED Obs Capillary Refill: ">
                {questionnaireResponseDetail.SysObsCardiovascCEDObsCapillaryRefill
                  ? questionnaireResponseDetail.SysObsCardiovascCEDObsCapillaryRefill
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Eyes: ">
                {questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                  ? questionnaireResponseDetail.SysObsNeuroEDObsGCSEyes
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Verbal: ">
                {questionnaireResponseDetail.SysObsNeuroEDObsGCSVerbal
                  ? questionnaireResponseDetail.SysObsNeuroEDObsGCSVerbal
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Motor: ">
                {questionnaireResponseDetail.SysObsNeuroEDObsGCSMotor
                  ? questionnaireResponseDetail.SysObsNeuroEDObsGCSMotor
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Total: ">
                {questionnaireResponseDetail.SysObsNeuroEDObsGCSTotal
                  ? questionnaireResponseDetail.SysObsNeuroEDObsGCSTotal
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupils Equal: ">
                {questionnaireResponseDetail.SysObsNeuroPupilsEqual
                  ? questionnaireResponseDetail.SysObsNeuroPupilsEqual
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Size Left: ">
                {questionnaireResponseDetail.SysObsNeuroPupilSizeLeft
                  ? questionnaireResponseDetail.SysObsNeuroPupilSizeLeft
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Display labelText="Neuro Pupil Size Right: ">
                {questionnaireResponseDetail.SysObsNeuroPupilSizeRight
                  ? questionnaireResponseDetail.SysObsNeuroPupilSizeRight
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Reactivity Left: ">
                {questionnaireResponseDetail.SysObsNeuroPupilReactivityLeft
                  ? questionnaireResponseDetail.SysObsNeuroPupilReactivityLeft
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Reactivity Right: ">
                {questionnaireResponseDetail.SysObsNeuroPupilReactivityRight
                  ? questionnaireResponseDetail.SysObsNeuroPupilReactivityRight
                  : "N/A"}
              </Display>

              <Display labelText="Arm Limb Movement Left: ">
                {questionnaireResponseDetail.RegObsArmLimbMovementLeft
                  ? questionnaireResponseDetail.RegObsArmLimbMovementLeft
                  : "N/A"}
              </Display>

              <Display labelText="Arm Limb Movement Right: ">
                {questionnaireResponseDetail.RegObsArmLimbMovementRight
                  ? questionnaireResponseDetail.RegObsArmLimbMovementRight
                  : "N/A"}
              </Display>

              <Display labelText="Leg Limb Movement Left: ">
                {questionnaireResponseDetail.RegObsLegLimbMovementLeft
                  ? questionnaireResponseDetail.RegObsLegLimbMovementLeft
                  : "N/A"}
              </Display>

              <Display labelText="Leg Limb Movement Right: ">
                {questionnaireResponseDetail.RegObsLegLimbMovementRight
                  ? questionnaireResponseDetail.RegObsLegLimbMovementRight
                  : "N/A"}
              </Display>

              <Display labelText="Admin NAD: ">
                {questionnaireResponseDetail.AdminNAD
                  ? questionnaireResponseDetail.AdminNAD
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Protein Level: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisProteinLevel
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisProteinLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Blood Level: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisBloodLevel
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisBloodLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Glucose Level: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisGlucoseLevel
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisGlucoseLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis WC Numbered: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisWCNumbered
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisWCNumbered
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Nitrites: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisNitrites
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisNitrites
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Ketone Level: ">
                {questionnaireResponseDetail.IntervenPathTestUrinalysisKetoneLevel
                  ? questionnaireResponseDetail.IntervenPathTestUrinalysisKetoneLevel
                  : "N/A"}
              </Display>

              <Display labelText="POPS Score #1: ">
                {questionnaireResponseDetail.RTGCEDObservationsPOPSScore_1
                  ? questionnaireResponseDetail.RTGCEDObservationsPOPSScore_1
                  : "N/A"}
              </Display>
            </Grid.Column>
          </Grid>
        </DataContainer>
      </ReactModal>
    </Container>
  );
}
