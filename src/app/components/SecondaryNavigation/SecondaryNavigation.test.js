// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import SecondaryNavigation from "./SecondaryNavigation.component";

// Test: Checks that SecondaryNavigation renders
it("Does the SecondaryNavigation component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <SecondaryNavigation />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("secondaryNavigation");
  expect(component).toBeTruthy();
});
