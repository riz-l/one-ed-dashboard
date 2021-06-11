// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Text from "./Text.component";

// Test: Checks that Text renders
it("Does the Text component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Text />
    </Router>
  );
  const component = queryByTestId("text");
  expect(component).toBeTruthy();
});
