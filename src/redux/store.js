// Import: Packages
import { configureStore } from "@reduxjs/toolkit";
import incomingPatientListRender from "./slices/incomingPatientsSlice";
import patientListReducer from "./slices/patientListSlice";
import selectedPatientReducer from "./slices/selectedPatientSlice";
import userDetailsReducer from "./slices/userDetailsSlice";

// Store: userDetails, patientList
export default configureStore({
  reducer: {
    incomingPatients: incomingPatientListRender,
    patientList: patientListReducer,
    selectedPatient: selectedPatientReducer,
    userDetails: userDetailsReducer,
  },
});
