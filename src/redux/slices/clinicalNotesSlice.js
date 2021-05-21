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

// AsyncThunk: postNewNote
export const postNewNote = createAsyncThunk(
  "clinicalNotes/postNewNote",
  async (arg, { getState }) => {
    const state = getState();
    const patientID = state.selectedPatient.patientData[0].patientID;
    const token = state.userDetails.token;
    const newNote = state.clinicalNotes.notes.newNote;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "post",
        url: `${apiUrl}/postCDCNote/${patientID}`,
        headers: {
          Accept: "application/json+fhir",
          "Content-Type": "application/json",
          "Authorization-Token": token,
        },
        data: newNote,
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// AsyncThunk: putNewNote
export const putNewNote = createAsyncThunk(
  "clinicalNotes/putNewNote",
  async (arg, { getState }) => {
    const state = getState();
    const patientID = state.selectedPatient.patientData[0].patientID;
    const formID = state.clinicalNotes.notes.filteredQuestionnaireResponse.id;
    const token = state.userDetails.token;
    const newPutNote = state.clinicalNotes.notes.newPutNote;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "put",
        url: `${apiUrl}/putCDCNote/${patientID}/${formID}`,
        headers: {
          Accept: "application/json+fhir",
          "Content-Type": "application/json",
          "Authorization-Token": token,
        },
        data: newPutNote,
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
      filteredQuestionnaireResponse: [],
      newNote: {
        PractionerName: "",
        PractionerID: "",
        PatientName: "",
        EncounterID: "",
        DateTime: "",
        note: "",
      },
      newPutNote: {
        dateTime: "",
        note: "",
        PractionerName: "",
      },
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
    addPostPractionerName: (state, { payload }) => {
      state.notes.newNote.PractionerName = payload;
    },
    addPostPractionerID: (state, { payload }) => {
      state.notes.newNote.PractionerID = payload;
    },
    addPostPatientName: (state, { payload }) => {
      state.notes.newNote.PatientName = payload;
    },
    addPostEncounterID: (state, { payload }) => {
      state.notes.newNote.EncounterID = payload;
    },
    addPostDateTime: (state, { payload }) => {
      state.notes.newNote.DateTime = payload;
    },
    addPostNote: (state, { payload }) => {
      state.notes.newNote.note = payload;
    },
    clearPostNote: (state, { payload }) => {
      state.notes.newNote = {
        PractionerName: "",
        PractionerID: "",
        PatientName: "",
        EncounterID: "",
        DateTime: "",
        note: "",
      };
    },
    addPutNote: (state, { payload }) => {
      state.notes.newPutNote.note = payload;
    },
    addPutDateTime: (state, { payload }) => {
      state.notes.newPutNote.dateTime = payload;
    },
    addPutPractionerName: (state, { payload }) => {
      state.notes.newPutNote.PractionerName = payload;
    },
    clearPutNote: (state, { payload }) => {
      state.notes.newPutNote = {
        dateTime: "",
        PractionerName: "",
        note: "",
      };
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
    [postNewNote.pending]: (state, action) => {
      state.notes.status = "loading";
    },
    [postNewNote.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.notes.apiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [postNewNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [putNewNote.pending]: (state, action) => {
      state.notes.status = "loading";
    },
    [putNewNote.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.notes.apiResponse = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [putNewNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions:
export const {
  setFilteredQuestionnaireResponse,
  addPostPractionerName,
  addPostPractionerID,
  addPostPatientName,
  addPostEncounterID,
  addPostDateTime,
  addPostNote,
  clearPostNote,
  addPutNote,
  addPutDateTime,
  addPutPractionerName,
  clearPutNote,
} = clinicalNotesSlice.actions;

// Reducer: clinicalNotesSlice.reducer
export default clinicalNotesSlice.reducer;
