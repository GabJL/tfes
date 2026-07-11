---
id: 008

title: "Transpilación cuántica mediante aprendizaje por refuerzo"

slug: transpilacion-cuantica-rl

status: proposal

created: 2026-07-11

research: true

categories:
  - quantum
  - ai

degree:
  - TFG
  - TFM

summary: >
  Desarrollo de técnicas de aprendizaje por refuerzo para optimizar el proceso
  de transpilación de circuitos cuánticos y adaptarlos de forma eficiente a
  distintos computadores cuánticos.

tags:
  - Computación cuántica
  - Transpilación
  - Aprendizaje por refuerzo
  - Optimización
  - NISQ

supervisors:
  - Gabriel Luque
---

## Descripción

Los algoritmos cuánticos suelen diseñarse utilizando un conjunto idealizado de puertas cuánticas. Sin embargo, cada computador cuántico posee restricciones propias, como un conjunto limitado de puertas disponibles, restricciones de conectividad entre qubits o diferentes tasas de error. Antes de ejecutar un circuito es necesario transformarlo mediante un proceso denominado **transpilación**, cuyo objetivo es obtener un circuito equivalente que pueda ejecutarse sobre un hardware concreto.

La transpilación es un problema de optimización complejo, ya que diferentes secuencias de transformaciones producen circuitos con distinta profundidad, número de puertas o fidelidad. Tradicionalmente estos procesos se realizan mediante reglas heurísticas, aunque en los últimos años el aprendizaje por refuerzo ha demostrado ser una alternativa prometedora para aprender automáticamente estrategias de optimización.

El objetivo de este trabajo es desarrollar un sistema basado en aprendizaje por refuerzo capaz de decidir qué transformaciones aplicar durante la transpilación de un circuito. Dependiendo del alcance del trabajo, podrán estudiarse diferentes representaciones del estado, algoritmos de aprendizaje por refuerzo, funciones de recompensa o estrategias de entrenamiento, comparando posteriormente los resultados obtenidos con los transpiladores existentes.

## Posibles líneas de trabajo

- Estudiar el proceso de transpilación de circuitos cuánticos.
- Diseñar una representación adecuada del estado para el agente de aprendizaje.
- Definir funciones de recompensa orientadas a mejorar la calidad de la transpilación.
- Implementar y comparar diferentes algoritmos de aprendizaje por refuerzo.
- Evaluar el comportamiento del sistema sobre distintos computadores cuánticos.
- Comparar los resultados obtenidos con transpiladores existentes.
- Diseñar un estudio experimental reproducible.

## Qué aprenderás

- Fundamentos de computación cuántica.
- Funcionamiento de los procesos de transpilación.
- Aprendizaje por refuerzo.
- Optimización aplicada.
- Diseño experimental.
- Lectura e implementación de trabajos de investigación.