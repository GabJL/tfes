---
id: 010

title: "Transpilación cuántica híbrida mediante optimización multiobjetivo y aprendizaje por refuerzo"

slug: transpilacion-cuantica-hibrida

status: finished

created: 2025-09-01

research: true

categories:
  - quantum
  - ai

degree:
  - TFG

summary: >
  Desarrollo de una arquitectura modular para estudiar la combinación de
  optimización multiobjetivo y aprendizaje por refuerzo en distintas fases de
  la transpilación de circuitos cuánticos.

tags:
  - Computación cuántica
  - Transpilación
  - Optimización multiobjetivo
  - Aprendizaje por refuerzo
  - Qiskit
  - Routing

student: Eduardo González Bautista

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Abdelmoiz Zakaria Dahi

resources:
  thesis: /documents/010-qc-transpilacion-hibrida.pdf
  repository: https://github.com/edugbau/TFG-AI-Quantum-Transpiler
---

## Descripción

La ejecución de un circuito cuántico sobre un dispositivo real exige adaptarlo a las restricciones concretas del hardware, como la conectividad entre cúbits, el conjunto de puertas disponibles y sus tasas de error. Este proceso, denominado transpilación cuántica, puede modificar de forma considerable la profundidad del circuito y el número de operaciones necesarias.

En este trabajo se desarrolló una estrategia híbrida para mejorar la transpilación mediante la combinación de optimización multiobjetivo y aprendizaje por refuerzo. La optimización multiobjetivo se utilizó para explorar distintas asignaciones iniciales entre cúbits lógicos y físicos, mientras que el aprendizaje por refuerzo se aplicó a la toma de decisiones durante el proceso de routing.

La solución se diseñó mediante una arquitectura modular que separa la interacción con Qiskit, la optimización multiobjetivo, el aprendizaje por refuerzo y la integración de los experimentos. Esta estructura permite evaluar de forma independiente y conjunta diferentes configuraciones y facilita la incorporación de nuevos algoritmos y estrategias.

## Trabajo realizado

- Desarrollo de una interfaz común para interactuar con Qiskit y evaluar circuitos.
- Implementación de algoritmos evolutivos para optimizar el layout inicial.
- Desarrollo de agentes de aprendizaje por refuerzo para routing y síntesis.
- Integración de las distintas técnicas en un flujo experimental común.
- Comparación de los escenarios de referencia, optimización multiobjetivo, aprendizaje por refuerzo y combinación híbrida.
- Evaluación sobre circuitos y topologías de diferentes tamaños.
- Generación de resultados y artefactos reproducibles.