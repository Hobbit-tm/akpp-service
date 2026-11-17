import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Если страница пришла из пререндера, оживляем готовый HTML,
// иначе (dev-режим) строим страницу с нуля.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
