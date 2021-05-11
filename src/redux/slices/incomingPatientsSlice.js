// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getIncomingPatients
export const getIncomingPatients = createAsyncThunk(
  "incomingPatients/getIncomingPatients",
  async () => {
    try {
      const apiUrl = process.env.REACT_APP_INCOMING_PATIENTS;

      var config = {
        method: "get",
        url: `${apiUrl}`,
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Slice: incomingPatientsSlice
export const incomingPatientsSlice = createSlice({
  name: "incomingPatients",
  initialState: {
    incoming: [],
    status: null,
  },
  reducers: {
    clearIncomingPatients: (state, { payload }) => {
      state.patients = [];
    },
  },
  extraReducers: {
    [getIncomingPatients.pending]: (state, action) => {
      state.status = "loading";
    },
    [getIncomingPatients.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.incoming = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getIncomingPatients.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions: clearIncomingPatients
export const { clearIncomingPatients } = incomingPatientsSlice.actions;

// Reducer: incomingPatientsSlice.reducer
export default incomingPatientsSlice.reducer;
