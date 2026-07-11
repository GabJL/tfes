---
id: 001

title: "Sistema de aprendizaje federado para el análisis de parámetros de comunicación"

slug: aprendizaje-federado

status: ongoing

created: 2025-12-10

research: true

categories:
  - ai

degree:
  - TFG
  - TFM

summary: >
  Desarrollo de un sistema de aprendizaje federado con clientes Android para
  estudiar cómo distintos parámetros de comunicación afectan al rendimiento,
  la precisión y el coste del entrenamiento distribuido.

tags:
  - Aprendizaje federado
  - Sistemas distribuidos
  - Android
  - Redes
  - Inteligencia artificial

student: Antonio José Martínez Hermosilla

academicYear: 2025-2026

supervisors:
  - Gabriel Luque
---

## Descripción

El aprendizaje federado permite entrenar modelos de inteligencia artificial de forma distribuida sin necesidad de centralizar los datos de los usuarios. En lugar de enviar la información a un servidor, cada dispositivo entrena localmente un modelo y únicamente comparte las actualizaciones necesarias para construir un modelo global. Este enfoque mejora la privacidad y resulta especialmente interesante en escenarios donde existen numerosos dispositivos con capacidad de cómputo, como teléfonos móviles o dispositivos IoT.

El objetivo de este trabajo es diseñar e implementar un sistema práctico de aprendizaje federado compuesto por un servidor central y una aplicación Android capaz de participar en el entrenamiento distribuido. Más allá del propio modelo de aprendizaje automático, el interés principal reside en estudiar cómo las decisiones de diseño del sistema de comunicación afectan al rendimiento global: frecuencia de intercambio de información, número de clientes participantes, compresión de las actualizaciones o condiciones de la red, entre otros aspectos.

El trabajo combina el desarrollo de una aplicación real con un estudio experimental que permita analizar el equilibrio entre calidad del modelo entrenado, tiempo de entrenamiento y coste de comunicación, utilizando un entorno reproducible y fácilmente extensible.

## Posibles líneas de trabajo

- Diseñar la arquitectura general del sistema de aprendizaje federado.
- Implementar el servidor encargado de coordinar las rondas de entrenamiento y agregar los modelos locales.
- Desarrollar una aplicación Android que participe en el entrenamiento distribuido.
- Estudiar distintas estrategias de comunicación entre clientes y servidor.
- Analizar el efecto de la compresión de actualizaciones y de la frecuencia de comunicación.
- Simular diferentes condiciones de red y evaluar su impacto.
- Diseñar y ejecutar un estudio experimental comparando distintas configuraciones del sistema.

## Qué aprenderás

- Fundamentos del aprendizaje federado.
- Diseño de sistemas distribuidos.
- Desarrollo de aplicaciones Android.
- Comunicación mediante APIs y servicios web.
- Diseño y análisis de experimentos reproducibles.
- Evaluación del compromiso entre precisión, coste de comunicación y tiempo de entrenamiento.