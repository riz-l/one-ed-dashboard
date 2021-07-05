// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import { Checkbox } from "./Checkbox.component";

// Test: Checks that Checkbox renders
it("Does the Checkbox component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Checkbox />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("checkbox");
  expect(component).toBeTruthy();
});
