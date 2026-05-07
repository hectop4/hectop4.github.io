import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hectop4.github.io',
  integrations: [tailwind()],
});
