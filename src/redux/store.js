// Import: Packages
import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./slices/userDetailsSlice";
import patientListReducer from "./slices/patientListSlice";
import selectedPatientReducer from "./slices/selectedPatientSlice";

// Store: userDetails, patientList
export default configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    patientList: patientListReducer,
    selectedPatient: selectedPatientReducer,
  },
});
