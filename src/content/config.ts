import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    author: z.string().default('煜欣搬家'),
    category: z.string(),
    tags: z.array(z.string()),
    image_1_prompt: z.string().optional(),
    image_2_prompt: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
