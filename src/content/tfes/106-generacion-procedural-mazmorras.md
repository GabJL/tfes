---
id: 106

title: "Construyendo Mazmorras: generación procedural multiobjetivo de mapas de mazmorras 2D"

slug: generacion-procedural-mazmorras

status: ongoing

created: 2025-09-01

research: true

categories:
  - ai
  - development

degree:
  - TFG

summary: >
  Desarrollo de un sistema para generar automáticamente mapas de mazmorras 2D
  mediante optimización multiobjetivo, permitiendo obtener niveles con distintas
  características de jugabilidad y exploración.

tags:
  - Generación de mapas procedural
  - Videojuegos
  - Optimización multiobjetivo
  - Metaheurísticas
  - NSGA-II

student: Pedro Rueda Cabrera

study: "Grado en Ingeniería del Software"

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Christian Cintrano López
---

## Descripción

La generación procedural de contenido es una técnica ampliamente utilizada en videojuegos para aumentar la variedad y la rejugabilidad. Sin embargo, los generadores tradicionales suelen depender de procesos aleatorios que dificultan controlar características importantes de los niveles, como su dificultad, la exploración o la distribución de habitaciones y caminos.

Este trabajo plantea la generación de mapas de mazmorras como un problema de optimización multiobjetivo. Cada mapa se representa mediante una estructura que puede ser evaluada automáticamente utilizando distintas métricas relacionadas con la jugabilidad. A partir de ellas, una metaheurística como NSGA-II busca generar conjuntos de mapas que representen diferentes compromisos entre los objetivos considerados.

Además del núcleo algorítmico, el proyecto desarrolla un sistema software que permite configurar los parámetros de generación y visualizar de forma interactiva los mapas obtenidos mediante una interfaz web. La arquitectura está diseñada para facilitar la incorporación de nuevas métricas, operadores de generación y algoritmos de optimización en el futuro.

## Líneas principales

- Diseño de una representación para mapas de mazmorras 2D adecuada para su optimización.
- Definición de métricas relacionadas con la jugabilidad, la exploración y la estructura de los mapas.
- Formulación del problema como un problema de optimización multiobjetivo.
- Desarrollo de algoritmos de generación procedural y optimización mediante NSGA-II.
- Diseño de una arquitectura software modular y extensible.
- Desarrollo de una aplicación web para configurar experimentos y visualizar los mapas generados.
- Evaluación experimental de los resultados obtenidos.

## Qué aprenderás

- Técnicas de generación procedural de contenido para videojuegos.
- Optimización multiobjetivo y uso práctico de metaheurísticas como NSGA-II.
- Diseño e implementación de algoritmos de optimización.
- Desarrollo de aplicaciones web modernas con separación entre frontend y backend.
- Diseño de arquitecturas software modulares y extensibles.
- Diseño experimental y análisis de resultados.
