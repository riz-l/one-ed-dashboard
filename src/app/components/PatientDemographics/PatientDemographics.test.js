// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import PatientDemographics from "./PatientDemographics.component";

// Test: Checks that PatientDemographics renders
it("Does the PatientDemographics component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <PatientDemographics />
      </Router>
    </Provider>
  );
  const component = queryByTestId("patientDemographics");
  expect(component).toBeTruthy();
});
