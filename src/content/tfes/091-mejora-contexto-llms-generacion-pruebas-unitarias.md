---
id: 091

title: "Mejora del contexto en LLMs para la generación de pruebas unitarias"

shortTitle: "Mejora del contexto para generar pruebas unitarias con LLMs"

slug: mejora-contexto-llms-generacion-pruebas-unitarias

status: finished

created: 2026-07-10

research: true

categories:
  - ai
  - software

degree:
  - TFM

summary: >
  Desarrollo y evaluación de un sistema basado en RAG que recupera información relevante de proyectos Java para mejorar la generación automática de pruebas unitarias mediante modelos de lenguaje.

tags:
  - Modelos de lenguaje
  - Pruebas unitarias
  - RAG
  - Generación de código

student: Alfonso Cabezas Fernández

study: "Máster Universitario en Ingeniería del Software e Inteligencia Artificial"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque
  - Francisco Javier Ferrer Urbano

resources:
  thesis: /documents/091-mejora-contexto-llms-generacion-pruebas-unitarias.pdf
  repository: https://github.com/AlfonsoCF02/TFM_RAG-test-generation
---

## Descripción

Este trabajo estudia cómo mejorar el contexto proporcionado a los modelos de lenguaje durante la generación automática de pruebas unitarias para proyectos Java. La propuesta utiliza un sistema RAG que representa el código mediante embeddings de GraphCodeBERT y recupera con FAISS los fragmentos más relacionados con cada clase.

El contexto recuperado se combina con el código de la clase y la configuración extraída del archivo `pom.xml` para construir los prompts enviados a Codestral. Las pruebas generadas se compilan automáticamente y, cuando contienen errores, se regeneran incorporando la información proporcionada por el compilador.

La evaluación sobre el proyecto JInstagram compara diferentes cantidades de contexto. Los resultados muestran que emplear el contexto completo mejora considerablemente la compilabilidad y la cobertura, alcanzando un 60 % de cobertura de sentencias y un 39 % de ramas, aunque algunas pruebas todavía presentan errores durante su ejecución.

## Trabajo realizado

- Revisión de técnicas de generación automática de pruebas y de herramientas basadas en búsqueda, aprendizaje automático, LLMs, recuperación de contexto y reparación iterativa.
- Desarrollo de un sistema en Python que procesa proyectos Java, genera embeddings con GraphCodeBERT, construye un índice FAISS y recupera los fragmentos de código más relevantes para cada clase.
- Integración de la configuración del `pom.xml`, diseño de prompts para Codestral y creación de un proceso automático de generación, compilación y regeneración de pruebas utilizando los errores detectados por `javac`.
- Implementación del registro de tokens, tiempos, intentos y resultados, junto con la ejecución mediante Maven y la medición de cobertura con JaCoCo.
- Evaluación en JInstagram utilizando el 100 %, 60 %, 40 % y 10 % del contexto, y comparación de cobertura, compilabilidad, estabilidad, consumo y tiempo con las pruebas originales y los resultados publicados para ChatUniTest.
