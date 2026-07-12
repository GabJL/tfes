---
id: 097

title: "Diseño de un método comparativo para copilotos de código con IA"

shortTitle: "Evaluación de copilotos de código con IA"

slug: evaluacion-copilotos-codigo-ia

status: finished

created: 2025-09-01

research: true

categories:
  - software
  - ai

degree:
  - TFM

summary: >
  Diseño e implementación de un framework modular para evaluar y comparar
  modelos de lenguaje orientados a la generación de código mediante tareas,
  configuraciones y criterios personalizables, ofreciendo resultados detallados
  sobre corrección, calidad y eficiencia.

tags:
  - LLM
  - Generación de código
  - Benchmarks
  - Evaluación de modelos
  - LLM-as-a-judge
  - Calidad del software
  - Spring AI
  - HumanEval

student: Donat Shergalis

study: "Máster en Ingeniería del Software e Inteligencia Artificial"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/097-evaluacion-copilotos-codigo-ia.pdf
---

## Descripción

La evaluación de modelos de lenguaje orientados a la generación de código suele realizarse mediante benchmarks que presentan diferentes limitaciones, como la saturación de sus tareas, la posible presencia de sus soluciones en los datos de entrenamiento, la escasa capacidad de configuración y la reducción de los resultados a unas pocas métricas agregadas.

En este trabajo se diseñó e implementó un framework modular para comparar modelos de lenguaje mediante tareas, configuraciones y criterios de evaluación personalizables. El sistema permite seleccionar tareas según su dificultad, área y lenguaje de programación, comparar varios modelos bajo las mismas condiciones y combinar diferentes mecanismos de evaluación en una única ejecución.

La solución incorpora pruebas unitarias, análisis estático, métricas de consumo de recursos, recuento de tokens y evaluación mediante otros modelos de lenguaje. Además, proporciona una interfaz web para configurar los experimentos, gestionar los conjuntos de tareas, monitorizar las ejecuciones y consultar en detalle los resultados obtenidos por cada modelo.

## Trabajo realizado

- Revisión de benchmarks y frameworks existentes para evaluar modelos de generación de código.
- Análisis de problemas como la saturación, la fuga de datos, el coste computacional y la limitada información proporcionada por las métricas tradicionales.
- Diseño de una arquitectura modular separando las tareas, las configuraciones de ejecución, el proceso de evaluación y la presentación de resultados.
- Definición de formatos YAML para describir conjuntos de tareas, configuraciones y resultados.
- Desarrollo de una interfaz web para gestionar tareas, configurar experimentos y consultar resultados.
- Implementación de una interfaz de consola compatible con procesos automatizados y entornos CI/CD.
- Integración con distintos proveedores y modelos mediante Spring AI.
- Incorporación de pruebas unitarias, PMD, Checkstyle, uso de CPU, recuento de tokens y evaluación mediante LLM-as-a-judge.
- Evaluación del prototipo con tareas de HumanEval adaptadas a Java y distintos modelos de la familia Mistral.
- Comparación de las funcionalidades desarrolladas con `bigcode-evaluation-harness` y `lm-evaluation-harness`.
