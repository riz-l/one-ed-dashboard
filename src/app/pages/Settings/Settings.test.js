// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import Settings from "./Settings.component";

// Test: Checks that Settings renders
it("checkSettingsRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Settings />
    </Router>
  );
  const page = queryByTestId("settings");
  expect(page).toBeTruthy();
});
