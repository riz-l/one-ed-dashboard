// Import: Packages
import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./slices/userDetailsSlice";
import patientListReducer from "./slices/patientListSlice";

// Store: userDetails, patientList
export default configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    patientList: patientListReducer,
  },
});
