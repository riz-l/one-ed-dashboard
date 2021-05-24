// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Obs from "./Obs.component";

// Test: Checks that Obs renders
it("checkObsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Obs />
    </Router>
  );
  const page = queryByTestId("obs");
  expect(page).toBeTruthy();
});
