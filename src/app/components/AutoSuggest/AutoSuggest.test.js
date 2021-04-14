// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Components
import AutoSuggest from "./AutoSuggest.component";

// Test: Checks that AutoSuggest renders
it("checkAutoSuggestRender", () => {
  const { queryByTestId } = render(
    <Router>
      <AutoSuggest />
    </Router>
  );
  const component = queryByTestId("autoSuggest");
  expect(component).toBeTruthy();
});
