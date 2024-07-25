import React, { useContext } from "react";
import { ThemeContext } from "../index.js";

export default function ThemeConsumer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    background: theme === "dark" ? "#000" : "#fff",
  };
  return (
    <div className="container">
      <h1 className="themeConsumerTitle">
        The current theme is:
        <span id="theme" onClick={toggleTheme} style={themeStyle}>
          {theme}  
        </span>
        <span style={{ fontSize: "18px" }}> ←  Click that</span>
      </h1>
    </div>
  );
}
