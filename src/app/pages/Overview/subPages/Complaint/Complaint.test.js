// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Complaint from "./Complaint.component";

// Test: Checks that Complications renders
it("checkComplaintRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Complaint />
    </Router>
  );
  const page = queryByTestId("complaint");
  expect(page).toBeTruthy();
});
