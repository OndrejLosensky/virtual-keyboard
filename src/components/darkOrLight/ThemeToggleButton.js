import React from "react";
import { useTheme } from "./ThemeChanger";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme (Currently: {theme})
    </button>
  );
};

export default ThemeToggleButton;