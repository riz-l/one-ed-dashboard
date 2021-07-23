// Util: getPrefColorTheme
function getPrefColorTheme() {
  // Looks for user's preferred color scheme
  if (!window.matchMedia) return;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Util: getInitialTheme
export default function getInitialTheme() {
  // If returning user expressed preference for darkTheme previously,
  // ... theme === darkTheme
  // ... otherwise, theme === lightTheme
  const isReturningUser = "dark" in localStorage;
  const savedTheme = JSON.parse(localStorage.getItem("dark"));
  const userPrefersDark = getPrefColorTheme();

  // If theme was saved, theme === lightTheme/darkTheme
  if (isReturningUser) {
    return savedTheme;
  }
  // If preferred color theme is dark, theme === darkTheme
  else if (userPrefersDark) {
    return true;
  }
  // Otherwise theme === lightTheme
  else {
    return false;
  }
}
