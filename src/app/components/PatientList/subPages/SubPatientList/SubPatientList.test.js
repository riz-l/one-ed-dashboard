// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import SubPatientList from "./SubPatientList.component";

// Test: Checks that SubPatientList renders
it("checkSubPatientListRender", () => {
  const { queryByTestId } = render(
    <Router>
      <SubPatientList />
    </Router>
  );
  const component = queryByTestId("subPatientList");
  expect(component).toBeTruthy();
});
