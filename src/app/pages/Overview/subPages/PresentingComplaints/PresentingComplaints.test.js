// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../../../../app/themes/darkTheme";

// Import: SubPage
import PresentingComplaints from "./PresentingComplaints.component";

// Test: Checks that PresentingComplaints renders
it("Does the PresentingComplaints subPage render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <PresentingComplaints />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const subPage = queryByTestId("complaint");
  expect(subPage).toBeTruthy();
});
