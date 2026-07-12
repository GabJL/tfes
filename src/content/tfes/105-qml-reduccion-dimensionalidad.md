---
id: 105

title: "Hacia un aprendizaje automático cuántico adaptado para NISQ: estudio de modelos híbridos asistidos por selección de características"

slug: qml-modelos-hibridos-seleccion-caracteristicas

status: ongoing

created: 2025-09-01

research: true

categories:
  - quantum
  - ai

degree:
  - TFM

summary: >
  Desarrollo de modelos híbridos clásico-cuánticos para aprendizaje automático
  cuántico que incorporan técnicas de reducción de dimensionalidad para adaptar
  clasificadores variacionales al hardware NISQ actual.

tags:
  - Quantum Machine Learning
  - Qiskit
  - Reducción de dimensionalidad
  - Autoencoders
  - PCA
  - UMAP

student: Pablo Ruiz Muñoz

study: "Máster Universitario en Ingeniería Informática"

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
  - Zakaria Abdelmoiz Dahi

resources:
  thesis: /documents/105-qml-reduccion-dimensionalidad.pdf
---

## Descripción

El aprendizaje automático cuántico (Quantum Machine Learning, QML) es una de las aplicaciones más prometedoras de la computación cuántica. Sin embargo, el reducido número de cúbits y la presencia de ruido en los dispositivos actuales dificultan el tratamiento de conjuntos de datos con un elevado número de características, limitando la aplicación práctica de muchos modelos cuánticos.

Este trabajo aborda este problema mediante el desarrollo de modelos híbridos clásico-cuánticos donde un preprocesamiento clásico reduce la dimensionalidad de los datos antes de su codificación en un Clasificador Cuántico Variacional (VQC). Para ello se ha desarrollado un marco experimental parametrizable que permite combinar distintas técnicas de reducción de dimensionalidad, estrategias de codificación cuántica y configuraciones de feature maps, facilitando la ejecución de campañas experimentales reproducibles.

La evaluación experimental estudia el comportamiento de técnicas como PCA, UMAP y Autoencoders sobre diferentes conjuntos de datos, analizando el compromiso entre reducción de dimensionalidad, precisión del modelo y recursos cuánticos necesarios. Los resultados muestran que estas técnicas permiten ejecutar modelos QML sobre circuitos considerablemente más pequeños sin degradar significativamente su rendimiento, acercando este tipo de modelos a las capacidades del hardware NISQ actual.

## Trabajo realizado

- Desarrollo de un framework modular para experimentación en Quantum Machine Learning.
- Implementación de modelos híbridos clásico-cuánticos basados en VQC.
- Integración de técnicas de reducción de dimensionalidad como PCA, UMAP y Autoencoders.
- Comparación de distintas estrategias de codificación cuántica y feature maps.
- Automatización de campañas experimentales mediante archivos de configuración.
- Evaluación sobre los conjuntos de datos MNIST y Fashion-MNIST.
- Análisis del impacto de la reducción de dimensionalidad sobre la precisión y el número de cúbits necesarios.
