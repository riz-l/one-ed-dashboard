// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import POPSHistory from "./POPSHistory.component";

// Test: Checks that POPSHistory renders
it("Does the POPSHistory subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <POPSHistory />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("popsHistory");
  expect(subPage).toBeTruthy();
});
