// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import { Input } from "./Input.component";

// Test: Checks that Input renders
it("Does the Input component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Input />
    </Router>
  );
  const component = queryByTestId("input");
  expect(component).toBeTruthy();
});
