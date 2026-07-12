---
id: 101

title: "Búsqueda inteligente de aparcamiento mediante aprendizaje profundo y optimización multiobjetivo"

slug: aparcamiento-inteligente

status: finished

created: 2026-07-11

research: true

categories:
  - ai
  - smartcities

degree:
  - TFM

summary: >
  Desarrollo de un sistema capaz de predecir la disponibilidad futura de
  aparcamientos y utilizar esta información para calcular rutas que aumenten la
  probabilidad de encontrar una plaza libre.

tags:
  - Aprendizaje profundo
  - Optimización multiobjetivo
  - Movilidad
  - Series temporales
  - Datos geoespaciales

student: Daniel Justin Vargas Quero

study: "Máster Universitario en Ingeniería Informática"

academicYear: 2025-2026

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/101-aparcamiento-inteligente.pdf
  repository: https://github.com/djvq02/TFM
---

## Descripción

Encontrar una plaza de aparcamiento en una ciudad puede suponer varios minutos de búsqueda, aumentando la congestión del tráfico, el consumo energético y las emisiones contaminantes. Si fuera posible predecir qué zonas tendrán plazas disponibles en los próximos minutos, los conductores podrían planificar rutas más eficientes y reducir significativamente estos tiempos de búsqueda.

El objetivo de este trabajo se desarrolló un sistema inteligente capaz de combinar modelos predictivos basados en aprendizaje profundo con técnicas de optimización multiobjetivo para recomendar rutas que maximicen la probabilidad de encontrar una plaza libre. Para ello se empleó datos históricos de ocupación de aparcamientos, información geográfica y variables temporales con el fin de estimar la disponibilidad futura de plazas y calcular posteriormente la mejor estrategia de búsqueda.

Además del desarrollo del sistema, el trabajo permitió comparar distintos modelos predictivos y diferentes formulaciones del problema de optimización, analizando el equilibrio entre tiempo de recorrido, distancia, probabilidad de éxito y otros criterios de interés. El resultado será un prototipo reproducible con aplicación directa al ámbito de las ciudades inteligentes y la movilidad sostenible.

## Trabajo Realizado

- Analizar y preparar conjuntos de datos relacionados con la ocupación de aparcamientos.
- Desarrollar y comparar modelos de aprendizaje profundo para la predicción de plazas disponibles.
- Diseñar un algoritmo de optimización mono o multiobjetivo para calcular rutas eficientes.
- Integrar los modelos predictivos con el algoritmo de optimización.
- Desarrollar una aplicación para visualizar las predicciones y las rutas generadas.
- Diseñar y ejecutar un estudio experimental utilizando datos reales.
