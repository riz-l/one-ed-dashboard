// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Allergies from "./Allergies.component";

// Test: Checks that Allergies renders
it("Does the Allergies subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Allergies />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("allergies");
  expect(subPage).toBeTruthy();
});
