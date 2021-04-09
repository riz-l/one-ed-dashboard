// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import TextArea from "./TextArea.component";

// Test: Checks that TextArea renders
it("checkTextAreaRender", () => {
  const { queryByTestId } = render(
    <Router>
      <TextArea />
    </Router>
  );
  const component = queryByTestId("textArea");
  expect(component).toBeTruthy();
});
