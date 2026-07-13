import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://GabJL.github.io",
    base: "/tfes",
    integrations: [sitemap()],
});