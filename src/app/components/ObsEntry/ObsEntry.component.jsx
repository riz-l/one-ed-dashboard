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
  const questionnaireResponseDetails = useSelector(
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
                {questionnaireResponseDetails.SysObsNeuroPainScore
                  ? questionnaireResponseDetails.SysObsNeuroPainScore
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Patient Pain Score: ">
                {questionnaireResponseDetails.SysObsNeuroPatientrackPainScore
                  ? questionnaireResponseDetails.SysObsNeuroPatientrackPainScore
                  : "N/A"}
              </Display>

              <Display labelText="Observations POPS Score: ">
                {questionnaireResponseDetails.RTGCEDObservationsPOPSScore
                  ? questionnaireResponseDetails.RTGCEDObservationsPOPSScore
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular Pulse Rate Value: ">
                {questionnaireResponseDetails.SysObsCardiovascPulseRateValueRTG
                  ? questionnaireResponseDetails.SysObsCardiovascPulseRateValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular BP Systolic Value: ">
                {questionnaireResponseDetails.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  ? questionnaireResponseDetails.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular BP Diastolic Value: ">
                {questionnaireResponseDetails.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  ? questionnaireResponseDetails.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Rate: ">
                {questionnaireResponseDetails.RTG_RespiratoryRate
                  ? questionnaireResponseDetails.RTG_RespiratoryRate
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Target SATS9498 Value: ">
                {questionnaireResponseDetails.SysObsRespiratoryTargetSATS9498ValueRTG
                  ? questionnaireResponseDetails.SysObsRespiratoryTargetSATS9498ValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory Supplemental Oxygen Type Options: ">
                {questionnaireResponseDetails.SysObsRespiratorySupplementalOxygenTypeOptions
                  ? questionnaireResponseDetails.SysObsRespiratorySupplementalOxygenTypeOptions
                  : "N/A"}
              </Display>

              <Display labelText="Body Temperature Value: ">
                {questionnaireResponseDetails.RegObsBodyTemperatureValueRTG
                  ? questionnaireResponseDetails.RegObsBodyTemperatureValueRTG
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Any Age Other): ">
                {questionnaireResponseDetails.IntervenCEDObsAnyAgeOtherScore
                  ? questionnaireResponseDetails.IntervenCEDObsAnyAgeOtherScore
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Any Age Gut Feeling): ">
                {questionnaireResponseDetails.IntervenCEDObsAnyAgeGutFeelingScore
                  ? questionnaireResponseDetails.IntervenCEDObsAnyAgeGutFeelingScore
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous CED Obs (Breathing): ">
                {questionnaireResponseDetails.IntervenCEDObsAnyAgeBreathingScore
                  ? questionnaireResponseDetails.IntervenCEDObsAnyAgeBreathingScore
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value #1: ">
                {questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_1
                  ? questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_1
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value #2: ">
                {questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_2
                  ? questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_2
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Display labelText="Neuro AVPU Score Value #3: ">
                {questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_3
                  ? questionnaireResponseDetails.SysObsNeuroAVPUScoreValue_3
                  : "N/A"}
              </Display>

              <Display labelText="Neuro AVPU Score Value: ">
                {questionnaireResponseDetails.SysObsNeuroAVPUScoreValue
                  ? questionnaireResponseDetails.SysObsNeuroAVPUScoreValue
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs AVPU: ">
                {questionnaireResponseDetails.SysObsNeuroEDObsAVPU
                  ? questionnaireResponseDetails.SysObsNeuroEDObsAVPU
                  : "N/A"}
              </Display>

              <Display labelText="Body Height Value - Body Height Comp: ">
                {questionnaireResponseDetails.RegObsBodyHeightValue_RegObsBodyHeightComp
                  ? questionnaireResponseDetails.RegObsBodyHeightValue_RegObsBodyHeightComp
                  : "N/A"}
              </Display>

              <Display labelText="Body Weight Value - Body Weight Comp: ">
                {questionnaireResponseDetails.RegObsBodyWeightValue_RegObsBodyWeightComp
                  ? questionnaireResponseDetails.RegObsBodyWeightValue_RegObsBodyWeightComp
                  : "N/A"}
              </Display>

              <Display labelText="RTG Child Obs Comments: ">
                {questionnaireResponseDetails.RTGChildObsComments
                  ? capitalizeFirstLetter(
                      questionnaireResponseDetails.RTGChildObsComments
                    )
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Chem Blood Glucose Random: ">
                {questionnaireResponseDetails.IntervenPathTestChemBloodGlucoseRandom
                  ? questionnaireResponseDetails.IntervenPathTestChemBloodGlucoseRandom
                  : "N/A"}
              </Display>

              <Display labelText="Respiratory ED Obs PEFR L/min: ">
                {questionnaireResponseDetails.SysObsRespiratoryEDObsPEFRLMin
                  ? questionnaireResponseDetails.SysObsRespiratoryEDObsPEFRLMin
                  : "N/A"}
              </Display>

              <Display labelText="Cardiovascular CED Obs Capillary Refill: ">
                {questionnaireResponseDetails.SysObsCardiovascCEDObsCapillaryRefill
                  ? questionnaireResponseDetails.SysObsCardiovascCEDObsCapillaryRefill
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Eyes: ">
                {questionnaireResponseDetails.SysObsNeuroEDObsGCSEyes
                  ? questionnaireResponseDetails.SysObsNeuroEDObsGCSEyes
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Verbal: ">
                {questionnaireResponseDetails.SysObsNeuroEDObsGCSVerbal
                  ? questionnaireResponseDetails.SysObsNeuroEDObsGCSVerbal
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Motor: ">
                {questionnaireResponseDetails.SysObsNeuroEDObsGCSMotor
                  ? questionnaireResponseDetails.SysObsNeuroEDObsGCSMotor
                  : "N/A"}
              </Display>

              <Display labelText="Neuro ED Obs GCS Total: ">
                {questionnaireResponseDetails.SysObsNeuroEDObsGCSTotal
                  ? questionnaireResponseDetails.SysObsNeuroEDObsGCSTotal
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupils Equal: ">
                {questionnaireResponseDetails.SysObsNeuroPupilsEqual
                  ? questionnaireResponseDetails.SysObsNeuroPupilsEqual
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Size Left: ">
                {questionnaireResponseDetails.SysObsNeuroPupilSizeLeft
                  ? questionnaireResponseDetails.SysObsNeuroPupilSizeLeft
                  : "N/A"}
              </Display>
            </Grid.Column>

            <Grid.Column>
              <Display labelText="Neuro Pupil Size Right: ">
                {questionnaireResponseDetails.SysObsNeuroPupilSizeRight
                  ? questionnaireResponseDetails.SysObsNeuroPupilSizeRight
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Reactivity Left: ">
                {questionnaireResponseDetails.SysObsNeuroPupilReactivityLeft
                  ? questionnaireResponseDetails.SysObsNeuroPupilReactivityLeft
                  : "N/A"}
              </Display>

              <Display labelText="Neuro Pupil Reactivity Right: ">
                {questionnaireResponseDetails.SysObsNeuroPupilReactivityRight
                  ? questionnaireResponseDetails.SysObsNeuroPupilReactivityRight
                  : "N/A"}
              </Display>

              <Display labelText="Arm Limb Movement Left: ">
                {questionnaireResponseDetails.RegObsArmLimbMovementLeft
                  ? questionnaireResponseDetails.RegObsArmLimbMovementLeft
                  : "N/A"}
              </Display>

              <Display labelText="Arm Limb Movement Right: ">
                {questionnaireResponseDetails.RegObsArmLimbMovementRight
                  ? questionnaireResponseDetails.RegObsArmLimbMovementRight
                  : "N/A"}
              </Display>

              <Display labelText="Leg Limb Movement Left: ">
                {questionnaireResponseDetails.RegObsLegLimbMovementLeft
                  ? questionnaireResponseDetails.RegObsLegLimbMovementLeft
                  : "N/A"}
              </Display>

              <Display labelText="Leg Limb Movement Right: ">
                {questionnaireResponseDetails.RegObsLegLimbMovementRight
                  ? questionnaireResponseDetails.RegObsLegLimbMovementRight
                  : "N/A"}
              </Display>

              <Display labelText="Admin NAD: ">
                {questionnaireResponseDetails.AdminNAD
                  ? questionnaireResponseDetails.AdminNAD
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Protein Level: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisProteinLevel
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisProteinLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Blood Level: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisBloodLevel
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisBloodLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Glucose Level: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisGlucoseLevel
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisGlucoseLevel
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis WC Numbered: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisWCNumbered
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisWCNumbered
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Nitrites: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisNitrites
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisNitrites
                  : "N/A"}
              </Display>

              <Display labelText="Intervenous Urine Analysis Ketone Level: ">
                {questionnaireResponseDetails.IntervenPathTestUrinalysisKetoneLevel
                  ? questionnaireResponseDetails.IntervenPathTestUrinalysisKetoneLevel
                  : "N/A"}
              </Display>

              <Display labelText="POPS Score #1: ">
                {questionnaireResponseDetails.RTGCEDObservationsPOPSScore_1
                  ? questionnaireResponseDetails.RTGCEDObservationsPOPSScore_1
                  : "N/A"}
              </Display>
            </Grid.Column>
          </Grid>
        </DataContainer>
      </ReactModal>
    </Container>
  );
}
