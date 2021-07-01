// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import PatientList from "./PatientList.component";

// Test: Checks that PatientList renders
it("Does the PatientList component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <PatientList />
        </ThemeProvider>
      </Router>
    </Provider>
  );
  const component = queryByTestId("patientList");
  expect(component).toBeTruthy();
});
