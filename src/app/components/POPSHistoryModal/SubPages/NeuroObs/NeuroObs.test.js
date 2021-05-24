// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import NeuroObs from "./NeuroObs.component";

// Test: Checks that NeuroObs renders
it("checkNeuroObsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <NeuroObs />
    </Router>
  );
  const page = queryByTestId("neuroObs");
  expect(page).toBeTruthy();
});
