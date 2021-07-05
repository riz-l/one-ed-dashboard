// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import PatientSummary from "./PatientSummary.component";

// Test: Checks that PatientSummary renders
it("Does the PatientSummary component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <PatientSummary />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("patientSummary");
  expect(component).toBeTruthy();
});
