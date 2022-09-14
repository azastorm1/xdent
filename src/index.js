import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { CartProvider } from "react-use-cart";
const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
);
