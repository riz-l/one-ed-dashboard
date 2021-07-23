// Import: Packages
import { createSlice } from "@reduxjs/toolkit";

// Import: Utils
import getInitialTheme from "../../utils/getInitialTheme";

// Slice: globalThemeSlice
export const globalThemeSlice = createSlice({
  name: "globalTheme",
  initialState: {
    isGlobalThemeDark: getInitialTheme(),
    status: null,
  },
  reducers: {
    setIsGlobalThemeDark: (state) => {
      state.isGlobalThemeDark = !state.isGlobalThemeDark;
      localStorage.setItem("isDarkTheme", state.isGlobalThemeDark);
    },
  },
});

// Actions: setIsGlobalThemeDark
export const { setIsGlobalThemeDark } = globalThemeSlice.actions;

// Reducer: globalThemeSlice.reducer
export default globalThemeSlice.reducer;
