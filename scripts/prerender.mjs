// Собирает статический HTML для каждой публичной страницы.
// Запускается после `vite build` и `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDir = path.join(root, "dist");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const serverEntry = pathToFileURL(
  path.join(root, "dist-ssr", "entry-server.js"),
).href;
const { render, prerenderPaths } = await import(serverEntry);

const sitemapUrls = [];

for (const urlPath of prerenderPaths) {
  const { html, head } = render(urlPath);

  const page = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace("</head>", `${head}\n  </head>`);

  const outFile =
    urlPath === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, urlPath.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);

  sitemapUrls.push(urlPath);
  console.log(`prerendered ${urlPath}`);
}

const siteOrigin = process.env.SITE_ORIGIN || "https://remont-akpp.kz";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map((p) => `  <url><loc>${siteOrigin}${p}</loc></url>`)
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${sitemapUrls.length} urls`);
