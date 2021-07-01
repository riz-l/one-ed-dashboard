// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Findings from "./Findings.component";

// Test: Checks that Findings renders
it("Does the Findings subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Findings />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("findings");
  expect(subPage).toBeTruthy();
});
