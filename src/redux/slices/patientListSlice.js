// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk: getPatientList
export const getPatientList = createAsyncThunk(
  "patientList/getPatientList",
  async () => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts`
    ).then((response) => response.json());
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
      state.patients = payload;
      state.status = "success";
    },
    [getPatientList.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Reducer: patientListSlice.reducer
export default patientListSlice.reducer;
