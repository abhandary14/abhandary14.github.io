import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/blog/*.md. Posts with `draft: true` are never published.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Academic project write-ups live in src/content/projects/*.md (see _template.md).
// Each published one gets a card in Featured Projects and its own page at /projects/<filename>/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.string().default('Academic project'),
    context: z.string().optional(), // e.g. "CSC 591 · NC State · Spring 2025"
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
