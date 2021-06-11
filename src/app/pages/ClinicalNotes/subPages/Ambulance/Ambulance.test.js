// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Ambulance from "./Ambulance.component";

// Test: Checks that Ambulance renders
it("Does the Ambulance subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Ambulance />
    </Router>
  );
  const subPage = queryByTestId("ambulance");
  expect(subPage).toBeTruthy();
});
