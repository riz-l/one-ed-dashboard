// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSummaryOpen } from "../../../redux/slices/dashboardSlice";

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
