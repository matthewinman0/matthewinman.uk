import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/', // ← make sure this exist
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});