// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Registration from "./Registration.component";

// Test: Checks that Registration renders
it("checkRegistrationRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Registration />
    </Router>
  );
  const page = queryByTestId("registration");
  expect(page).toBeTruthy();
});
