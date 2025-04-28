import includeHtml from "vite-plugin-include-html";
import { defineConfig } from "vite";
import forceReloadOnHtmlChange from './src/js/force-reload-on-html-change';


export default defineConfig({
  plugins: [includeHtml(), forceReloadOnHtmlChange()],
});