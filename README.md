# TFEs

Sitio web para presentar propuestas, trabajos en curso y Trabajos Fin de
Estudios dirigidos en el Departamento de Lenguajes y Ciencias de la
Computación de la Universidad de Málaga.

La web está desarrollada con [Astro](https://astro.build/) y su contenido se
gestiona principalmente mediante ficheros Markdown.

## Contenido

Los trabajos se organizan en tres estados:

- `proposal`: propuestas disponibles.
- `ongoing`: trabajos actualmente en desarrollo.
- `finished`: trabajos finalizados o defendidos.
- `archived`: propuestas archivadas que no deben mostrarse públicamente.

Cada TFE dispone de una ficha Markdown con sus metadatos, descripción,
categorías y recursos asociados.

## Estructura del proyecto

```text
.
├── public
│   ├── documents
│   └── images
├── src
│   ├── components
│   ├── content
│   │   ├── categories
│   │   └── tfes
│   ├── layouts
│   ├── pages
│   │   └── tfe
│   └── styles
├── astro.config.mjs
├── package.json
└── README.md