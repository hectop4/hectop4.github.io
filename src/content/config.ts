import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title:       z.string(),
  date:        z.coerce.date(),
  excerpt:     z.string(),
  lang:        z.enum(['es', 'en', 'pt']),
  tags:        z.array(z.string()).optional().default([]),
  coverImage:  z.string().optional(),
  // Only for reviews
  item:        z.string().optional(),
  itemType:    z.enum(['book', 'movie', 'series']).optional(),
  itemAuthor:  z.string().optional(),
  rating:      z.number().min(1).max(5).optional(),
  spoilers:    z.boolean().optional().default(false),
});

export const collections = {
  projects: defineCollection({ type: 'content', schema: postSchema }),
  events:   defineCollection({ type: 'content', schema: postSchema }),
  thoughts: defineCollection({ type: 'content', schema: postSchema }),
  reviews:  defineCollection({ type: 'content', schema: postSchema }),
};
