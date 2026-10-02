import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://manhattanhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
