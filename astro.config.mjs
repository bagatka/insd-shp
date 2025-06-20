// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(
  {
    site: 'https://bagatka.github.io',
    base: '/insd-shp/',
    vite: {
      // @ts-ignore
      plugins: [tailwindcss()],
    },
  }
);
