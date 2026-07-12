---
id: 094

title: "Parametrización del algoritmo de optimización aproximado cuántico para problemas combinatorios mediante aprendizaje máquina"

shortTitle: "Parametrización de QAOA mediante aprendizaje máquina"

slug: parametrizacion-qaoa-mediante-aprendizaje-maquina

status: finished

created: 2025-07-01

research: true

categories:
  - quantum
  - ai

degree:
  - TFG

summary: >
  Desarrollo y evaluación de modelos de aprendizaje supervisado para predecir
  los parámetros de QAOA en problemas MaxCut, reduciendo el número de
  ejecuciones de circuitos cuánticos necesarias frente a la optimización
  clásica convencional.

tags:
  - QAOA
  - Aprendizaje supervisado
  - Optimización combinatoria
  - MaxCut
  - QUBO
  - XGBoost
  - Redes neuronales de grafos

student: Mario Quiñones Madrona

study: "Grado en Ingeniería Informática y Grado en Matemáticas"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque
  - Zakaria Abdelmoiz Dahi

resources:
  thesis: /documents/094-parametrizacion-qaoa-mediante-aprendizaje-maquina.pdf
  repository: https://github.com/jann9/TFG_QC.git
---

## Descripción

El algoritmo de optimización aproximado cuántico, QAOA, permite abordar problemas de optimización combinatoria mediante un procedimiento híbrido cuántico-clásico. Sin embargo, la búsqueda de los parámetros de sus circuitos requiere numerosas evaluaciones, lo que supone un coste importante cuando se utilizan simuladores o dispositivos cuánticos reales.

Este trabajo estudia el uso de modelos de aprendizaje supervisado para predecir los parámetros de QAOA a partir de las características de las instancias del problema. La propuesta pretende sustituir o reducir parte del proceso iterativo de optimización clásica, obteniendo configuraciones adecuadas mediante una inferencia mucho más rápida.

La evaluación se realiza sobre instancias del problema MaxCut representadas mediante formulaciones QUBO. Se comparan modelos XGBoost, perceptrones multicapa y redes neuronales de grafos. También se estudian dos formas de representar las instancias: mediante los valores de la matriz QUBO y mediante características del circuito cuántico, como su profundidad, número de cúbits y cantidad de puertas RX, RZ y CX.

## Trabajo realizado

- Estudio de los fundamentos de la computación cuántica basada en puertas.
- Análisis de los problemas QUBO y su aplicación a la optimización combinatoria.
- Estudio del funcionamiento y de la parametrización del algoritmo QAOA.
- Formulación del problema MaxCut como un modelo QUBO.
- Generación de 250 grafos aleatorios de Erdős-Rényi con tamaños de 10, 12,   15, 20 y 25 nodos y diferentes densidades.
- Construcción de circuitos QAOA de dos capas mediante Qiskit.
- Obtención de parámetros de referencia mediante el optimizador clásico COBYLA.
- Generación de conjuntos de datos que relacionan las características de los grafos con los parámetros optimizados de QAOA.
- Estudio de distintas estrategias para combinar instancias de tamaños diferentes, incluyendo el uso de relleno con ceros.
- Desarrollo de modelos de regresión mediante XGBoost.
- Desarrollo y ajuste de perceptrones multicapa mediante Scikit-learn.
- Implementación de redes neuronales de grafos mediante PyTorch Geometric.
- Extracción de características estructurales de los circuitos cuánticos: profundidad, número de cúbits y cantidades de puertas RX, RZ y CX.
- Comparación de las representaciones basadas en matrices QUBO y en características de los circuitos.
- Evaluación de los modelos mediante RMSE, MAPE y tiempo de entrenamiento.
- Análisis de la capacidad de generalización para distintos tamaños y estructuras de grafos.
- Comparación del tiempo necesario para obtener parámetros mediante los modelos aprendidos y mediante la optimización convencional de QAOA.
- Análisis del equilibrio entre precisión y coste computacional de los modelos.
