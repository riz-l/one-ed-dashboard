// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientDetails from "./PatientDetails.component";

// Test: Checks that PatientDetails renders
it("Does the PatientDetails component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <PatientDetails />
      </Router>
    </Provider>
  );
  const component = queryByTestId("patientDetails");
  expect(component).toBeTruthy();
});
