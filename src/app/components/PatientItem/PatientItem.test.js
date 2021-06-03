// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientItem from "./PatientItem.component";

// Test: Checks that PatientItem renders
it("Does the PatientItem component render?", () => {
  const { queryByTestId } = render(
    <table>
      <tbody>
        <PatientItem />
      </tbody>
    </table>
  );
  const component = queryByTestId("patientItem");
  expect(component).toBeTruthy();
});
