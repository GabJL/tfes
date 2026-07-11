---
id: 004

title: "Feedback inteligente para VPL mediante modelos de lenguaje locales"

slug: feedback-vpl-llm

status: proposal

created: 2026-07-11

research: true

categories:
  - education
  - ai

degree:
  - TFG
  - TFM

summary: >
  Integración de modelos de lenguaje ejecutados localmente en VPL para generar
  un feedback más útil, personalizado y alineado con los criterios docentes.

tags:
  - LLM
  - VPL
  - Educación
  - RAG
  - Programación
  - IA

supervisors:
  - Gabriel Luque
---

## Descripción

Las herramientas de evaluación automática, como VPL, permiten comprobar si un programa produce la salida esperada, pero el feedback que ofrecen al alumnado suele limitarse a indicar si una prueba ha sido superada o no. Aspectos importantes como la legibilidad del código, el estilo de programación, la elección de estructuras de datos o la organización de la solución quedan fuera de la evaluación automática, obligando al profesorado a dedicar un tiempo considerable para proporcionar comentarios individualizados.

Este trabajo propone desarrollar un sistema capaz de generar feedback automático utilizando modelos de lenguaje ejecutados localmente, evitando así enviar el código del alumnado a servicios externos y preservando completamente su privacidad. El sistema deberá integrarse con VPL y producir comentarios útiles para mejorar el aprendizaje, explicando errores, proponiendo mejoras o sugiriendo alternativas de implementación.

Además del desarrollo del prototipo, el trabajo permitirá investigar distintas estrategias para adaptar los modelos de lenguaje al contexto de una asignatura concreta, estudiando alternativas como el uso de RAG, el empleo de ejemplos de referencia o técnicas de ajuste ligero. Finalmente, se evaluará la utilidad, coherencia y precisión del feedback generado en distintos tipos de ejercicios.

## Posibles líneas de trabajo

- Analizar las limitaciones del feedback proporcionado actualmente por VPL.
- Seleccionar e integrar un modelo de lenguaje ejecutable localmente.
- Diseñar un sistema capaz de generar comentarios sobre calidad, estilo y organización del código.
- Estudiar distintas estrategias para adaptar el modelo al contexto docente mediante RAG u otras técnicas.
- Integrar el sistema dentro del flujo habitual de evaluación de VPL.
- Diseñar un protocolo de evaluación para medir la utilidad y consistencia del feedback generado.
- Comparar diferentes configuraciones del sistema y analizar sus ventajas e inconvenientes.

## Qué aprenderás

- Funcionamiento práctico de los modelos de lenguaje.
- Técnicas de recuperación aumentada (RAG).
- Integración de IA en herramientas docentes.
- Diseño de sistemas de evaluación automática.
- Evaluación experimental de sistemas basados en IA.
- Desarrollo de software orientado a la docencia.