// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Components
import { Input } from "./Input.component";

// Test: Checks that Input renders
it("Does the Input component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Input />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("input");
  expect(component).toBeTruthy();
});
