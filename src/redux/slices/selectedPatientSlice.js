// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// Slice: selectedPatientSlice
export const selectedPatientSlice = createSlice({
  name: "selectedPatient",
  initialState: {
    patient: "",
    patientData: [],
    status: null,
  },
  reducers: {
    selectPatient: (state, { payload }) => {
      state.patient = payload;
    },
    clearPatient: (state, { payload }) => {
      state.patient = "";
    },
  },
  extraReducers: {
    [getSelectedPatient.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSelectedPatient.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patientData = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getSelectedPatient.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions: selectPatient, clearPatient
export const { selectPatient, clearPatient } = selectedPatientSlice.actions;

// Reducer: selectedPatientSlice.reducer
export default selectedPatientSlice.reducer;
