// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Diagnosis from "./Diagnosis.component";

// Test: Checks that Diagnosis renders
it("Does the Diagnosis subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Diagnosis />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("diagnosis");
  expect(subPage).toBeTruthy();
});
