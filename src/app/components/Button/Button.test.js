// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Button from "./Button.component";

// Test: Checks that Button renders
it("Does the Button component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Button />
    </Router>
  );
  const component = queryByTestId("button");
  expect(component).toBeTruthy();
});
