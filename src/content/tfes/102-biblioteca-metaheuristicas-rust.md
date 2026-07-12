---
id: 102

title: "Biblioteca extensible de optimización metaheurística en Rust"

slug: biblioteca-metaheuristicas-rust

status: finished

created: 2025-09-01

research: true

categories:
  - software
  - ai

degree:
  - TFG

summary: >
  Diseño e implementación de una biblioteca modular de optimización
  metaheurística en Rust, con soporte para problemas monoobjetivo y
  multiobjetivo y un motor de experimentación reproducible.

tags:
  - Rust
  - Metaheurísticas
  - Optimización multiobjetivo
  - Bibliotecas software
  - Computación evolutiva

student: David Muñoz del Valle

academicYear: 2025-2026

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/102-biblioteca-metaheuristicas-rust.pdf
  repository: https://github.com/DRLKs/roma
---

## Descripción

Las metaheurísticas permiten obtener soluciones de calidad para problemas de optimización complejos en los que los métodos exactos resultan demasiado costosos. Aunque existen bibliotecas maduras en lenguajes como Java, Python o C++, el soporte disponible en Rust es más reducido, especialmente para sistemas que combinen extensibilidad, rendimiento y experimentación.

En este trabajo se diseñó e implementó una biblioteca de optimización metaheurística completamente desarrollada en Rust. La arquitectura desacopla la representación de los problemas, las soluciones, los operadores y los algoritmos, facilitando la incorporación de nuevos componentes sin modificar el núcleo de la biblioteca.

La herramienta ofrece soporte para optimización monoobjetivo y multiobjetivo, algoritmos basados en trayectoria y población, ejecución paralela, observadores, persistencia de estados y un motor para realizar experimentos. Su rendimiento y la calidad de sus resultados se evaluaron frente a bibliotecas de referencia mediante distintos problemas de optimización.

## Trabajo realizado

- Diseño de una arquitectura modular y extensible basada en las características de Rust.
- Implementación de abstracciones para problemas, soluciones, operadores y algoritmos.
- Desarrollo de metaheurísticas monoobjetivo y multiobjetivo.
- Incorporación de mecanismos de paralelización, monitorización y recuperación de ejecuciones.
- Desarrollo de pruebas unitarias, pruebas de integración y ejemplos de uso.
- Creación de un motor para ejecutar y analizar campañas experimentales.
- Comparación con bibliotecas como jMetal, jMetalPy, pagmo, DEAP, MEALPY y SciPy.
- Evaluación sobre problemas continuos, discretos, combinatorios y multiobjetivo.