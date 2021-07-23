// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Settings from "./Settings.component";

// Test: Checks that Settings renders
it("Does the Settings page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Settings />
      </ThemeProvider>
    </Router>
  );
  const page = queryByTestId("settings");
  expect(page).toBeTruthy();
});
