// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getPreviousNotes
export const getPreviousNotes = createAsyncThunk(
  "clinicalNotes/getPreviousNotes",
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

// Slice: clinicalNotesSlice
export const clinicalNotesSlice = createSlice({
  name: "clinicalNotes",
  initialState: {
    notes: {
      newNote: "",
      previousNotes: [],
      apiResponse: {},
      status: null,
    },
  },
  extraReducers: {
    [getPreviousNotes.pending]: (state, action) => {
      state.notes.status = "loading";
    },
    [getPreviousNotes.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.notes.previousNotes = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getPreviousNotes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:
export const {} = clinicalNotesSlice.actions;

// Reducer: clinicalNotesSlice.reducer
export default clinicalNotesSlice.reducer;
