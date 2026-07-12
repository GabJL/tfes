---
id: 092

title: "Estudio comparativo de la calidad del código generado por LLMs comerciales y de código abierto para el desarrollo de aplicaciones web full-stack"

shortTitle: "Comparativa de LLMs para desarrollo web full-stack"

slug: comparativa-calidad-codigo-llms-desarrollo-web

status: finished

created: 2025-07-10

research: true

categories:
  - ai
  - software

degree:
  - TFM

summary: >
  Estudio experimental que compara GPT-4o mediante GitHub Copilot y Llama 3.1 en la generación de código para aplicaciones web full-stack, evaluando su desempeño, sus errores y la calidad del código mediante SonarQube.

tags:
  - Generación de código
  - Desarrollo web
  - Modelos de lenguaje

student: Javier Ramírez Rueda

study: "Máster Universitario en Ingeniería del Software e Inteligencia Artificial"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque
  - Rubén Saborido Infantes

resources:
  thesis: /documents/092-comparativa-calidad-codigo-llms-desarrollo-web.pdf
---

## Descripción

Este trabajo compara la capacidad de un modelo comercial, GPT-4o integrado en GitHub Copilot, y un modelo abierto, Llama 3.1 8B, para generar código destinado al desarrollo de aplicaciones web full-stack.

La evaluación se realizó mediante un experimento estructurado basado en dos aplicaciones de distinta complejidad: un gestor de recetas y una plataforma inmobiliaria. Ambas utilizaron Django y PostgreSQL en el servidor y React con TypeScript en el cliente.

Los resultados muestran que ambos modelos pueden generar aplicaciones funcionales y código de calidad similar, aunque GitHub Copilot obtuvo mejores resultados en las operaciones más complejas. La principal limitación detectada fue el aumento del número de entidades y relaciones que debían procesarse simultáneamente.

## Trabajo realizado

- Revisión de asistentes de programación comerciales y abiertos.
- Diseño de dos aplicaciones web con diferente complejidad.
- Preparación de plantillas en Django y React y definición de 40 operaciones aisladas de servidor y cliente. Para cada operación se elaboraron instrucciones uniformes con petición, procedimiento y contexto de código.
- Generación de cuatro versiones completas de las aplicaciones, dos por cada modelo, registrando para cada operación su resultado, extensión, errores y dificultad como fácil, media o difícil.
- Evaluación funcional y análisis estático del código generado con SonarQube, revisando problemas de mantenibilidad, fiabilidad, duplicación y otros avisos.
- Análisis de las ventajas y limitaciones de ambas alternativas.
