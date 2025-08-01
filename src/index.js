import React from "react"; // Imports React core functionality (needed for JSX)
import ReactDOM from "react-dom/client"; // Imports new root rendering API for React 18+
import App from "./App"; // Imports your main App component

const root = ReactDOM.createRoot(document.getElementById("root")); 
// Finds the <div id="root"></div> in your HTML, and creates a React "root" there

root.render(<App />); 
// Actually "draws" your App component (and everything inside it) into the root div on the page

