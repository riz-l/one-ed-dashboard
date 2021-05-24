// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import CEDObs from "./CEDObs.component";

// Test: Checks that CEDObs renders
it("checkCEDObsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <CEDObs />
    </Router>
  );
  const page = queryByTestId("cedObs");
  expect(page).toBeTruthy();
});
