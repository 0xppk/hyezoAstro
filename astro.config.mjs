import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  output: "server",
  adapter: vercel()
});