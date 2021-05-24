// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import POPSHistoryModal from "./POPSHistoryModal.component";

// Test: Checks that POPSHistoryModal renders
it("checkPOPSHistoryModalRender", () => {
  const { queryByTestId } = render(
    <Router>
      <POPSHistoryModal />
    </Router>
  );
  const component = queryByTestId("popsHistoryModal");
  expect(component).toBeTruthy();
});
