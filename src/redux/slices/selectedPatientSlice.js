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

// AsyncThunk: getPatientAllergies
export const getPatientAllergies = createAsyncThunk(
  "patientList/getPatientAllergies",
  async (arg, { getState }) => {
    const state = getState();
    const patient = state.selectedPatient.patient;
    const token = state.userDetails.token;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetAllergies/${patient}`,
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

// AsyncThunk: getPatientAlerts
export const getPatientAlerts = createAsyncThunk(
  "patientList/getPatientAlerts",
  async (arg, { getState }) => {
    const state = getState();
    const patient = state.selectedPatient.patient;
    const token = state.userDetails.token;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetAlerts/${patient}`,
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

// AsyncThunk: getPatientConditions
export const getPatientConditions = createAsyncThunk(
  "patientList/getPatientConditions",
  async (arg, { getState }) => {
    const state = getState();
    const patient = state.selectedPatient.patient;
    const token = state.userDetails.token;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetCondition/${patient}`,
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
    patientAllergies: [],
    allergiesStatus: null,
    patientAlerts: [],
    alertsStatus: null,
    patientConditions: [],
    conditionsStatus: null,
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
    [getPatientAllergies.pending]: (state, action) => {
      state.allergiesStatus = "loading";
    },
    [getPatientAllergies.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientAllergies = payload;
        state.allergiesStatus = "success";
      } else {
        state.allergiesStatus = "failed";
      }
    },
    [getPatientAllergies.rejected]: (state, action) => {
      state.allergiesStatus = "failed";
    },
    [getPatientAlerts.pending]: (state, action) => {
      state.alertsStatus = "loading";
    },
    [getPatientAlerts.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientAlerts = payload;
        state.alertsStatus = "success";
      } else {
        state.alertsStatus = "failed";
      }
    },
    [getPatientAlerts.rejected]: (state, action) => {
      state.alertsStatus = "failed";
    },
    [getPatientConditions.pending]: (state, action) => {
      state.conditionsStatus = "loading";
    },
    [getPatientConditions.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientConditions = payload;
        state.conditionsStatus = "success";
      } else {
        state.conditionsStatus = "failed";
      }
    },
    [getPatientConditions.rejected]: (state, action) => {
      state.conditionsStatus = "failed";
    },
  },
});

// Actions: selectPatient, clearPatient
export const { selectPatient, clearPatient } = selectedPatientSlice.actions;

// Reducer: selectedPatientSlice.reducer
export default selectedPatientSlice.reducer;
