// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Wrapper } from "./CEDObs.elements";

// Import: Components
import { Display, Grid, Text } from "../../..";

// SubPage: CEDObs
export default function CEDObs() {
  // Redux: useSelector
  const questionnaireResponseDetail = useSelector((state) => {
    if (state.clinicalNotes.notes.questionnaireResponseDetail) {
      return state.clinicalNotes.notes.questionnaireResponseDetail;
    }
  });

  return (
    <>
      <Container data-testid={"cedObs"}>
        <Wrapper>
          <Text heading as="h2">
            CED Observations
          </Text>

          <Grid>
            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="painScore" labelText="Pain Score">
                  {questionnaireResponseDetail.SysObsNeuroPainScore
                    ? questionnaireResponseDetail.SysObsNeuroPainScore
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="pulseRate" labelText="Pulse Rate">
                  {questionnaireResponseDetail.SysObsCardiovascPulseRateValueRTG
                    ? questionnaireResponseDetail.SysObsCardiovascPulseRateValueRTG
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="bpSystolic" labelText="BP Systolic">
                  {questionnaireResponseDetail.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    ? questionnaireResponseDetail.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="bpDiastolic" labelText="BP Diastolic">
                  {questionnaireResponseDetail.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    ? questionnaireResponseDetail.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="respRate" labelText="Resp Rate">
                  {questionnaireResponseDetail.RTG_RespiratoryRate
                    ? questionnaireResponseDetail.RTG_RespiratoryRate
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="oxygenSATS" labelText="Oxygen SATS">
                  {questionnaireResponseDetail.SysObsRespiratoryTargetSATS9498ValueRTG
                    ? questionnaireResponseDetail.SysObsRespiratoryTargetSATS9498ValueRTG
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="supplementalO2" labelText="Supplemental O2">
                  {questionnaireResponseDetail.SysObsRespiratorySupplementalOxygenTypeOptions
                    ? questionnaireResponseDetail.SysObsRespiratorySupplementalOxygenTypeOptions
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="temp" labelText="Temp">
                  {questionnaireResponseDetail.RegObsBodyTemperatureValueRTG
                    ? questionnaireResponseDetail.RegObsBodyTemperatureValueRTG
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="weightKg" labelText="Weight (kg)">
                  {questionnaireResponseDetail.RegObsBodyWeightValue_RegObsBodyWeightComp
                    ? questionnaireResponseDetail.RegObsBodyWeightValue_RegObsBodyWeightComp
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="heightCm" labelText="Height (cm)">
                  {questionnaireResponseDetail.RegObsBodyHeightValue_RegObsBodyHeightComp
                    ? questionnaireResponseDetail.RegObsBodyHeightValue_RegObsBodyHeightComp
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="bloodSugar" labelText="Blood sugar (mmol/l)">
                  {questionnaireResponseDetail.IntervenPathTestChemBloodGlucoseRandom
                    ? questionnaireResponseDetail.IntervenPathTestChemBloodGlucoseRandom
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="pefr" labelText="PEFR (l/min)">
                  {questionnaireResponseDetail.SysObsRespiratoryEDObsPEFRLMin
                    ? questionnaireResponseDetail.SysObsRespiratoryEDObsPEFRLMin
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>

            <Grid.Column>
              <Grid.Item>
                <Display htmlFor="capillaryRefill" labelText="Capillary Refill">
                  {questionnaireResponseDetail.SysObsCardiovascCEDObsCapillaryRefill
                    ? questionnaireResponseDetail.SysObsCardiovascCEDObsCapillaryRefill
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsOther" labelText="POPS Other">
                  {questionnaireResponseDetail.IntervenCEDObsAnyAgeOtherScore
                    ? questionnaireResponseDetail.IntervenCEDObsAnyAgeOtherScore
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsGutFeeling" labelText="POPS Gut Feeling">
                  {questionnaireResponseDetail.IntervenCEDObsAnyAgeGutFeelingScore
                    ? questionnaireResponseDetail.IntervenCEDObsAnyAgeGutFeelingScore
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsBreathing" labelText="POPS Breathing">
                  {questionnaireResponseDetail.IntervenCEDObsAnyAgeBreathingScore
                    ? questionnaireResponseDetail.IntervenCEDObsAnyAgeBreathingScore
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display
                  htmlFor="avpu"
                  labelText={
                    questionnaireResponseDetail.SysObsNeuroAVPUScoreValue
                      ? `AVPU: ${questionnaireResponseDetail.SysObsNeuroAVPUScoreValue}`
                      : `AVPU: N/A`
                  }
                >
                  {questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_1 ||
                  questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_2 ||
                  questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_3
                    ? `Score A: ${questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_1}, Score B: ${questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_2}, Score C: ${questionnaireResponseDetail.SysObsNeuroAVPUScoreValue_3}`
                    : "N/A"}
                </Display>
              </Grid.Item>

              <Grid.Item>
                <Display htmlFor="popsScore" labelText="POPS Score">
                  {questionnaireResponseDetail.RTGCEDObservationsPOPSScore_1
                    ? questionnaireResponseDetail.RTGCEDObservationsPOPSScore_1
                    : "N/A"}
                </Display>
              </Grid.Item>
            </Grid.Column>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
