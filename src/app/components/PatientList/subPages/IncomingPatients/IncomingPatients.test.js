// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import IncomingPatients from "./IncomingPatients.component";

// Test: Checks that IncomingPatients renders
it("checkIncomingPatientsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <IncomingPatients />
    </Router>
  );
  const component = queryByTestId("incomingPatients");
  expect(component).toBeTruthy();
});
