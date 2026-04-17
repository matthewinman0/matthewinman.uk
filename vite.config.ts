import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    cloudflare({
      viteEnvironment: {
        name: "client"
      }
    })
  ],

  build: {
    ssr: false, // 🔥 important override

    rollupOptions: {
      input: {
        main: "index.html",
        mapgen: "apps/mapgen/index.html"
      }
    }
  }
});