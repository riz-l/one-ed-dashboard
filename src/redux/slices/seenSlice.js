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
      //   patientID: "",
      dateTime: "",
      SeenComments: "",
      SeniorReviewReq: "false",
      SeniorReviewReason: "",
      practitioner: "",
    },
    apiResponse: {},
    status: null,
  },
  reducers: {
    // addPatientID: (state, { payload }) => {
    //   state.seenForm.patientID = payload;
    // },
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
      state.seenForm = {
        //  patientID: "",
        dateTime: "",
        addSeenComments: "",
        addSeniorReviewReq: "false",
        addSeniorReviewReason: "",
        practitioner: "",
      };
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
  // addPatientID,
  addDateTime,
  addSeenComments,
  addSeniorReviewReq,
  addSeniorReviewReason,
  addPractitioner,
  clearSeenForm,
} = seenSlice.actions;

// Reducer: seenSlice.reducer
export default seenSlice.reducer;
