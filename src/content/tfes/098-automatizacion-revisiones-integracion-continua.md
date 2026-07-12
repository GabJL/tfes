---
id: 098

title: "Automatización de revisiones en integración continua"

shortTitle: "Automatización de revisiones en CI/CD"

slug: automatizacion-revisiones-integracion-continua

status: finished

created: 2025-09-01

research: true

categories:
  - software
  - ai

degree:
  - TFM

summary: >
  Desarrollo de un sistema para automatizar revisiones de código en entornos de
  integración continua mediante optimización multiobjetivo, combinando distintas
  versiones de un archivo para obtener una solución que maximice la corrección y
  minimice los cambios necesarios.

tags:
  - Reparación automática de programas
  - Optimización multiobjetivo
  - CI/CD
  - NSGA-II
  - SPEA2
  - JUnit
  - Defects4J

student: Zoilo Hernández Duarte

study: "Máster en Ingeniería del Software e Inteligencia Artificial"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/098-automatizacion-revisiones-integracion-continua.pdf
---

## Descripción

La revisión continua del código sigue siendo una de las tareas más costosas dentro de los procesos de integración y despliegue continuos (CI/CD). En este trabajo se plantea un enfoque basado en optimización multiobjetivo para automatizar la selección de la mejor versión de un archivo a partir de dos alternativas existentes.

La propuesta modela el problema como una búsqueda sobre las diferencias entre ambas versiones, utilizando representaciones por fragmentos o por líneas y evaluando automáticamente cada solución mediante compilación y ejecución de pruebas unitarias. Los objetivos consisten en minimizar el número de pruebas fallidas y reducir la cantidad de código recuperado de la versión original.

Para resolver el problema se emplean algoritmos evolutivos como NSGA-II y SPEA2, comparándolos con búsqueda aleatoria sobre diferentes casos de estudio, incluyendo instancias reales de Defects4J.

## Trabajo realizado

- Revisión bibliográfica sobre CI/CD, reparación automática de programas y búsqueda basada en metaheurísticas.
- Diseño de un modelo de representación de soluciones basado en diferencias entre versiones de código.
- Implementación de un sistema de evaluación automática mediante compilación y pruebas con JUnit.
- Desarrollo de la integración con jMetal para ejecutar algoritmos multiobjetivo.
- Implementación y comparación de NSGA-II, SPEA2 y búsqueda aleatoria.
- Evaluación experimental utilizando un caso propio y múltiples instancias del benchmark Defects4J.
- Análisis de resultados mediante métricas como hipervolumen, spread y calidad de las soluciones obtenidas.
