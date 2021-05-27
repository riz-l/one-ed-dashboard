// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSummaryOpen } from "../../../redux/slices/dashboardSlice";
import { clearClinicalNotesSlice } from "../../../redux/slices/clinicalNotesSlice";
import { clearSeenSlice } from "../../../redux/slices/seenSlice";
import { clearTriageSlice } from "../../../redux/slices/triageSlice";

// Import: Elements
import { Container, Layout, List, Summary } from "./Dashboard.elements";

// Import: Components
import { PatientList, PatientSummary } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  // Redux: Extracts isSummaryOpen, patient from the global state
  const isSummaryOpen = useSelector((state) => state.dashboard.isSummaryOpen);
  const patient = useSelector((state) => state.selectedPatient.patient);
  const dispatch = useDispatch();

  // Effect: Toggles isSummaryOpen status from true to false
  // ... depending upon the value of patient
  useEffect(() => {
    if (patient === "") {
      dispatch(setIsSummaryOpen(false));
    } else if (patient !== "") {
      dispatch(setIsSummaryOpen(true));
    } else {
      dispatch(setIsSummaryOpen(false));
    }
  }, [patient, dispatch]);

  useEffect(() => {
    dispatch(clearClinicalNotesSlice());
    dispatch(clearSeenSlice());
    dispatch(clearTriageSlice());
  }, [dispatch]);

  return (
    <>
      <Container data-testid={"dashboard"}>
        <Layout>
          <List>
            <PatientList />
          </List>

          {isSummaryOpen ? (
            <Summary isSummaryOpen={isSummaryOpen}>
              <PatientSummary />
            </Summary>
          ) : null}
        </Layout>
      </Container>
    </>
  );
}
