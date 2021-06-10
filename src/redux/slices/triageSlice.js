// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: putTriageForm
export const putTriageForm = createAsyncThunk(
  "triage/putTriageForm",
  async (arg, { getState }) => {
    const state = getState();
    const encounterID = state.selectedPatient.patientData[0].encounterID;
    const token = state.userDetails.token;
    const triageForm = state.triage.triageForm;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "put",
        url: `${apiUrl}/SetTriageAndStream/${encounterID}`,
        headers: {
          Accept: "application/json+fhir",
          "Content-Type": "application/json",
          "Authorization-Token": token,
        },
        data: triageForm,
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// AsyncThunk: postPopsAssessment
export const postPopsAssessment = createAsyncThunk(
  "triage/postPopsAssessment",
  async (arg, { getState }) => {
    const state = getState();
    const patientID = state.selectedPatient.patientData[0].patientID;
    const token = state.userDetails.token;
    const popsAssessment = state.triage.popsAssessment;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "post",
        url: `${apiUrl}/postPopsForm/${patientID}`,
        headers: {
          Accept: "application/json+fhir",
          "Content-Type": "application/json",
          "Authorization-Token": token,
        },
        data: popsAssessment,
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Slice: triageSlice
export const triageSlice = createSlice({
  name: "triage",
  initialState: {
    triageForm: {
      patientID: "",
      dateTime: "",
      TriageCategory: "",
      TriageDiagnosis: "",
      TriageDiagnosisCode: "",
      practitioner: "",
    },
    popsAssessment: {
      PatientID: null,
      PractionerName: null,
      PractionerID: null,
      PatientName: null,
      EncounterID: null,
      DateTime: null,
      SysObsNeuroPainScore: null,
      SysObsNeuroPatientrackPainScore: null,
      RTGCEDObservationsPOPSScore: null,
      SysObsCardiovascPulseRateValueRTG: null,
      SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
        null,
      SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
        null,
      RTG_RespiratoryRate: null,
      SysObsRespiratoryTargetSATS9498ValueRTG: null,
      SysObsRespiratorySupplementalOxygenTypeOptions: null,
      RegObsBodyTemperatureValueRTG: null,
      IntervenCEDObsAnyAgeOtherScore: null,
      IntervenCEDObsAnyAgeGutFeelingScore: null,
      IntervenCEDObsAnyAgeBreathingScore: null,
      SysObsNeuroAVPUScoreValue_1: null,
      SysObsNeuroAVPUScoreValue_2: null,
      SysObsNeuroAVPUScoreValue_3: null,
      SysObsNeuroAVPUScoreValue: null,
      SysObsNeuroEDObsAVPU: null,
      RegObsBodyHeightValue_RegObsBodyHeightComp: null,
      RegObsBodyWeightValue_RegObsBodyWeightComp: null,
      RTGChildObsComments: null,
      IntervenPathTestChemBloodGlucoseRandom: null,
      SysObsRespiratoryEDObsPEFRLMin: null,
      SysObsCardiovascCEDObsCapillaryRefill: null,
      SysObsNeuroEDObsGCSEyes: null,
      SysObsNeuroEDObsGCSVerbal: null,
      SysObsNeuroEDObsGCSMotor: null,
      SysObsNeuroEDObsGCSTotal: null,
      SysObsNeuroPupilsEqual: null,
      SysObsNeuroPupilSizeLeft: null,
      SysObsNeuroPupilSizeRight: null,
      SysObsNeuroPupilReactivityLeft: null,
      SysObsNeuroPupilReactivityRight: null,
      RegObsArmLimbMovementLeft: null,
      RegObsArmLimbMovementRight: null,
      RegObsLegLimbMovementLeft: null,
      RegObsLegLimbMovementRight: null,
      AdminNAD: null,
      IntervenPathTestUrinalysisProteinLevel: null,
      IntervenPathTestUrinalysisBloodLevel: null,
      IntervenPathTestUrinalysisGlucoseLevel: null,
      IntervenPathTestUrinalysisWCNumbered: null,
      IntervenPathTestUrinalysisNitrites: null,
      IntervenPathTestUrinalysisKetoneLevel: null,
      RTGCEDObservationsPOPSScore_1: null,
    },
    triageFormApiResponse: {},
    popsAssessmentApiResponse: {},
    status: null,
  },
  reducers: {
    addTriageFormPatientID: (state, { payload }) => {
      state.triageForm.patientID = payload;
    },
    addTriageFormDateTime: (state, { payload }) => {
      state.triageForm.dateTime = payload;
    },
    addTriageFormTriageCategory: (state, { payload }) => {
      state.triageForm.TriageCategory = payload;
    },
    addTriageFormTriageDiagnosis: (state, { payload }) => {
      state.triageForm.TriageDiagnosis = payload;
    },
    addTriageFormTriageDiagnosisCode: (state, { payload }) => {
      state.triageForm.TriageDiagnosisCode = payload;
    },
    addTriageFormPractitioner: (state, { payload }) => {
      state.triageForm.practitioner = payload;
    },
    clearTriageForm: (state, { payload }) => {
      state.triageForm = {
        patientID: "",
        dateTime: "",
        TriageCategory: "",
        TriageDiagnosis: "",
        TriageDiagnosisCode: "",
        practitioner: "",
      };
    },
    clearTriageFormApiResponse: (state, { payload }) => {
      state.triageFormApiResponse = {};
      state.status = null;
    },
    addPopsAssessmentPatientID: (state, { payload }) => {
      state.popsAssessment.PatientID = payload;
    },
    addPopsAssessmentPractionerName: (state, { payload }) => {
      state.popsAssessment.PractionerName = payload;
    },
    addPopsAssessmentPractionerID: (state, { payload }) => {
      state.popsAssessment.PractionerID = payload;
    },
    addPopsAssessmentPatientName: (state, { payload }) => {
      state.popsAssessment.PatientName = payload;
    },
    addPopsAssessmentEncounterID: (state, { payload }) => {
      state.popsAssessment.EncounterID = payload;
    },
    addPopsAssessmentDateTime: (state, { payload }) => {
      state.popsAssessment.DateTime = payload;
    },
    addPopsAssessmentSysObsNeuroPainScore: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPainScore = payload;
    },
    addPopsAssessmentSysObsNeuroPatientrackPainScore: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPatientrackPainScore = payload;
    },
    addPopsAssessmentRTGCEDObservationsPOPSScore: (state, { payload }) => {
      state.popsAssessment.RTGCEDObservationsPOPSScore = payload;
    },
    addPopsAssessmentSysObsCardiovascPulseRateValueRTG: (
      state,
      { payload }
    ) => {
      state.popsAssessment.SysObsCardiovascPulseRateValueRTG = payload;
    },
    addPopsAssessmentSysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
      (state, { payload }) => {
        state.popsAssessment.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG =
          payload;
      },
    addPopsAssessmentSysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
      (state, { payload }) => {
        state.popsAssessment.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG =
          payload;
      },
    addPopsAssessmentRTG_RespiratoryRate: (state, { payload }) => {
      state.popsAssessment.RTG_RespiratoryRate = payload;
    },
    addPopsAssessmentSysObsRespiratoryTargetSATS9498ValueRTG: (
      state,
      { payload }
    ) => {
      state.popsAssessment.SysObsRespiratoryTargetSATS9498ValueRTG = payload;
    },
    addPopsAssessmentSysObsRespiratorySupplementalOxygenTypeOptions: (
      state,
      { payload }
    ) => {
      state.popsAssessment.SysObsRespiratorySupplementalOxygenTypeOptions =
        payload;
    },
    addPopsAssessmentRegObsBodyTemperatureValueRTG: (state, { payload }) => {
      state.popsAssessment.RegObsBodyTemperatureValueRTG = payload;
    },
    addPopsAssessmentIntervenCEDObsAnyAgeOtherScore: (state, { payload }) => {
      state.popsAssessment.IntervenCEDObsAnyAgeOtherScore = payload;
    },
    addPopsAssessmentIntervenCEDObsAnyAgeGutFeelingScore: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenCEDObsAnyAgeGutFeelingScore = payload;
    },
    addPopsAssessmentIntervenCEDObsAnyAgeBreathingScore: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenCEDObsAnyAgeBreathingScore = payload;
    },
    addPopsAssessmentSysObsNeuroAVPUScoreValue_1: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroAVPUScoreValue_1 = payload;
    },
    addPopsAssessmentSysObsNeuroAVPUScoreValue_2: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroAVPUScoreValue_2 = payload;
    },
    addPopsAssessmentSysObsNeuroAVPUScoreValue_3: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroAVPUScoreValue_3 = payload;
    },
    addPopsAssessmentSysObsNeuroAVPUScoreValue: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroAVPUScoreValue = payload;
    },
    addPopsAssessmentSysObsNeuroEDObsAVPU: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroEDObsAVPU = payload;
    },
    addPopsAssessmentRegObsBodyHeightValue_RegObsBodyHeightComp: (
      state,
      { payload }
    ) => {
      state.popsAssessment.RegObsBodyHeightValue_RegObsBodyHeightComp = payload;
    },
    addPopsAssessmentRegObsBodyWeightValue_RegObsBodyWeightComp: (
      state,
      { payload }
    ) => {
      state.popsAssessment.RegObsBodyWeightValue_RegObsBodyWeightComp = payload;
    },
    addPopsAssessmentRTGChildObsComments: (state, { payload }) => {
      state.popsAssessment.RTGChildObsComments = payload;
    },
    addPopsAssessmentIntervenPathTestChemBloodGlucoseRandom: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestChemBloodGlucoseRandom = payload;
    },
    addPopsAssessmentSysObsRespiratoryEDObsPEFRLMin: (state, { payload }) => {
      state.popsAssessment.SysObsRespiratoryEDObsPEFRLMin = payload;
    },
    addPopsAssessmentSysObsCardiovascCEDObsCapillaryRefill: (
      state,
      { payload }
    ) => {
      state.popsAssessment.SysObsCardiovascCEDObsCapillaryRefill = payload;
    },
    addPopsAssessmentSysObsNeuroEDObsGCSEyes: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroEDObsGCSEyes = payload;
    },
    addPopsAssessmentSysObsNeuroEDObsGCSVerbal: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroEDObsGCSVerbal = payload;
    },
    addPopsAssessmentSysObsNeuroEDObsGCSMotor: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroEDObsGCSMotor = payload;
    },
    addPopsAssessmentSysObsNeuroEDObsGCSTotal: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroEDObsGCSTotal = payload;
    },
    addPopsAssessmentSysObsNeuroPupilsEqual: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPupilsEqual = payload;
    },
    addPopsAssessmentSysObsNeuroPupilSizeLeft: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPupilSizeLeft = payload;
    },
    addPopsAssessmentSysObsNeuroPupilSizeRight: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPupilSizeRight = payload;
    },
    addPopsAssessmentSysObsNeuroPupilReactivityLeft: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPupilReactivityLeft = payload;
    },
    addPopsAssessmentSysObsNeuroPupilReactivityRight: (state, { payload }) => {
      state.popsAssessment.SysObsNeuroPupilReactivityRight = payload;
    },
    addPopsAssessmentRegObsArmLimbMovementLeft: (state, { payload }) => {
      state.popsAssessment.RegObsArmLimbMovementLeft = payload;
    },
    addPopsAssessmentRegObsArmLimbMovementRight: (state, { payload }) => {
      state.popsAssessment.RegObsArmLimbMovementRight = payload;
    },
    addPopsAssessmentRegObsLegLimbMovementLeft: (state, { payload }) => {
      state.popsAssessment.RegObsLegLimbMovementLeft = payload;
    },
    addPopsAssessmentRegObsLegLimbMovementRight: (state, { payload }) => {
      state.popsAssessment.RegObsLegLimbMovementRight = payload;
    },
    addPopsAssessmentAdminNAD: (state, { payload }) => {
      state.popsAssessment.AdminNAD = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisProteinLevel: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisProteinLevel = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisBloodLevel: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisBloodLevel = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisGlucoseLevel: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisGlucoseLevel = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisWCNumbered: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisWCNumbered = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisNitrites: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisNitrites = payload;
    },
    addPopsAssessmentIntervenPathTestUrinalysisKetoneLevel: (
      state,
      { payload }
    ) => {
      state.popsAssessment.IntervenPathTestUrinalysisKetoneLevel = payload;
    },
    addPopsAssessmentRTGCEDObservationsPOPSScore_1: (state, { payload }) => {
      state.popsAssessment.RTGCEDObservationsPOPSScore_1 = payload;
    },
    clearPopsAssessment: (state, { payload }) => {
      state.popsAssessment = {
        PatientID: null,
        PractionerName: null,
        PractionerID: null,
        PatientName: null,
        EncounterID: null,
        DateTime: null,
        SysObsNeuroPainScore: null,
        SysObsNeuroPatientrackPainScore: null,
        RTGCEDObservationsPOPSScore: null,
        SysObsCardiovascPulseRateValueRTG: null,
        SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
          null,
        SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG:
          null,
        RTG_RespiratoryRate: null,
        SysObsRespiratoryTargetSATS9498ValueRTG: null,
        SysObsRespiratorySupplementalOxygenTypeOptions: null,
        RegObsBodyTemperatureValueRTG: null,
        IntervenCEDObsAnyAgeOtherScore: null,
        IntervenCEDObsAnyAgeGutFeelingScore: null,
        IntervenCEDObsAnyAgeBreathingScore: null,
        SysObsNeuroAVPUScoreValue_1: null,
        SysObsNeuroAVPUScoreValue_2: null,
        SysObsNeuroAVPUScoreValue_3: null,
        SysObsNeuroAVPUScoreValue: null,
        SysObsNeuroEDObsAVPU: null,
        RegObsBodyHeightValue_RegObsBodyHeightComp: null,
        RegObsBodyWeightValue_RegObsBodyWeightComp: null,
        RTGChildObsComments: null,
        IntervenPathTestChemBloodGlucoseRandom: null,
        SysObsRespiratoryEDObsPEFRLMin: null,
        SysObsCardiovascCEDObsCapillaryRefill: null,
        SysObsNeuroEDObsGCSEyes: null,
        SysObsNeuroEDObsGCSVerbal: null,
        SysObsNeuroEDObsGCSMotor: null,
        SysObsNeuroEDObsGCSTotal: null,
        SysObsNeuroPupilsEqual: null,
        SysObsNeuroPupilSizeLeft: null,
        SysObsNeuroPupilSizeRight: null,
        SysObsNeuroPupilReactivityLeft: null,
        SysObsNeuroPupilReactivityRight: null,
        RegObsArmLimbMovementLeft: null,
        RegObsArmLimbMovementRight: null,
        RegObsLegLimbMovementLeft: null,
        RegObsLegLimbMovementRight: null,
        AdminNAD: null,
        IntervenPathTestUrinalysisProteinLevel: null,
        IntervenPathTestUrinalysisBloodLevel: null,
        IntervenPathTestUrinalysisGlucoseLevel: null,
        IntervenPathTestUrinalysisWCNumbered: null,
        IntervenPathTestUrinalysisNitrites: null,
        IntervenPathTestUrinalysisKetoneLevel: null,
        RTGCEDObservationsPOPSScore_1: null,
      };
    },
    clearPopsAssessmentApiResponse: (state, { payload }) => {
      state.popsAssessmentApiResponse = {};
      state.status = null;
    },
    clearTriageSlice: (state, { payload }) => {
      state.triageForm.patientID = "";
      state.triageForm.dateTime = "";
      state.triageForm.TriageCategory = "";
      state.triageForm.TriageDiagnosis = "";
      state.triageForm.TriageDiagnosisCode = "";
      state.triageForm.practitioner = "";
      state.popsAssessment.PatientID = null;
      state.popsAssessment.PractionerName = null;
      state.popsAssessment.PractionerID = null;
      state.popsAssessment.PatientName = null;
      state.popsAssessment.EncounterID = null;
      state.popsAssessment.DateTime = null;
      state.popsAssessment.SysObsNeuroPainScore = null;
      state.popsAssessment.SysObsNeuroPatientrackPainScore = null;
      state.popsAssessment.RTGCEDObservationsPOPSScore = null;
      state.popsAssessment.SysObsCardiovascPulseRateValueRTG = null;
      state.popsAssessment.SysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG =
        null;
      state.popsAssessment.SysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG =
        null;
      state.popsAssessment.RTG_RespiratoryRate = null;
      state.popsAssessment.SysObsRespiratoryTargetSATS9498ValueRTG = null;
      state.popsAssessment.SysObsRespiratorySupplementalOxygenTypeOptions =
        null;
      state.popsAssessment.RegObsBodyTemperatureValueRTG = null;
      state.popsAssessment.IntervenCEDObsAnyAgeOtherScore = null;
      state.popsAssessment.IntervenCEDObsAnyAgeGutFeelingScore = null;
      state.popsAssessment.IntervenCEDObsAnyAgeBreathingScore = null;
      state.popsAssessment.SysObsNeuroAVPUScoreValue_1 = null;
      state.popsAssessment.SysObsNeuroAVPUScoreValue_2 = null;
      state.popsAssessment.SysObsNeuroAVPUScoreValue_3 = null;
      state.popsAssessment.SysObsNeuroAVPUScoreValue = null;
      state.popsAssessment.SysObsNeuroEDObsAVPU = null;
      state.popsAssessment.RegObsBodyHeightValue_RegObsBodyHeightComp = null;
      state.popsAssessment.RegObsBodyWeightValue_RegObsBodyWeightComp = null;
      state.popsAssessment.RTGChildObsComments = null;
      state.popsAssessment.IntervenPathTestChemBloodGlucoseRandom = null;
      state.popsAssessment.SysObsRespiratoryEDObsPEFRLMin = null;
      state.popsAssessment.SysObsCardiovascCEDObsCapillaryRefill = null;
      state.popsAssessment.SysObsNeuroEDObsGCSEyes = null;
      state.popsAssessment.SysObsNeuroEDObsGCSVerbal = null;
      state.popsAssessment.SysObsNeuroEDObsGCSMotor = null;
      state.popsAssessment.SysObsNeuroEDObsGCSTotal = null;
      state.popsAssessment.SysObsNeuroPupilsEqual = null;
      state.popsAssessment.SysObsNeuroPupilSizeLeft = null;
      state.popsAssessment.SysObsNeuroPupilSizeRight = null;
      state.popsAssessment.SysObsNeuroPupilReactivityLeft = null;
      state.popsAssessment.SysObsNeuroPupilReactivityRight = null;
      state.popsAssessment.RegObsArmLimbMovementLeft = null;
      state.popsAssessment.RegObsArmLimbMovementRight = null;
      state.popsAssessment.RegObsLegLimbMovementLeft = null;
      state.popsAssessment.RegObsLegLimbMovementRight = null;
      state.popsAssessment.AdminNAD = null;
      state.popsAssessment.IntervenPathTestUrinalysisProteinLevel = null;
      state.popsAssessment.IntervenPathTestUrinalysisBloodLevel = null;
      state.popsAssessment.IntervenPathTestUrinalysisGlucoseLevel = null;
      state.popsAssessment.IntervenPathTestUrinalysisWCNumbered = null;
      state.popsAssessment.IntervenPathTestUrinalysisNitrites = null;
      state.popsAssessment.IntervenPathTestUrinalysisKetoneLevel = null;
      state.popsAssessment.RTGCEDObservationsPOPSScore_1 = null;
      state.triageFormApiResponse = {};
      state.popsAssessmentApiResponse = {};
      state.status = null;
    },
  },
  extraReducers: {
    [putTriageForm.pending]: (state, action) => {
      state.status = "loading";
    },
    [putTriageForm.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.triageFormApiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [putTriageForm.rejected]: (state, action) => {
      state.status = "failed";
    },
    [postPopsAssessment.pending]: (state, action) => {
      state.status = "loading";
    },
    [postPopsAssessment.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.popsAssessmentApiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [postPopsAssessment.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:   addPatientID, addDateTime, addTriageCategory, addTriageDiagnosis,
// ... addTriageDiagnosisCode, addPractitioner, clearTriageForm,
export const {
  addTriageFormPatientID,
  addTriageFormDateTime,
  addTriageFormTriageCategory,
  addTriageFormTriageDiagnosis,
  addTriageFormTriageDiagnosisCode,
  addTriageFormPractitioner,
  clearTriageForm,
  clearTriageFormApiResponse,
  addPopsAssessmentPatientID,
  addPopsAssessmentPractionerName,
  addPopsAssessmentPractionerID,
  addPopsAssessmentPatientName,
  addPopsAssessmentEncounterID,
  addPopsAssessmentDateTime,
  addPopsAssessmentSysObsNeuroPainScore,
  addPopsAssessmentSysObsNeuroPatientrackPainScore,
  addPopsAssessmentRTGCEDObservationsPOPSScore,
  addPopsAssessmentSysObsCardiovascPulseRateValueRTG,
  addPopsAssessmentSysObsCardiovascBPSystolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG,
  addPopsAssessmentSysObsCardiovascBPDiastolicValueRTG_SysObsCardiovascBPClinicalMeasurementCompRTG,
  addPopsAssessmentRTG_RespiratoryRate,
  addPopsAssessmentSysObsRespiratoryTargetSATS9498ValueRTG,
  addPopsAssessmentSysObsRespiratorySupplementalOxygenTypeOptions,
  addPopsAssessmentRegObsBodyTemperatureValueRTG,
  addPopsAssessmentIntervenCEDObsAnyAgeOtherScore,
  addPopsAssessmentIntervenCEDObsAnyAgeGutFeelingScore,
  addPopsAssessmentIntervenCEDObsAnyAgeBreathingScore,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_1,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_2,
  addPopsAssessmentSysObsNeuroAVPUScoreValue_3,
  addPopsAssessmentSysObsNeuroAVPUScoreValue,
  addPopsAssessmentSysObsNeuroEDObsAVPU,
  addPopsAssessmentRegObsBodyHeightValue_RegObsBodyHeightComp,
  addPopsAssessmentRegObsBodyWeightValue_RegObsBodyWeightComp,
  addPopsAssessmentRTGChildObsComments,
  addPopsAssessmentIntervenPathTestChemBloodGlucoseRandom,
  addPopsAssessmentSysObsRespiratoryEDObsPEFRLMin,
  addPopsAssessmentSysObsCardiovascCEDObsCapillaryRefill,
  addPopsAssessmentSysObsNeuroEDObsGCSEyes,
  addPopsAssessmentSysObsNeuroEDObsGCSVerbal,
  addPopsAssessmentSysObsNeuroEDObsGCSMotor,
  addPopsAssessmentSysObsNeuroEDObsGCSTotal,
  addPopsAssessmentSysObsNeuroPupilsEqual,
  addPopsAssessmentSysObsNeuroPupilSizeLeft,
  addPopsAssessmentSysObsNeuroPupilSizeRight,
  addPopsAssessmentSysObsNeuroPupilReactivityLeft,
  addPopsAssessmentSysObsNeuroPupilReactivityRight,
  addPopsAssessmentRegObsArmLimbMovementLeft,
  addPopsAssessmentRegObsArmLimbMovementRight,
  addPopsAssessmentRegObsLegLimbMovementLeft,
  addPopsAssessmentRegObsLegLimbMovementRight,
  addPopsAssessmentAdminNAD,
  addPopsAssessmentIntervenPathTestUrinalysisProteinLevel,
  addPopsAssessmentIntervenPathTestUrinalysisBloodLevel,
  addPopsAssessmentIntervenPathTestUrinalysisGlucoseLevel,
  addPopsAssessmentIntervenPathTestUrinalysisWCNumbered,
  addPopsAssessmentIntervenPathTestUrinalysisNitrites,
  addPopsAssessmentIntervenPathTestUrinalysisKetoneLevel,
  addPopsAssessmentRTGCEDObservationsPOPSScore_1,
  clearPopsAssessment,
  clearPopsAssessmentApiResponse,
  clearTriageSlice,
} = triageSlice.actions;

// Reducer: triageSlice.reducer
export default triageSlice.reducer;
