import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { CartProvider } from "./features/cart";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);