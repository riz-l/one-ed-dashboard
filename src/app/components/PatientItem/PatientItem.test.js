// Import: Packages
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components/macro";

// Import: Themes
import { darkTheme } from "../../themes/darkTheme";

// Import: Component
import PatientItem from "./PatientItem.component";

// Test: Checks that PatientItem renders
it("Does the PatientItem component render?", () => {
  const { queryByTestId } = render(
    <table>
      <tbody>
        <ThemeProvider theme={darkTheme}>
          <PatientItem />
        </ThemeProvider>
      </tbody>
    </table>
  );
  const component = queryByTestId("patientItem");
  expect(component).toBeTruthy();
});
