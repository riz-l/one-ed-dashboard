// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Training from "./Training.component";

// Test: Checks that Training renders
it("checkTrainingRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Training />
    </Router>
  );
  const page = queryByTestId("training");
  expect(page).toBeTruthy();
});
