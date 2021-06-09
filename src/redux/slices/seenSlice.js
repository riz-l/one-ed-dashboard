// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: putSeenForm
export const putSeenForm = createAsyncThunk(
  "seen/putSeenForm",
  async (arg, { getState }) => {
    const state = getState();
    const encounterID = state.selectedPatient.patientData[0].encounterID;
    const token = state.userDetails.token;
    const seenForm = state.seen.seenForm;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "put",
        url: `${apiUrl}/SetSeen/${encounterID}`,
        headers: {
          Accept: "application/json+fhir",
          "Content-Type": "application/json",
          "Authorization-Token": token,
        },
        data: seenForm,
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Slice: seenSlice
export const seenSlice = createSlice({
  name: "seen",
  initialState: {
    seenForm: {
      dateTime: "",
      SeenComments: "",
      SeniorReviewReq: "",
      SeniorReviewReason: "",
      practitioner: "",
    },
    apiResponse: {},
    status: null,
  },
  reducers: {
    addDateTime: (state, { payload }) => {
      state.seenForm.dateTime = payload;
    },
    addSeenComments: (state, { payload }) => {
      state.seenForm.SeenComments = payload;
    },
    addSeniorReviewReq: (state, { payload }) => {
      state.seenForm.SeniorReviewReq = payload;
    },
    addSeniorReviewReason: (state, { payload }) => {
      state.seenForm.SeniorReviewReason = payload;
    },
    addPractitioner: (state, { payload }) => {
      state.seenForm.practitioner = payload;
    },
    clearSeenForm: (state, { payload }) => {
      state.seenForm.dateTime = "";
      state.seenForm.SeenComments = "";
      state.seenForm.SeniorReviewReq = "";
      state.seenForm.SeniorReviewReason = "";
      state.seenForm.practitioner = "";
    },
    clearApiResponse: (state, { payload }) => {
      state.apiResponse = {};
      state.status = null;
    },
    clearSeenSlice: (state, { payload }) => {
      state.seenForm.dateTime = "";
      state.seenForm.SeenComments = "";
      state.seenForm.SeniorReviewReq = "";
      state.seenForm.SeniorReviewReason = "";
      state.seenForm.practitioner = "";
      state.apiResponse = {};
      state.status = null;
    },
  },
  extraReducers: {
    [putSeenForm.pending]: (state, action) => {
      state.status = "loading";
    },
    [putSeenForm.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.apiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [putSeenForm.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:
export const {
  addDateTime,
  addPractitioner,
  addSeenComments,
  addSeniorReviewReq,
  addSeniorReviewReason,
  clearApiResponse,
  clearSeenForm,
  clearSeenSlice,
} = seenSlice.actions;

// Reducer: seenSlice.reducer
export default seenSlice.reducer;
