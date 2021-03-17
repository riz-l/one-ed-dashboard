// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Details from "./Details.component";

// Test: Checks that Details renders
it("checkDetailsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Details />
    </Router>
  );
  const page = queryByTestId("details");
  expect(page).toBeTruthy();
});
