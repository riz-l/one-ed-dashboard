// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Ice from "./Ice.component";

// Test: Checks that Ice renders
it("Does the Ice subPage render?", () => {
  const { queryByTestId } = render(
    <Router>
      <Ice />
    </Router>
  );
  const subPage = queryByTestId("ice");
  expect(subPage).toBeTruthy();
});
