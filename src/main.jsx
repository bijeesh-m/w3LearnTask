import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import DataProvider from "./context/DataProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
    <DataProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </DataProvider>
);
