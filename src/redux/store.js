// Import: Packages
import { configureStore } from "@reduxjs/toolkit";
import clinicalNotesReducer from "./slices/clinicalNotesSlice";
import dashboardReducer from "./slices/dashboardSlice";
import incomingPatientListRender from "./slices/incomingPatientsSlice";
import patientListReducer from "./slices/patientListSlice";
import selectedPatientReducer from "./slices/selectedPatientSlice";
import triageReducer from "./slices/triageSlice";
import userDetailsReducer from "./slices/userDetailsSlice";

// Store: userDetails, patientList
export default configureStore({
  reducer: {
    clinicalNotes: clinicalNotesReducer,
    dashboard: dashboardReducer,
    incomingPatients: incomingPatientListRender,
    patientList: patientListReducer,
    selectedPatient: selectedPatientReducer,
    triage: triageReducer,
    userDetails: userDetailsReducer,
  },
});
