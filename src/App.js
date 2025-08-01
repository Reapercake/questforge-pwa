import React, { useState } from "react"; // Imports React and useState hook for local state
import Converter from "./components/Converter"; // Imports the Converter screen/component
import Gallery from "./components/Gallery";     // Imports the Gallery screen/component
import ThemeSwitcher from "./components/ThemeSwitcher"; // Theme toggle (light/dark)
import "./App.css"; // Imports CSS for styling

export default function App() {
  const [page, setPage] = useState("converter"); 
  // Sets up a bit of state to know which "page" we're showing: 'converter' or 'gallery'

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* The app background and text colors adjust for light/dark mode */}
      <header className="flex items-center justify-between p-4 shadow bg-white dark:bg-gray-800">
        {/* Top bar: app title, navigation, theme toggle */}
        <h1 className="font-bold text-2xl tracking-wide">QuestForge</h1>
        <nav>
          {/* Simple navigation: shows which page is active */}
          <button 
            onClick={() => setPage("converter")} 
            className={`mr-2 ${page === "converter" ? "font-bold underline" : ""}`}
          >
            Converter
          </button>
          <button 
            onClick={() => setPage("gallery")} 
            className={page === "gallery" ? "font-bold underline" : ""}
          >
            Gallery
          </button>
        </nav>
        <ThemeSwitcher /> {/* Button to toggle light/dark mode */}
      </header>
      <main className="p-4">
        {/* Show either the Converter or Gallery based on state */}
        {page === "converter" && <Converter />}
        {page === "gallery" && <Gallery />}
      </main>
    </div>
  );
}
