// Import: Packages
import React from "react";

// Import: Elements
import {
  Bottom,
  Container,
  Layout,
  List,
  Main,
  Top,
} from "./Dashboard.elements";

// Import: Components
import {
  PatientList,
  PatientStream,
  PatientSuggestions,
  PatientSummary,
} from "../../components";

// Component: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container data-testid={"dashboard"}>
        <Layout>
          <List>
            <PatientList />
          </List>

          <Main>
            <Top>
              <PatientSummary />
            </Top>

            <Bottom>
              <PatientStream />
              <PatientSuggestions />
            </Bottom>
          </Main>
        </Layout>
      </Container>

      {/* <Container>
        <Wrapper>
          <h1>Dashboard</h1>
        </Wrapper>
      </Container> */}
    </>
  );
}
