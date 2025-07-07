import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3002,
    allowedHosts: ["ready4ai.devplus.edu.vn"],
  },
  plugins: [react()],
});
