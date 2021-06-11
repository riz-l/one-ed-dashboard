// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Unauthorized from "./Unauthorized.component";

// Test: Checks that Unauthorized renders
it("Does the Unauthorized page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Unauthorized />
    </Router>
  );
  const page = queryByTestId("unauthorized");
  expect(page).toBeTruthy();
});
