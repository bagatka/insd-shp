import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const product = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/products",
  }),
  schema: z.object({
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    slug: z.string(),
    price: z.number(),
    sizes: z.string(),
    color: z.string(),
    available: z.boolean(),
    material: z.string(),
  }),
});

export default product;