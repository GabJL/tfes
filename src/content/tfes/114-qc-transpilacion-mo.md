---
id: 114

title: "Optimización multiobjetivo para la transpilación de circuitos cuánticos"

slug: transpilacion-cuantica-multiobjetivo

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
  Desarrollo de técnicas de optimización multiobjetivo para obtener
  transpilaciones de mayor calidad equilibrando criterios como profundidad,
  número de puertas, fidelidad o tiempo de ejecución.

tags:
  - Transpilación
  - Optimización multiobjetivo
  - Metaheurísticas
  - NISQ

supervisors:
  - Gabriel Luque
---

## Descripción

La transpilación es una etapa fundamental en la ejecución de algoritmos cuánticos, ya que adapta un circuito cuántico abstracto a las restricciones del computador donde será ejecutado. Durante este proceso deben tomarse numerosas decisiones que afectan a la calidad final del circuito obtenido.

En la práctica, la calidad de una transpilación no puede medirse mediante un único criterio. Reducir el número de puertas puede aumentar la profundidad del circuito, mientras que minimizar la profundidad puede incrementar el número de operaciones o disminuir la fidelidad esperada en determinados dispositivos. Esto convierte la transpilación en un problema de optimización multiobjetivo, donde es necesario buscar soluciones que representen diferentes compromisos entre objetivos potencialmente contradictorios.

El objetivo de este trabajo es desarrollar técnicas de optimización multiobjetivo capaces de generar conjuntos de transpilaciones de alta calidad. Dependiendo del alcance del trabajo, podrán estudiarse diferentes algoritmos metaheurísticos, nuevas representaciones del problema, estrategias híbridas o incluso la combinación de optimización multiobjetivo con aprendizaje por refuerzo para guiar el proceso de búsqueda.

## Posibles líneas de trabajo

- Estudiar el proceso de transpilación de circuitos cuánticos.
- Definir los objetivos de optimización más relevantes para evaluar una transpilación.
- Diseñar una representación adecuada del problema.
- Implementar algoritmos de optimización multiobjetivo.
- Estudiar estrategias híbridas que combinen distintas técnicas de optimización.
- Analizar la integración del aprendizaje por refuerzo dentro del proceso de búsqueda.
- Comparar los resultados obtenidos con herramientas y algoritmos existentes.
- Diseñar un estudio experimental reproducible.

## Qué aprenderás

- Fundamentos de computación cuántica.
- Optimización multiobjetivo.
- Metaheurísticas.
- Modelado de problemas de optimización.
- Diseño experimental.
- Lectura e implementación de trabajos de investigación.