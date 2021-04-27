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

// Page: Dashboard
export default function Dashboard({ db }) {
  return (
    <>
      <Container data-testid={"dashboard"}>
        <Layout>
          <List>
            <PatientList db={db} />
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
