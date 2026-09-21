---

id: 124
title: "Netdoku: juego de lógica y deducción basado en redes"
slug: netdoku
status: proposal
created: 2026-09-21
research: false
categories:
  - development

degree:
  - TFG

summary: >
  Desarrollo de un juego de lógica y deducción basado en redes de computadores,
  incluyendo herramientas para diseñar, validar y generar automáticamente
  nuevos puzles.
tags:
  - Juegos de lógica
  - Desarrollo web
  - Redes
  - Generación procedural
  - CSP
supervisors:
  - Gabriel Luque

---

## Descripción

**Netdoku** es un juego de lógica y deducción en el que el jugador debe resolver un problema a partir de un conjunto de pistas relacionadas con una red de computadores. Las redes, routers, dispositivos y sus características constituyen los elementos sobre los que se construyen los diferentes puzles. Es equivalente a Murdoku pero con equivalentes en redes (los personajes son mensajes, las habitaciones son redes...)

El objetivo de este trabajo es diseñar e implementar una aplicación web que permita jugar partidas de Netdoku, representando gráficamente la topología y proporcionando herramientas para realizar anotaciones, descartar posibilidades y comprobar la solución.

Además del desarrollo del juego, se estudiará cómo representar formalmente las partidas y cómo facilitar la creación de nuevos puzles. Como parte especialmente interesante del proyecto, se podrán desarrollar mecanismos para generar y validar partidas automáticamente, comprobando aspectos como la existencia de una solución única, la redundancia de las pistas o su nivel de dificultad.

## Posibles líneas de trabajo

* Diseñar las reglas, elementos y tipos de pistas de Netdoku.
* Desarrollar una aplicación web para jugar partidas.
* Diseñar un formato para almacenar e intercambiar puzles.
* Desarrollar herramientas para crear y editar nuevas partidas.
* Implementar mecanismos para comprobar automáticamente si un puzle tiene solución única.
* Estudiar técnicas de satisfacción de restricciones (CSP/SAT) para resolver y generar partidas.
* Generar automáticamente puzles y seleccionar conjuntos adecuados de pistas.
* Estudiar mecanismos para estimar y ajustar la dificultad de las partidas.

## Qué aprenderás

* Desarrollo de aplicaciones web interactivas.
* Modelado y resolución de problemas de lógica.
* Algoritmos de satisfacción de restricciones.
* Generación procedural de contenido.
* Diseño de interfaces para juegos.
* Conceptos relacionados con redes de computadores.
