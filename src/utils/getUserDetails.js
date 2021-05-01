// Import: Packages
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

// AsyncThunk: getUserDetails
export const getUserDetails = createAsyncThunk(
  "userDetails/getUserDetails",
  async () => {
    const username = await useSelector(
      (state) => state.userDetails.loginDetails.username
    );
    const password = await useSelector(
      (state) => state.userDetails.loginDetails.password
    );

    try {
      const apiUrl = process.env.REACT_APP_URL;
      const apiService = process.env.REACT_APP_SERVICE;
      const apiVersion = process.env.REACT_APP_API_VERSION;

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
