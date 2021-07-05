// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import Button from "./Button.component";

// Test: Checks that Button renders
it("Does the Button component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Button />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("button");
  expect(component).toBeTruthy();
});
