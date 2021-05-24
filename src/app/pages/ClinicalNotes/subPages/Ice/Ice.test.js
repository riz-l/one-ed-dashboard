// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: SubPage
import Ice from "./Ice.component";

// Test: Checks that Ice renders
it("checkIceRender", () => {
  const { queryByTestId } = render(
    <Router>
      <Ice />
    </Router>
  );
  const page = queryByTestId("ice");
  expect(page).toBeTruthy();
});
