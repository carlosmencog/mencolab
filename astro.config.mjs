import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mencolab.com",
  integrations: [sitemap()],
  build: { format: "directory" },
  security: { checkOrigin: true },
});
