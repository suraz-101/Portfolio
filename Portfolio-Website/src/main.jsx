import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToggleContextProvider } from "./context/toggleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleContextProvider>
  </React.StrictMode>
);
