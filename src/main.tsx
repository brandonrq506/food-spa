import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { CartProvider } from "./features/cart";
import { ThemeProvider } from "./features/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ThemeProvider>
    </React.StrictMode>
);