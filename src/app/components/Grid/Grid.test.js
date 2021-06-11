// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Grid from "./Grid.component";

// Test: Checks that Grid renders
it("Does the Grid component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Grid />
    </Router>
  );
  const component = queryByTestId("grid");
  expect(component).toBeTruthy();
});
