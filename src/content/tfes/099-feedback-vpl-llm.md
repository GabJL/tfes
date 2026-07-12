---
id: 099

title: "Evaluación y retroalimentación automática de ejercicios de programación mediante VPL y modelos de lenguaje"

shortTitle: "Feedback inteligente para VPL mediante LLM"

slug: feedback-vpl-llm

status: finished

created: 2025-12-01

research: true

categories:
  - software
  - education

degree:
  - TFG

summary: >
  Desarrollo de un sistema que integra Virtual Programming Lab (VPL) con
  modelos de lenguaje para proporcionar retroalimentación automática,
  personalizada y configurable sobre ejercicios de programación.

tags:
  - Evaluación automática
  - Feedback inteligente
  - Moodle
  - VPL
  - LLM
  - FastAPI

student: Manuel Valdivielso Rodríguez

study: "Grado en Ingeniería Informática"

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Rafael Marcos Luque Baena

resources:
  thesis: /documents/099-feedback-vpl-llm.pdf
---

## Descripción

La evaluación automática de ejercicios de programación permite comprobar la corrección funcional del código entregado por el alumnado, pero normalmente ofrece poca información sobre la calidad de la solución o cómo mejorarla. Los modelos de lenguaje abren nuevas posibilidades para proporcionar una retroalimentación más rica, personalizada y adaptada a los criterios docentes.

En este trabajo se desarrolló un sistema que integra Virtual Programming Lab (VPL) con modelos de lenguaje para generar automáticamente comentarios sobre las entregas realizadas por los estudiantes. La arquitectura desarrollada permite configurar distintos proveedores de modelos, definir criterios específicos mediante *prompts* y devolver la retroalimentación directamente al alumnado tras la evaluación automática.

La solución se implementó mediante una API desacoplada que facilita su integración con VPL y permite extender el sistema con nuevos modelos de lenguaje o estrategias de evaluación en el futuro.

## Trabajo realizado

- Diseño de una arquitectura desacoplada para integrar VPL con modelos de lenguaje.
- Desarrollo de una API REST para gestionar el proceso de evaluación.
- Integración con distintos proveedores de modelos de lenguaje mediante OpenRouter.
- Implementación de un sistema configurable de *prompts* para adaptar la retroalimentación a distintos ejercicios.
- Generación automática de comentarios personalizados sobre las soluciones entregadas.
- Validación experimental del funcionamiento del sistema sobre ejercicios de programación.
