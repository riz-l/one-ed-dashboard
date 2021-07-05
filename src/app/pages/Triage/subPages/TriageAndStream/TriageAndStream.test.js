// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import TriageAndStream from "./TriageAndStream.component";

// Test: Checks that TriageAndStream renders
it("Does the TriageAndStream subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <TriageAndStream />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("triageAndStream");
  expect(subPage).toBeTruthy();
});
