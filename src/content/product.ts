import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const product = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/products",
  }),
  schema: ({ image }) => z.object({
    image: z.object({
      src: image(),
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