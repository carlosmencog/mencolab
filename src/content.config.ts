import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    image: z.string(),
    alt: z.string(),
    order: z.number().int().positive(),
    visible: z.boolean().default(true),
  }),
});
export const collections = { portfolio };
