---
id: 107

title: "Mejora de VPL mediante comparadores flexibles y análisis AST"

slug: vpl-comparadores-ast

status: proposal

created: 2026-07-11

research: true

categories:
  - education

degree:
  - TFG
  - TFM

summary: >
  Extensión de VPL para mejorar la evaluación automática mediante comparadores
  de salida flexibles y análisis estructural del código utilizando árboles de
  sintaxis abstracta (AST).

tags:
  - VPL
  - AST
  - Evaluación automática
  - Programación

supervisors:
  - Gabriel Luque
---

## Descripción

Los sistemas de evaluación automática, como VPL, permiten comprobar si un programa produce la salida esperada para un conjunto de casos de prueba. Sin embargo, este tipo de evaluación presenta varias limitaciones. Pequeñas diferencias de formato pueden provocar que una solución correcta sea considerada errónea y, además, el sistema no analiza cómo se ha implementado la solución ni si el estudiante ha utilizado las estructuras de programación que se pretendían trabajar en la práctica.

Este trabajo propone ampliar las capacidades de VPL incorporando dos mejoras principales. Por un lado, se desarrollarán comparadores de salida flexibles que permitan adaptar la comparación a las características de cada ejercicio, ignorando diferencias irrelevantes como espacios, mayúsculas o determinados formatos de salida. Por otro, se incorporará un sistema de análisis del código fuente mediante árboles de sintaxis abstracta (AST), permitiendo comprobar automáticamente aspectos estructurales de la solución más allá del resultado obtenido.

El objetivo es construir un sistema de evaluación más útil tanto para el profesorado como para el alumnado, proporcionando un feedback más preciso y adaptado a los objetivos de aprendizaje de cada ejercicio. De forma opcional, podrá estudiarse el uso de modelos de lenguaje ejecutados localmente para reformular los mensajes generados y hacerlos más comprensibles para el estudiante.

## Posibles líneas de trabajo

- Diseñar comparadores de salida configurables para distintos tipos de ejercicios.
- Implementar filtros de normalización para la comparación automática de resultados.
- Desarrollar un módulo de análisis estructural del código mediante AST.
- Definir reglas que permitan comprobar automáticamente aspectos pedagógicos de las soluciones.
- Integrar los nuevos módulos dentro del flujo de evaluación de VPL.
- Estudiar el uso opcional de modelos de lenguaje para mejorar la presentación del feedback.
- Evaluar la utilidad del sistema mediante diferentes ejercicios y escenarios docentes.

## Qué aprenderás

- Funcionamiento interno de los sistemas de evaluación automática.
- Análisis estático de código mediante árboles de sintaxis abstracta.
- Diseño de herramientas de apoyo a la docencia.
- Integración de módulos en plataformas existentes.
- Diseño y evaluación experimental de herramientas educativas.
