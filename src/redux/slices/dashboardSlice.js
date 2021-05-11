// Import: Packages
import { createSlice } from "@reduxjs/toolkit";

// Slice: dashboardSlice
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isSummaryOpen: false,
    status: null,
  },
  reducers: {
    setIsSummaryOpen: (state, { payload }) => {
      state.isSummaryOpen = payload;
    },
  },
});

// Actions: setIsSummaryOpen
export const { setIsSummaryOpen } = dashboardSlice.actions;

// Reducer: dashboardSlice.reducer
export default dashboardSlice.reducer;
