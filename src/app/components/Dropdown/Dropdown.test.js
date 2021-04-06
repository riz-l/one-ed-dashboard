// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Dropdown from "./Dropdown.component";

// Test: Checks that Dropdown renders
it("checkDropdownRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Dropdown />
    </Router>
  );
  const component = queryByTestId("dropdown");
  expect(component).toBeTruthy();
});
