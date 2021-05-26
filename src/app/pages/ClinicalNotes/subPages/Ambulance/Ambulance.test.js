// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Ambulance from "./Ambulance.component";

// Test: Checks that Ambulance renders
it("checkAmbulanceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Ambulance />
    </Router>
  );
  const page = queryByTestId("ambulance");
  expect(page).toBeTruthy();
});
