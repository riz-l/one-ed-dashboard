// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import { Checkbox } from "./Checkbox.component";

// Test: Checks that Checkbox renders
it("Does the Checkbox component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Checkbox />
    </Router>
  );
  const component = queryByTestId("checkbox");
  expect(component).toBeTruthy();
});
