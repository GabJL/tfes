---
id: 090

title: "WebStats: portal web para la visualización de la actividad de los alumnos"

shortTitle: "WebStats: análisis de actividad en Moodle"

slug: webstats-visualizacion-actividad-alumnos

status: finished

created: 2023-09-01

research: false

categories:
  - development
  - education

degree:
  - TFG

summary: >
  Desarrollo de una aplicación web que importa y procesa los registros de actividad y calificaciones exportados desde Moodle para ofrecer al profesorado análisis y visualizaciones sobre el uso del campus virtual por sus estudiantes.

tags:
  - Moodle
  - Analítica del aprendizaje
  - Procesamiento de datos
  - Visualización de datos
  - Desarrollo web

student: David González Cuevas

study: "Grado en Ingeniería del Software"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque 

resources:
  thesis: /documents/090-webstats-visualizacion-actividad-alumnos.pdf
---

## Descripción

Moodle registra las interacciones del alumnado con los recursos y actividades de una asignatura, pero presenta esta información principalmente como registros en bruto, cuyo análisis resulta complejo cuando existen miles de entradas.

WebStats es una aplicación web que permite importar archivos CSV de actividad y calificaciones exportados desde el campus virtual de la Universidad de Málaga. El sistema procesa y clasifica automáticamente su contenido, lo almacena de forma estructurada y ofrece al profesorado visualizaciones sobre los accesos, el uso de los distintos recursos y las calificaciones.

La aplicación sigue una arquitectura cliente-servidor formada por una interfaz en Angular, una API REST desarrollada con Spring Boot y una base de datos MySQL. También incorpora autenticación para separar y proteger la información asociada a cada docente.

## Trabajo realizado

- Análisis de requisitos y desarrollo iterativo mediante Scrum de una arquitectura formada por cliente web, servidor REST y base de datos.
- Implementación de la autenticación, la carga de archivos CSV y el procesamiento en segundo plano de registros de actividad y calificaciones de Moodle.
- Diseño del almacenamiento y de las operaciones de consulta, modificación y eliminación mediante Spring Boot, Hibernate, JPA y MySQL.
- Desarrollo de la interfaz con Angular, Angular Material y Bootstrap, incluyendo la consulta de los datos procesados y su representación mediante gráficos de accesos, uso de recursos y notas con ApexCharts.
- Evaluación manual con archivos procedentes de tres asignaturas, comprobando los tiempos de carga, procesamiento y generación de los análisis, y elaboración de los manuales de uso y despliegue.
