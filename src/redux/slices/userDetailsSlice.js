// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getUserDetails
export const getUserDetails = createAsyncThunk(
  "userDetails/getUserDetails",
  async (arg, { getState }) => {
    const state = getState();

    try {
      const apiUrl = process.env.REACT_APP_URL;
      const apiService = process.env.REACT_APP_SERVICE;
      const apiVersion = process.env.REACT_APP_API_VERSION;
      const username = state.userDetails.loginDetails.username;
      const password = state.userDetails.loginDetails.password;

      var config = {
        method: "get",
        url: `${apiUrl}/${apiService}/${apiVersion}/claimSet?UserName=${username}&Password=${password}`,
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
    loginDetails: {
      username: "",
      password: "",
    },
    details: [],
    token: "",
    status: null,
  },
  reducers: {
    addUsername: (state, { payload }) => {
      state.loginDetails.username = payload;
    },
    addPassword: (state, { payload }) => {
      state.loginDetails.password = payload;
    },
  },
  extraReducers: {
    [getUserDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.details = payload;
        state.token = payload.ControlActEvent.Subject.Value[0].SecurityToken;
        state.status = "success";
      } else {
        state.status = "failed";
      }
    },
    [getUserDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Actions: addUsername, addPassword
export const { addUsername, addPassword } = userDetailsSlice.actions;

// Reducer: userDetailsSlice.reducer
export default userDetailsSlice.reducer;
