// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: Component
import Indicator from "./Indicator.component";

// Test: Checks that Indicator renders
it("Does the Indicator component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Indicator />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("indicator");
  expect(component).toBeTruthy();
});
