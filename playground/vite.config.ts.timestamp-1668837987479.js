// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// package.json
var package_default = {
  name: "vue-next-ellipsis-playground",
  private: true,
  version: "0.0.0",
  type: "module",
  scripts: {
    dev: "vite",
    "build:playground": "vite build",
    preview: "vite preview",
    pre: "npm install"
  },
  peerDependencies: {
    vite: "^2.0.0"
  }
};

// vite.config.ts
console.log(package_default.name);
var vite_config_default = defineConfig({
  base: `../${package_default.name}/`,
  plugins: [vue()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKHBrZy5uYW1lKVxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IGAuLi8ke3BrZy5uYW1lfS9gLFxyXG4gIHBsdWdpbnM6IFt2dWUoKV0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCLFFBQVEsSUFBSSxnQkFBSSxJQUFJO0FBRXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sTUFBTSxnQkFBSTtBQUFBLEVBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
