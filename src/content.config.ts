import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const categories = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/categories",
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string(),
    order: z.number(),
  }),
});

const tfes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/tfes",
  }),

  schema: z.object({
    id: z.number(),

    title: z.string(),

    shortTitle: z.string().optional(),
    
    slug: z.string(),

    status: z.enum([
      "proposal",
      "ongoing",
      "finished",
      "archived",
    ]),

    created: z.coerce.date(),

    research: z.boolean(),

    categories: z.array(z.string()),

    degree: z.array(
      z.enum(["TFG", "TFM"])
    ),

    summary: z.string(),

    tags: z.array(z.string()),

    supervisors: z.array(z.string()),

    student: z.string().optional(),

    study: z.string().optional(),

    academicYear: z.string().optional(),

    resources: z.object({
      thesis: z.string().optional(),
      proposal: z.string().optional(),
      repository: z.string().url().optional(),
      paper: z.string().optional(),
      slides: z.string().optional(),
      poster: z.string().optional(),
      video: z.string().url().optional(),
    }).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
});

export const collections = {
  categories,
  tfes,
  pages,
};