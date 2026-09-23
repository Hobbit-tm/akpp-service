import { ViteSSG } from "vite-ssg";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

export const createRoot = ViteSSG(
  App,
  {
    routes: [
      { path: "/" },
      { path: "/diagnostika-akpp" },
      { path: "/remont-dsg" },
      { path: "/remont-cvt" },
      { path: "/zamena-masla-akpp" },

      { path: "/remont-akpp/toyota" },
      { path: "/remont-akpp/bmw" },
      { path: "/remont-akpp/lexus" },
      { path: "/remont-akpp/kia" },
      { path: "/remont-akpp/hyundai" },
      { path: "/remont-akpp/audi" },
      { path: "/remont-akpp/skoda" },
      { path: "/remont-akpp/volkswagen" },
      { path: "/remont-akpp/mercedes" },
    ],
  },
  ({ app }) => {
    app.use(BrowserRouter);
  },
);
