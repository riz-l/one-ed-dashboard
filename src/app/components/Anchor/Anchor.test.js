// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import Anchor from "./Anchor.component";

// Test: Checks that Anchor renders
it("Does the Anchor component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Anchor />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("anchor");
  expect(component).toBeTruthy();
});
