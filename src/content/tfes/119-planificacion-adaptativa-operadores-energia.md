---
id: 119

title: "Planificación adaptativa de operadores en metaheurísticas bajo restricciones energéticas"

slug: planificacion-adaptativa-operadores-energia

status: proposal

created: 2026-07-12

research: true

categories:
  - ai

degree:
  - TFG

summary: >
  Estudio y extensión de planificadores adaptativos capaces de seleccionar
  operadores de distinta intensidad para maximizar la calidad de las soluciones
  bajo diferentes presupuestos energéticos.

tags:
  - Metaheurísticas
  - Optimización
  - Selección adaptativa de operadores
  - Eficiencia energética
  - Green AI

supervisors:
  - Gabriel Luque
---

## Descripción

Las metaheurísticas combinan diferentes operadores para explorar el espacio de búsqueda y mejorar progresivamente las soluciones. Estos operadores pueden presentar costes energéticos muy distintos cuando implican, por ejemplo, ejecutar búsquedas locales con diferente número de pasos o realizar exploraciones más o menos completas del vecindario. Sin embargo, los algoritmos tradicionales suelen aplicar estas alternativas siguiendo reglas fijas, sin considerar la energía disponible ni la mejora que produce cada una.

Este trabajo se basa en un planificador que estima dinámicamente la mejora esperada por unidad de energía de cada operador, denominada *Expected Improvement per Joule* (EI/J). El enfoque original selecciona entre dos variantes, una ligera y otra pesada, y se ha aplicado a varias metaheurísticas bajo presupuestos energéticos fijos. El TFG ampliará este estudio incorporando un conjunto más amplio y gradual de operadores, otros mecanismos de planificación y diferentes niveles de restricción energética.

El objetivo será analizar cómo influyen el número y la diversidad de operadores, la inicialización de sus estimaciones y el presupuesto disponible sobre la eficiencia del algoritmo y las decisiones tomadas durante la búsqueda. Para mantener un alcance asumible, el estudio se limitará a una metaheurística poblacional y otra basada en trayectoria, evaluadas sobre dos problemas de optimización reproducibles.

## Líneas principales

- Extender el planificador EI/J para trabajar con diferentes cantidades de operadores.
- Diseñar operadores con costes claramente diferenciados, como búsquedas locales con distinto número de pasos o diferentes niveles de exploración del vecindario.
- Estudiar cómo influye el número de operadores disponibles sobre la calidad y la eficiencia de la búsqueda.
- Comparar distintas estrategias para inicializar las estimaciones de mejora y consumo energético.
- Analizar el comportamiento del planificador bajo presupuestos energéticos con diferentes niveles de restricción.
- Comparar EI/J con otros planificadores, como selección aleatoria, *round robin*, ε-greedy, UCB o Thompson Sampling.
- Implementar el estudio sobre una metaheurística poblacional y otra basada en trayectoria.
- Evaluar los métodos sobre dos problemas de optimización combinatoria.
- Analizar la evolución temporal del uso de operadores, la energía consumida y la calidad de las soluciones.
- Diseñar y ejecutar una campaña experimental reproducible.

## Qué aprenderás

- Diseño e implementación de metaheurísticas.
- Selección adaptativa de operadores.
- Medición y análisis del consumo energético del software.
- Diseño de experimentos y análisis estadístico de resultados.
- Aplicación de técnicas de Green AI y optimización bajo restricciones de recursos.
