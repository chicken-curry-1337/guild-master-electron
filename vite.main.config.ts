import { defineConfig } from "vite";
import * as path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
    alias: [{ find: "@lib", replacement: path.resolve(__dirname, "src/lib") }],
  },
});
