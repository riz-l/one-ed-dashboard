// Import: Packages
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import POPSHistoryModal from "./POPSHistoryModal.component";

// Test: Checks that POPSHistoryModal renders
it("Does the POPSHistoryModal component render?", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <Router>
        <POPSHistoryModal />
      </Router>
    </Provider>
  );
  const component = queryByTestId("popsHistoryModal");
  expect(component).toBeTruthy();
});
