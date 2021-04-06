// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Form from "./Form.component";

// Test: Checks that Form renders
it("checkFormRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Form />
    </Router>
  );
  const component = queryByTestId("form");
  expect(component).toBeTruthy();
});
