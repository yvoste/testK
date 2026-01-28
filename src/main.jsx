import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n/index.js"; // Import de la configuration i18n

import "./main.scss";

const root = document.getElementById("root");

// StrictMode =  outil pour avoir toutes les erreurs en dev mais à enlever une fois en prod

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
