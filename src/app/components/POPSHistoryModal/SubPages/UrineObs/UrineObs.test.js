// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import UrineObs from "./UrineObs.component";

// Test: Checks that UrineObs renders
it("checkUrineObsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <UrineObs />
    </Router>
  );
  const page = queryByTestId("urineObs");
  expect(page).toBeTruthy();
});
