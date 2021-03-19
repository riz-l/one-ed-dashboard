// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Allergies from "./Allergies.component";

// Test: Checks that Allergies renders
it("checkAllergiesRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Allergies />
    </Router>
  );
  const page = queryByTestId("allergies");
  expect(page).toBeTruthy();
});
