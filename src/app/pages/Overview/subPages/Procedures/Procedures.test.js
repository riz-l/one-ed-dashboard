// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import Procedures from "./Procedures.component";

// Test: Checks that Procedures renders
it("Does the Procedures subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Procedures />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("procedures");
  expect(subPage).toBeTruthy();
});
