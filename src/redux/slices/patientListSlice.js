// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getPatientList
export const getPatientList = createAsyncThunk(
  "patientList/getPatientList",
  async (arg, { getState }) => {
    const state = getState();
    const token = state.userDetails.token;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      var config = {
        method: "get",
        url: `${apiUrl}/GetPatientList`,
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

// Slice: patientListSlice
export const patientListSlice = createSlice({
  name: "patientList",
  initialState: {
    patients: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getPatientList.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPatientList.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.patients = payload;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getPatientList.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Reducer: patientListSlice.reducer
export default patientListSlice.reducer;
