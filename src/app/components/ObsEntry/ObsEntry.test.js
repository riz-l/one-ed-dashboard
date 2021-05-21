// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import ObsEntry from "./ObsEntry.component";

// Test: Checks that ObsEntry renders
it("checkObsEntryRender", () => {
  const { queryByTestId } = render(
    <Router>
      <ObsEntry />
    </Router>
  );
  const component = queryByTestId("obsEntry");
  expect(component).toBeTruthy();
});
