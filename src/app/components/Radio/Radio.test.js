// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import { Radio } from "./Radio.component";

// Test: Checks that Radio renders
it("Does the Radio component render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Radio />
    </Router>
  );
  const component = queryByTestId("radio");
  expect(component).toBeTruthy();
});
