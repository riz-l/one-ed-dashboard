// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Components
import PageTitle from "./PageTitle.component";

// Test: Checks that PageTitle renders
it("Does the PageTitle component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <ThemeProvider theme={darkTheme}>
        <PageTitle />
      </ThemeProvider>
    </Router>
  );
  const component = queryByTestId("pageTitle");
  expect(component).toBeTruthy();
});
