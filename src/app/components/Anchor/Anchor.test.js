// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Anchor from "./Anchor.component";

// Test: Checks that Anchor renders
it("checkAnchorRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Anchor />
    </Router>
  );
  const component = queryByTestId("anchor");
  expect(component).toBeTruthy();
});
