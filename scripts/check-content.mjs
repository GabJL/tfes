#!/usr/bin/env node
// Valida referencias cruzadas en el contenido que Zod no puede comprobar:
// categorías inexistentes, ids/slugs duplicados o desalineados con el
// nombre de fichero, y recursos locales que no existen en /public.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const tfesDir = join(rootDir, "src/content/tfes");
const categoriesDir = join(rootDir, "src/content/categories");
const publicDir = join(rootDir, "public");

const RESOURCE_KEYS = [
  "thesis",
  "proposal",
  "repository",
  "paper",
  "slides",
  "poster",
  "video",
];

function readMarkdownFiles(dir) {
  return readdirSync(dir)
    .filter((file) => extname(file) === ".md")
    .map((file) => {
      const filePath = join(dir, file);
      const { data } = matter(readFileSync(filePath, "utf-8"));
      return { file, data };
    });
}

function isExternalUrl(value) {
  return /^https?:\/\//i.test(value);
}

const errors = [];

// --- Categorías ---

const categoryEntries = readMarkdownFiles(categoriesDir);
const categoryIds = new Set(categoryEntries.map(({ data }) => data.id));

const duplicateCategoryIds = categoryEntries
  .map(({ data }) => data.id)
  .filter((id, index, all) => all.indexOf(id) !== index);

for (const id of new Set(duplicateCategoryIds)) {
  errors.push(`Categoría duplicada: id "${id}" aparece más de una vez.`);
}

// --- TFEs ---

const tfeEntries = readMarkdownFiles(tfesDir);
const seenIds = new Map();
const seenSlugs = new Map();

for (const { file, data } of tfeEntries) {
  const label = `${file}`;

  // id/slug duplicados
  if (seenIds.has(data.id)) {
    errors.push(
      `${label}: id ${data.id} ya usado en ${seenIds.get(data.id)}.`
    );
  } else {
    seenIds.set(data.id, file);
  }

  if (seenSlugs.has(data.slug)) {
    errors.push(
      `${label}: slug "${data.slug}" ya usado en ${seenSlugs.get(data.slug)}.`
    );
  } else {
    seenSlugs.set(data.slug, file);
  }

  // el nombre de fichero debe ser <id>-<slug>.md
  const expectedFile = `${data.id}-${data.slug}.md`;
  if (file !== expectedFile) {
    errors.push(
      `${label}: el nombre de fichero no coincide con "id-slug" (se esperaba "${expectedFile}").`
    );
  }

  // categorías referenciadas deben existir
  for (const categoryId of data.categories ?? []) {
    if (!categoryIds.has(categoryId)) {
      errors.push(
        `${label}: la categoría "${categoryId}" no existe en src/content/categories.`
      );
    }
  }

  // recursos locales deben existir en /public
  for (const key of RESOURCE_KEYS) {
    const value = data.resources?.[key];
    if (!value || isExternalUrl(value)) {
      continue;
    }

    const localPath = join(publicDir, value);
    if (!existsSync(localPath)) {
      errors.push(
        `${label}: resources.${key} referencia "${value}", que no existe en public/.`
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} error(es) de validación de contenido:\n`);
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  process.exit(1);
}

console.log(
  `✓ Contenido válido: ${tfeEntries.length} TFEs, ${categoryEntries.length} categorías.`
);
