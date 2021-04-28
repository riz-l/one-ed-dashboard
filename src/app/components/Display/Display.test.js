// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Display from "./Display.component";

// Test: Checks that Display renders
it("checkDisplayRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Display />
    </Router>
  );
  const component = queryByTestId("display");
  expect(component).toBeTruthy();
});
