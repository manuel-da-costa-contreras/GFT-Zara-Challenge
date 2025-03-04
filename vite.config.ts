import { defineConfig, ServerOptions } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const commonServerOptions: ServerOptions = {
  port: 3000,
  strictPort: true,
  watch: {
    ignored: [/tsconfig\.json$/, /vite\.config\.ts$/],
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    ...commonServerOptions,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/app/components"),
      "@views": path.resolve(__dirname, "src/app/views"),
    },
  },
});
