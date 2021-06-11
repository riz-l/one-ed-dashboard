// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import GPConnect from "./GPConnect.component";

// Test: Checks that GPConnect renders
it("Does the GPConnect subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <GPConnect />
    </Router>
  );
  const subPage = queryByTestId("gpConnect");
  expect(subPage).toBeTruthy();
});
