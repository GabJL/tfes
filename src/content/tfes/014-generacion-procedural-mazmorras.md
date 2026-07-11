---
id: 014

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
  - Generación procedural
  - Optimización multiobjetivo
  - Metaheurísticas
  - NSGA-II
  - Videojuegos
  - Generación de mapas

student: Pedro Rueda Cabrera

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Christian Cintrano López

resources:
  proposal: /documents/014-generacion-procedural-mazmorras-anteproyecto.pdf
---

## Descripción

La generación procedural de contenido es una técnica ampliamente utilizada en videojuegos para aumentar la variedad y la rejugabilidad. Sin embargo, los generadores tradicionales suelen depender de procesos aleatorios que dificultan controlar características importantes de los niveles, como su dificultad, la exploración o la distribución de habitaciones y caminos. 

Este trabajo plantea la generación de mapas de mazmorras como un problema de optimización multiobjetivo. Cada mapa se representa mediante una estructura que puede ser evaluada automáticamente utilizando distintas métricas relacionadas con la jugabilidad. A partir de ellas, una metaheurística como NSGA-II busca generar conjuntos de mapas que representen diferentes compromisos entre los objetivos considerados. 

Además del núcleo algorítmico, el proyecto desarrolla un sistema software que permite configurar los parámetros de generación y visualizar de forma interactiva los mapas obtenidos mediante una interfaz web. La arquitectura está diseñada para facilitar la incorporación de nuevas métricas, operadores de generación y algoritmos de optimización en el futuro. 

## Trabajo desarrollado

- Diseño de una representación para mapas de mazmorras 2D.
- Definición de métricas cuantificables relacionadas con la jugabilidad y la estructura del mapa.
- Formulación de la generación procedural como un problema de optimización multiobjetivo.
- Implementación de un generador de mapas y del sistema de validación.
- Desarrollo de una metaheurística basada en NSGA-II.
- Desarrollo de un backend reutilizable para el proceso de generación.
- Desarrollo de una interfaz web para configurar parámetros y visualizar los mapas generados.
- Evaluación experimental de la calidad de los mapas obtenidos.
