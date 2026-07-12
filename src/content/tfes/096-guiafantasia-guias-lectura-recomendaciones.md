---
id: 096

title: "GuíaFantasia: aplicación web para la gestión de guías de lectura y recomendaciones"

shortTitle: "GuíaFantasia: guías de lectura y recomendaciones"

slug: guiafantasia-guias-lectura-recomendaciones

status: finished

created: 2025-09-01

research: false

categories:
  - development

degree:
  - TFG

summary: >
  Desarrollo de una aplicación web para crear y compartir guías de lectura,
  representar visualmente el orden entre libros y ofrecer recomendaciones
  personalizadas a partir de las valoraciones y listas seguidas por los usuarios.

tags:
  - Guías de lectura
  - Sistemas de recomendación
  - Desarrollo web
  - Visualización de grafos
  - Google Books API

student: Francisco Manuel Granados Díaz

study: "Grado en Ingeniería del Software"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/096-guiafantasia-guias-lectura-recomendaciones.pdf
---

## Descripción

Los universos literarios de fantasía pueden incluir numerosas sagas, historias relacionadas y diferentes órdenes posibles de lectura, lo que dificulta que los nuevos lectores sepan por dónde comenzar. GuíaFantasia se desarrolló para facilitar la exploración de estos universos mediante guías de lectura estructuradas y recomendaciones adaptadas a cada usuario.

La aplicación permite buscar libros, consultar su información, valorarlos y crear listas de lectura compartidas. Estas listas se representan como grafos interactivos en los que los libros actúan como nodos y las relaciones indican posibles órdenes de lectura, permitiendo definir varios puntos de inicio y recorridos alternativos.

El sistema incorpora además funcionalidades sociales básicas, como consultar perfiles, seguir listas creadas por otros usuarios y recibir recomendaciones basadas en los libros valorados y en la progresión dentro de las listas seguidas.

## Trabajo realizado

- Análisis de requisitos funcionales y no funcionales y definición de los principales casos de uso.
- Diseño de una arquitectura cliente-servidor basada en Flask, Jinja2 y Microsoft SQL Server.
- Diseño e implementación del modelo relacional para gestionar usuarios, libros, listas, valoraciones y seguimientos.
- Desarrollo del registro y autenticación de usuarios mediante Google OAuth 2.0.
- Integración con Google Books API para obtener títulos, autoría, ISBN, portadas y descripciones.
- Implementación de búsquedas de libros por título, autor e ISBN.
- Desarrollo de la gestión de perfiles, valoraciones de libros y seguimiento de listas.
- Representación y edición de órdenes de lectura mediante grafos interactivos con Vis.js.
- Implementación de un sistema de recomendaciones basado en las valoraciones y en la progresión dentro de las listas seguidas.
- Integración con Cloudinary para almacenar las imágenes de perfil.
- Realización de pruebas funcionales, de integración y de rendimiento básico.
- Elaboración de manuales de instalación y de usuario.
