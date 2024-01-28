import { defineConfig } from "vite";
import * as path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
  alias: [{ find: "@lib", replacement: path.resolve(__dirname, "src/lib") }],
  },
});
