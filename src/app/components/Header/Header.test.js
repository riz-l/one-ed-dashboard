// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import Header from "./Header.component";

// Test: Checks that Header renders
it("checkHeaderRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  const component = queryByTestId("header");
  expect(component).toBeTruthy();
});
