import { getCollection } from 'astro:content';

/** Published academic write-ups, in their chosen order. */
export const getPublishedWriteups = async () =>
  (await getCollection('projects', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
