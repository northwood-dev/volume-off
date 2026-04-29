import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		draft: z.boolean().optional(),
		tags: z.array(z.string()).optional(),
		title: z.string(),
		description: z.string(),
		time: z.number().optional(),
		intro: z.string(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.object({
			src: z.string().optional(),
			caption: z.string().optional(),
			alt: z.string().optional(),
		}).optional(),
	}),
});

export const collections = { blog };
