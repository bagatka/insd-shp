// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(
  {
    site: 'https://bagatka.github.io',
    base: '/insd-shp/',
    image: {
      service: {
        entrypoint: 'astro/assets/services/sharp',
        config: {
          quality: 95,
          // Limit format conversion
          limitInputPixels: false,
        }
      }
    },
    vite: {
      // @ts-ignore
      plugins: [tailwindcss()],
    },
  }
);
