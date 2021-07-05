// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import PrimaryNavigation from "./PrimaryNavigation.component";

// Test: Checks that PrimaryNavigation renders
it("Does the PrimaryNavigation component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <PrimaryNavigation />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("primaryNavigation");
  expect(component).toBeTruthy();
});
