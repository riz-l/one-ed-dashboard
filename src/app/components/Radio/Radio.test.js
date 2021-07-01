// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Components
import { Radio } from "./Radio.component";

// Test: Checks that Radio renders
it("Does the Radio component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Radio />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("radio");
  expect(component).toBeTruthy();
});
