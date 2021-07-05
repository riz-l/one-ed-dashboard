// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import Display from "./Display.component";

// Test: Checks that Display renders
it("Does the Display component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Display />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("display");
  expect(component).toBeTruthy();
});
