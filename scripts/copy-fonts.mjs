// Copy the font CSS + woff2 files into www/vendor so the app works offline.
import { cpSync, mkdirSync, rmSync } from "node:fs";

for (const pkg of ["lora", "be-vietnam-pro"]) {
  const from = `node_modules/@fontsource/${pkg}`;
  const to = `www/vendor/${pkg}`;
  rmSync(to, { recursive: true, force: true });
  mkdirSync(to, { recursive: true });
  cpSync(`${from}/files`, `${to}/files`, { recursive: true });
  for (const css of ["400.css", "500.css", "500-italic.css", "600.css"]) {
    try { cpSync(`${from}/${css}`, `${to}/${css}`); } catch {}
  }
  console.log("fonts:", pkg);
}
