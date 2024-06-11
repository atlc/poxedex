import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("ketchum")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
