// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import UrineObs from "./UrineObs.component";

// Test: Checks that UrineObs renders
it("Does the UrineObs subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <UrineObs />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("urineObs");
  expect(subPage).toBeTruthy();
});
