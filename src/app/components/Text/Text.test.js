// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import Text from "./Text.component";

// Test: Checks that Text renders
it("Does the Text component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Text />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("text");
  expect(component).toBeTruthy();
});
