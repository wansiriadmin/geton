import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    urlSlug: z.string(), // NOTE: NOT "slug" — that's a reserved Astro field
    order: z.number(),
    image: z.string(),
    imageAlt: z.string(),
    label: z.string(),
    productCode: z.string(),
    tagline: z.string(),
    description: z.string(),
    applications: z.array(z.string()),
    suitability: z.array(z.object({
      label: z.string(),
      percent: z.number(),
    })),
    legacyUrl: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    urlSlug: z.string(),
    heroImage: z.string().optional(),
    secondaryImage: z.string().optional(),
  }),
});

export const collections = { products, pages };
