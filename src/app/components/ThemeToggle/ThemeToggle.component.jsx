// Import: Dependencies
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Button, Checkbox, Label, ScaleSwitch } from "./ThemeToggle.elements";

// Component: ThemeToggle
export default function ThemeToggle({ handleToggle, isOn, onColor }) {
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });

  return (
    <ScaleSwitch data-testid={"themeToggle"}>
      <Checkbox
        checked={isOn}
        id={`theme-toggle`}
        onChange={handleToggle}
        type="checkbox"
      />

      <Label
        htmlFor={`theme-toggle`}
        isGlobalThemeDark={isGlobalThemeDark}
        style={{ background: isOn && onColor }}
      >
        <Button isGlobalThemeDark={isGlobalThemeDark} />
      </Label>
    </ScaleSwitch>
  );
}
