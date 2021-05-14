// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import MoveLocation from "./MoveLocation.component";

// Test: Checks that MoveLocation renders
it("checkMoveLocationRender", () => {
  const { queryByTestId } = render(
    <Router>
      <MoveLocation />
    </Router>
  );
  const component = queryByTestId("moveLocation");
  expect(component).toBeTruthy();
});
