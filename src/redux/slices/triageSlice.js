// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: putTriageForm
export const putTriageForm = createAsyncThunk(
  "triageForm/putTriageForm",
  async (arg, { getState }) => {
    const state = getState();
    const encounterID = state.selectedPatient.patientData[0].encounterID;
    const token = state.userDetails.token;
    const triageForm = state.triage.triageForm;

    try {
      const apiUrl = `https://oneedfhirtest.azurewebsites.net/SetTriageAndStream`;
      // const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "put",
        url: `${apiUrl}/${encounterID}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json+fhir",
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
    apiResponse: {},
    status: null,
  },
  reducers: {
    addPatientID: (state, { payload }) => {
      state.triageForm.patientID = payload;
    },
    addDateTime: (state, { payload }) => {
      state.triageForm.dateTime = payload;
    },
    addTriageCategory: (state, { payload }) => {
      state.triageForm.TriageCategory = payload;
    },
    addTriageDiagnosis: (state, { payload }) => {
      state.triageForm.TriageDiagnosis = payload;
    },
    addTriageDiagnosisCode: (state, { payload }) => {
      state.triageForm.TriageDiagnosisCode = payload;
    },
    addPractitioner: (state, { payload }) => {
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
  },
  extraReducers: {
    [putTriageForm.pending]: (state, action) => {
      state.status = "loading";
    },
    [putTriageForm.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.apiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [putTriageForm.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:   addPatientID, addDateTime, addTriageCategory, addTriageDiagnosis,
// ... addTriageDiagnosisCode, addPractitioner, clearTriageForm,
export const {
  addPatientID,
  addDateTime,
  addTriageCategory,
  addTriageDiagnosis,
  addTriageDiagnosisCode,
  addPractitioner,
  clearTriageForm,
} = triageSlice.actions;

// Reducer: triageSlice.reducer
export default triageSlice.reducer;
