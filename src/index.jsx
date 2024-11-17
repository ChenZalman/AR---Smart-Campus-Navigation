import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

import { AuthContextProvider } from './context/AuthContext';
import { BuildingContextProvider } from "./Context/BuildingContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <AuthContextProvider>
        <BuildingContextProvider>
            <App />
        </BuildingContextProvider>
    </AuthContextProvider>
);
