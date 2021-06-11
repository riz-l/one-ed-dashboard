// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientSummary from "./PatientSummary.component";

// Test: Checks that PatientSummary renders
it("Does the PatientSummary component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <PatientSummary />
      </Router>
    </Provider>
  );
  const component = queryByTestId("patientSummary");
  expect(component).toBeTruthy();
});
