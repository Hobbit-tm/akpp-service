import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { brands } from "./data/brands";
import { services } from "./data/services";

// Страницы, которые собираем в статический HTML.
// Админка и 404 намеренно не пререндерятся.
export const prerenderPaths = [
  "/",
  "/remont-akpp",
  ...brands.map((brand) => `/remont-akpp/${brand.slug}`),
  ...services.map((service) => `/${service.slug}`),
];

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;

  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script]
        .map((tags) => tags.toString())
        .join("\n")
    : "";

  return { html, head };
}
