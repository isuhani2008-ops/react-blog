import React from "react";
import ReactDOM from "react-dom/client";  // ✅ THIS LINE WAS MISSING
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);