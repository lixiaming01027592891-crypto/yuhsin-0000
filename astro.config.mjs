import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://yusin-moving.pages.dev',
  build: {
    format: 'file'
  }
});
