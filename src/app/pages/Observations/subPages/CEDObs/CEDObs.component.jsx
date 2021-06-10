// Import: Packages
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopsAssessmentIntervenCEDObsAnyAgeBreathingScore,
  addPopsAssessmentIntervenCEDObsAnyAgeOtherScore,
  addPopsAssessmentIntervenCEDObsAnyAgeGutFeelingScore,
  addPopsAssessmentIntervenPathTestChemBloodGlucoseRandom,
  addPopsAssessmentRegObsBodyHeightValue_RegObsBodyHeightComp,
  addPopsAssessmentRegObsBodyTemperatureValueRTG,
  addPopsAssessmentRegObsBodyWeightValue_RegObsBodyWeightComp,
  addPopsAssessmentRTGCEDObservationsPOPSScore_1,
  addPopsAssessmentRTG_RespiratoryRate,
  addPopsAssessmentSysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG,
  addPopsAssessmentSysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG,
  addPopsAssessmentSysObsCardiovascCEDObsCapillaryRefill,
  addPopsAssessmentSysObsCardiovascPulseRateValueRTG,
  addPopsAssessmentSysObsNeuroAVPUScoreValue,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_1,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_2,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_3,
  addPopsAssessmentSysObsNeuroPainScore,
  addPopsAssessmentSysObsRespiratoryEDObsPEFRLMin,
  addPopsAssessmentSysObsRespiratorySupplementalOxygenTypeOptions,
  addPopsAssessmentSysObsRespiratoryTargetSATS9498ValueRTG,
} from "../../../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Wrapper } from "./CEDObs.elements";

// Import: Components
import { Form, Grid, Text } from "../../../../components";

// SubPage: CEDObs
export default function CEDObs() {
  // Redux: useSelector, useDispatch
  const popsAssessment = useSelector((state) => {
    if (state.triage.popsAssessment) {
      return state.triage.popsAssessment;
    }
  });
  const dispatch = useDispatch();

  // Effect: Populate CEDObs form with AVPU,POPS values on render
  // ... #TODO: Needs to be populated manually via form
  useEffect(() => {
    dispatch(addPopsAssessmentRTGCEDObservationsPOPSScore_1("6"));
    dispatch(addPopsAssessmentSysObsNeuroAVPUScoreValue("0"));
    dispatch(addPopsAssessmentSysObsNeuroAVPUScoreValue_1("2"));
    dispatch(addPopsAssessmentSysObsNeuroAVPUScoreValue_2("2"));
    dispatch(addPopsAssessmentSysObsNeuroAVPUScoreValue_3("2"));
  }, [dispatch]);

  // Ref: Used for CEDObs form
  const bloodSugarRef = useRef();
  const bpDiastolicRef = useRef();
  const bpSystolicRef = useRef();
  const capillaryRefillRef = useRef();
  const heightRef = useRef();
  const oxygenSatsRef = useRef();
  const painScoreRef = useRef();
  const pefrRef = useRef();
  const popsBreathingRef = useRef();
  const popsGutFeelingRef = useRef();
  const popsOtherRef = useRef();
  const pulseRateRef = useRef();
  const respRateRef = useRef();
  const supplementalO2Ref = useRef();
  const tempRef = useRef();
  const weightRef = useRef();

  // Add values to Redux
  const addBloodSugarToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenPathTestChemBloodGlucoseRandom(
        bloodSugarRef.current.value
      )
    );
  };
  const addCapillaryRefillToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsCardiovascCEDObsCapillaryRefill(
        capillaryRefillRef.current.value
      )
    );
  };
  const addHeightToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsBodyHeightValue_RegObsBodyHeightComp(
        heightRef.current.value
      )
    );
  };
  const addOxygenSatsToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsRespiratoryTargetSATS9498ValueRTG(
        oxygenSatsRef.current.value
      )
    );
  };
  const addPainScoreToRedux = () => {
    dispatch(addPopsAssessmentSysObsNeuroPainScore(painScoreRef.current.value));
  };
  const addPefrToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsRespiratoryEDObsPEFRLMin(pefrRef.current.value)
    );
  };
  const addPopsBreathingToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenCEDObsAnyAgeBreathingScore(
        popsBreathingRef.current.value
      )
    );
  };
  const addPopsGutFeelingToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenCEDObsAnyAgeGutFeelingScore(
        popsGutFeelingRef.current.value
      )
    );
  };
  const addPopsOtherToRedux = () => {
    dispatch(
      addPopsAssessmentIntervenCEDObsAnyAgeOtherScore(
        popsOtherRef.current.value
      )
    );
  };
  const addPulseRateToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsCardiovascPulseRateValueRTG(
        pulseRateRef.current.value
      )
    );
  };
  const addRespRateToRedux = () => {
    dispatch(addPopsAssessmentRTG_RespiratoryRate(respRateRef.current.value));
  };
  const addSupplementalO2ToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsRespiratorySupplementalOxygenTypeOptions(
        supplementalO2Ref.current.value
      )
    );
  };
  const addSystolicToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG(
        bpSystolicRef.current.value
      )
    );
  };
  const addDiastolicToRedux = () => {
    dispatch(
      addPopsAssessmentSysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG(
        bpDiastolicRef.current.value
      )
    );
  };
  const addTempToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsBodyTemperatureValueRTG(tempRef.current.value)
    );
  };
  const addWeightToRedux = () => {
    dispatch(
      addPopsAssessmentRegObsBodyWeightValue_RegObsBodyWeightComp(
        weightRef.current.value
      )
    );
  };

  return (
    <>
      <Container data-testid={"cedObs"}>
        <Wrapper>
          <Text heading as="h2">
            CED Observations
          </Text>

          <Form>
            <Grid>
              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="painScore"
                    labelText="Pain Score"
                    onChange={addPainScoreToRedux}
                    options={[
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                    ]}
                    ref={painScoreRef}
                    value={popsAssessment.SysObsNeuroPainScore}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="pulseRate"
                    labelText="Pulse Rate"
                    onChange={addPulseRateToRedux}
                    placeholder="Type a number..."
                    ref={pulseRateRef}
                    type="number"
                    value={popsAssessment.SysObsCardiovascPulseRateValueRTG}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bpSystolic"
                    labelText="BP Systolic "
                    onChange={addSystolicToRedux}
                    placeholder="Type a number..."
                    ref={bpSystolicRef}
                    type="number"
                    value={
                      popsAssessment.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bpDiastolic"
                    labelText="BP Diastolic"
                    onChange={addDiastolicToRedux}
                    placeholder="Type a number..."
                    ref={bpDiastolicRef}
                    type="number"
                    value={
                      popsAssessment.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="respRate"
                    labelText="Resp Rate"
                    onChange={addRespRateToRedux}
                    placeholder="Type a number..."
                    ref={respRateRef}
                    type="number"
                    value={popsAssessment.RTG_RespiratoryRate}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="oxygenSATS"
                    labelText="Oxygen SATS"
                    onChange={addOxygenSatsToRedux}
                    placeholder="Type a number..."
                    ref={oxygenSatsRef}
                    type="number"
                    value={
                      popsAssessment.SysObsRespiratoryTargetSATS9498ValueRTG
                    }
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="supplementalO2"
                    labelText="Supplemental O2"
                    onChange={addSupplementalO2ToRedux}
                    options={[
                      "Room Air 21%",
                      "Venturi",
                      "Non rebreathe 85%",
                      "Nasal = 20 + (4 x litres o2)",
                      "neb-air 21%",
                      "neb-6L 46%",
                    ]}
                    ref={supplementalO2Ref}
                    value={
                      popsAssessment.SysObsRespiratorySupplementalOxygenTypeOptions
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="temp"
                    labelText="Temp"
                    onChange={addTempToRedux}
                    placeholder="Type a number..."
                    ref={tempRef}
                    type="number"
                    value={popsAssessment.RegObsBodyTemperatureValueRTG}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="weightKg"
                    labelText="Weight (kg)"
                    onChange={addWeightToRedux}
                    placeholder="Type a number..."
                    ref={weightRef}
                    type="number"
                    value={
                      popsAssessment.RegObsBodyWeightValue_RegObsBodyWeightComp
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="heightCm"
                    labelText="Height (cm)"
                    onChange={addHeightToRedux}
                    placeholder="Type a number..."
                    ref={heightRef}
                    type="number"
                    value={
                      popsAssessment.RegObsBodyHeightValue_RegObsBodyHeightComp
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="bloodSugar"
                    labelText="Blood sugar (mmol/l)"
                    onChange={addBloodSugarToRedux}
                    placeholder="Type a number..."
                    ref={bloodSugarRef}
                    type="number"
                    value={
                      popsAssessment.IntervenPathTestChemBloodGlucoseRandom
                    }
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Input
                    htmlFor="pefr"
                    labelText="PEFR (l/min)"
                    onChange={addPefrToRedux}
                    placeholder="Type a number..."
                    ref={pefrRef}
                    type="number"
                    value={popsAssessment.SysObsRespiratoryEDObsPEFRLMin}
                  />
                </Grid.Item>
              </Grid.Column>

              <Grid.Column>
                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="capillaryRefill"
                    labelText="Capillary Refill"
                    onChange={addCapillaryRefillToRedux}
                    options={["<2", "3", "4", "5", ">5"]}
                    ref={capillaryRefillRef}
                    value={popsAssessment.SysObsCardiovascCEDObsCapillaryRefill}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsOther"
                    labelText="POPS Other"
                    onChange={addPopsOtherToRedux}
                    options={[
                      "Oncology Patient",
                      "Patient on long term steroids or diabetic",
                      "Congenital Heart disease",
                      "Ex-prem or any syndromic condition",
                      "None",
                    ]}
                    ref={popsOtherRef}
                    value={popsAssessment.IntervenCEDObsAnyAgeOtherScore}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsGutFeeling"
                    labelText="POPS Gut Feeling"
                    onChange={addPopsGutFeelingToRedux}
                    options={[
                      "Child looks unwell",
                      "Well",
                      "Low level of concern",
                    ]}
                    ref={popsGutFeelingRef}
                    value={popsAssessment.IntervenCEDObsAnyAgeGutFeelingScore}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Form.Dropdown
                    htmlFor="popsBreathing"
                    labelText="POPS Breathing"
                    onChange={addPopsBreathingToRedux}
                    options={[
                      "Stridor or grunt",
                      "Wheeze",
                      "No distress",
                      "Severe recession",
                      "Mild or moderate recession",
                    ]}
                    ref={popsBreathingRef}
                    value={popsAssessment.IntervenCEDObsAnyAgeBreathingScore}
                  />
                </Grid.Item>
              </Grid.Column>
            </Grid>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
