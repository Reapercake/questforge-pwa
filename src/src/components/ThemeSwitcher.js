import React from "react";

export default function ThemeSwitcher() {
  // Reads the current theme from <html> and toggles it on click
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark"); // Switch to light mode
      localStorage.setItem("theme", "light"); // Save preference
    } else {
      html.classList.add("dark"); // Switch to dark mode
      localStorage.setItem("theme", "dark");
    }
  };

  // When component loads, check localStorage for theme preference
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      🌓
    </button>
  );
}
