// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../app/themes/darkTheme";

// Import: SubPage
import AdmitOrReferral from "./AdmitOrReferral.component";

// Test: Checks that AdmitOrReferral renders
it("Does the AdmitOrReferral page render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <AdmitOrReferral />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const page = queryByTestId("admitOrReferral");
  expect(page).toBeTruthy();
});
