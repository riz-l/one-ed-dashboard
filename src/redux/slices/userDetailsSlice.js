// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getUserDetails
export const getUserDetails = createAsyncThunk(
  "userDetails/getUserDetails",
  async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL;
      const apiService = process.env.REACT_APP_SERVICE;
      const apiVersion = process.env.REACT_APP_API_VERSION;

      var config = {
        method: "get",
        url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=jlayton&Password=Lorenzo12£`,
        headers: {
          accept: "application/json",
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

// Slice: userDetailsSlice
export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    details: [],
    token: "",
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUserDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.details = payload;
      state.token = payload.ControlActEvent.Subject.Value[0].SecurityToken;
      state.status = "success";
    },
    [getUserDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Fetch: fetchToken
export const fetchToken = (state) => state.token;

// Reducer: userDetailsSlice.reducer
export default userDetailsSlice.reducer;
