// Import: Packages
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Container, Layout, List, Summary } from "./Dashboard.elements";

// Import: Components
import { PatientList } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  // Redux: Extracts patient from the global state
  const patient = useSelector((state) => state.selectedPatient.patient);

  return (
    <>
      <Container data-testid={"dashboard"}>
        <Layout>
          <List>
            <PatientList />
          </List>

          <Summary patient={patient}>
            <h1>Testing testing 1 2 3</h1>
          </Summary>
        </Layout>
      </Container>
    </>
  );
}
