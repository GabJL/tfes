---
id: 104

title: "Análisis experimental de orquestación de agentes basados en LLMs para la reparación automática de software"

slug: agentes-llm-reparacion-software

status: finished

created: 2025-09-01

research: true

categories:
  - software
  - ai

degree:
  - TFM

summary: >
  Comparación experimental de distintas arquitecturas de agentes basados en
  modelos de lenguaje para reparar automáticamente errores en proyectos
  software guiándose por sus pruebas.

tags:
  - LLM
  - Agentes
  - Reparación automática
  - Pruebas de software
  - Sistemas multiagente

student: Adrián Torremocha Doblas

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Francisco Javier Servant Cortes

resources:
  thesis: /documents/104-agentes-llm-reparacion-software.pdf
---

## Descripción

La reparación automática de software busca generar modificaciones capaces de corregir errores sin intervención directa de un desarrollador. La aparición de modelos de lenguaje capaces de explorar repositorios, modificar código y ejecutar pruebas permite abordar este problema mediante agentes que trabajan de forma iterativa sobre proyectos reales.

En este trabajo se desarrolló una plataforma experimental para estudiar cómo influye la arquitectura utilizada para organizar estos agentes. Cada intento de reparación se ejecuta en un contenedor aislado, se registran las acciones realizadas y se conserva la información necesaria para comparar las distintas configuraciones de forma controlada y reproducible.

El estudio compara arquitecturas monoagente, Planner-Executor y orquestadores con subagentes, utilizando tanto modelos locales como un modelo propietario. La evaluación se realizó sobre QuixBugs y BugsInPy, distinguiendo entre parches que simplemente superan las pruebas y reparaciones que corrigen realmente el comportamiento del programa.

## Trabajo realizado

- Desarrollo de una plataforma experimental para reparación automática de proyectos Python.
- Ejecución aislada de cada intento mediante contenedores.
- Implementación de herramientas para explorar, editar, ejecutar y validar repositorios.
- Desarrollo de diferentes arquitecturas monoagente y multiagente.
- Integración de modelos locales y propietarios.
- Evaluación sobre los benchmarks QuixBugs y BugsInPy.
- Registro del uso de herramientas, tokens, tiempos, iteraciones y causas de fallo.
- Diseño de un proceso de validación semántica para diferenciar reparaciones correctas, plausibles y sobreajustadas.
- Comparación experimental del efecto de la arquitectura, el modelo y el contexto suministrado.