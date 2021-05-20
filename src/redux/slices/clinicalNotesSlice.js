// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getQuestionnaireResponse
export const getQuestionnaireResponse = createAsyncThunk(
  "clinicalNotes/getQuestionnaireResponse",
  async (arg, { getState }) => {
    const state = getState();
    const token = state.userDetails.token;
    const patientID = state.selectedPatient.patientData[0].patientID;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetQuestionnaireResponse/${patientID}`,
        headers: {
          accept: "application/json+fhir",
          "Content-Type": "application/json",
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

// AsyncThunk: getQuestionnaireResponseDetail
export const getQuestionnaireResponseDetail = createAsyncThunk(
  "clinicalNotes/getQuestionnaireResponseDetail",
  async (arg, { getState }) => {
    const state = getState();
    const token = state.userDetails.token;
    const patientID = state.selectedPatient.patientData[0].patientID;
    const formID = state.clinicalNotes.notes.filteredQuestionnaireResponse.id;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetQuestionnaireResponseDetail/${patientID}/${formID}/F0000878-2.0`,
        headers: {
          accept: "application/json+fhir",
          "Content-Type": "application/json",
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

// Slice: clinicalNotesSlice
export const clinicalNotesSlice = createSlice({
  name: "clinicalNotes",
  initialState: {
    notes: {
      apiResponse: {},
      newNote: "",
      filteredQuestionnaireResponse: [],
      questionnaireResponse: [],
      questionnaireResponseDetail: [],
      status: null,
    },
  },
  reducers: {
    setFilteredQuestionnaireResponse: (state) => {
      state.notes.filteredQuestionnaireResponse =
        state.notes.questionnaireResponse.find(
          ({ questionnaireVersion }) => questionnaireVersion === "F0000878-2.0"
        );
    },
  },
  extraReducers: {
    [getQuestionnaireResponse.pending]: (state, action) => {
      state.notes.status = "loading";
    },
    [getQuestionnaireResponse.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.notes.questionnaireResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getQuestionnaireResponse.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getQuestionnaireResponseDetail.pending]: (state, action) => {
      state.notes.status = "loading";
    },
    [getQuestionnaireResponseDetail.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.notes.questionnaireResponseDetail = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getQuestionnaireResponseDetail.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:
export const { setFilteredQuestionnaireResponse } = clinicalNotesSlice.actions;

// Reducer: clinicalNotesSlice.reducer
export default clinicalNotesSlice.reducer;
