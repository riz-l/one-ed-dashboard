// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getSelectedPatient
export const getSelectedPatient = createAsyncThunk(
  "selectedPatient/getSelectedPatient",
  async (arg, { getState }) => {
    const state = getState();
    const patients = state.patientList.patients;

    try {
      return patients.filter(
        (item) => item.patientID === state.selectedPatient.patient
      );
    } catch (error) {
      console.log(error);
    }
  }
);
// AsyncThunk: getPatientDemographics
export const getPatientDemographics = createAsyncThunk(
  "patientList/getPatientDemographics",
  async (arg, { getState }) => {
    const state = getState();
    const patient = state.selectedPatient.patient;
    const token = state.userDetails.token;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetPatient/${patient}`,
        headers: {
          accept: "application/json",
          "Authorization-Token": token,
        },
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Slice: selectedPatientSlice
export const selectedPatientSlice = createSlice({
  name: "selectedPatient",
  initialState: {
    patient: "",
    patientData: [],
    dataStatus: null,
    patientDemographics: {},
    demographicsStatus: null,
  },
  reducers: {
    selectPatient: (state, { payload }) => {
      state.patient = payload;
    },
    clearPatient: (state, { payload }) => {
      state.patient = "";
      state.patientData = [];
      state.patientDemographics = {};
    },
  },
  extraReducers: {
    [getSelectedPatient.pending]: (state, action) => {
      state.dataStatus = "loading";
    },
    [getSelectedPatient.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientData = payload;
        state.dataStatus = "success";
      } else {
        state.dataStatus = "failed";
      }
    },
    [getSelectedPatient.rejected]: (state, action) => {
      state.dataStatus = "failed";
    },
    [getPatientDemographics.pending]: (state, action) => {
      state.demographicsStatus = "loading";
    },
    [getPatientDemographics.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientDemographics = payload;
        state.demographicsStatus = "success";
      } else {
        state.demographicsStatus = "failed";
      }
    },
    [getPatientDemographics.rejected]: (state, action) => {
      state.demographicsStatus = "failed";
    },
  },
});

// Actions: selectPatient, clearPatient
export const { selectPatient, clearPatient } = selectedPatientSlice.actions;

// Reducer: selectedPatientSlice.reducer
export default selectedPatientSlice.reducer;
