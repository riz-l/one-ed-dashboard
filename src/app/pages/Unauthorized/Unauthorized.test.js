// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Page
import Unauthorized from "./Unauthorized.component";

// Test: Checks that Unauthorized renders
it("Does the Unauthorized page render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Unauthorized />
      </ThemeProvider>
    </Router>
  );
  const page = queryByTestId("unauthorized");
  expect(page).toBeTruthy();
});
