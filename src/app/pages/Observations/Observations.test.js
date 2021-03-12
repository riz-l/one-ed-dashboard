// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Observations from "./Observations.component";

// Test: Checks that Observations renders
it("checkObservationsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Observations />
    </Router>
  );
  const page = queryByTestId("observations");
  expect(page).toBeTruthy();
});
