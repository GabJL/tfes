---
id: 125

title: "Monitor de recursos y control de procesos con mitigación de recopilación de datos"

shortTitle: "Monitor de recursos con mitigación de telemetría"

slug: monitor-recursos-telemetria

status: ongoing

created: 2026-10-05

research: false

categories:
  - development
  - software

degree:
  - TFG

summary: >
  Desarrollo en Rust de una herramienta para Linux que integra la
  monitorización de recursos y procesos con la gestión de reglas persistentes
  para controlar servicios de telemetría conocidos, mediante un daemon y una
  interfaz de terminal (TUI).

tags:
  - Rust
  - TUI
  - Linux
  - systemd
  - Privacidad
  - Monitorización de recursos

student: Jorge Torres Sánchez

study: "Grado en Ingeniería del Software"

academicYear: 2026-2027

supervisors:
  - Gabriel Luque
---

## Descripción

Los sistemas operativos ejecutan numerosos procesos en segundo plano que consumen recursos y, en algunos casos, recopilan y transmiten datos de uso o diagnóstico. Aunque estas funciones pueden tener una finalidad legítima, los usuarios pueden querer conocer su actividad y disponer de mecanismos para controlarla. Herramientas como `top`, `htop` o `btop` permiten supervisar recursos y gestionar procesos, pero no están orientadas a aplicar políticas persistentes de control de telemetría, y finalizar un proceso de forma puntual no impide que vuelva a iniciarse automáticamente.

Este trabajo propone desarrollar, en Rust, una herramienta para Linux que integre la monitorización de recursos y procesos con la gestión de reglas persistentes de mitigación mediante una interfaz de terminal. La herramienta constará de dos partes: un daemon encargado de la recolección de datos y la vigilancia de procesos, y una TUI que permita al usuario consultar las métricas y administrar las listas de mitigación.

## Líneas principales

- Monitorización en tiempo real de CPU, GPU, memoria, discos, red y temperaturas, con información detallada por recurso.
- Listado y gestión de procesos (ordenación, columnas configurables, señales de terminación y pausa).
- Módulo de privacidad con lista blanca inmutable de procesos del sistema y detección de procesos de recolección de datos conocidos.
- Mitigación persistente de servicios mediante enmascaramiento de unidades de `systemd`, con posibilidad de revertir la operación.
- Daemon de vigilancia junto a una TUI construida con `ratatui` y `crossterm`, y CLI implementada con `clap`.
- Extensiones opcionales a explorar según el avance del proyecto: lista gris con aviso previo a la ejecución ("Prompt-on-Execution"), front-end web mínimo con `axum`/`Tokio`, empaquetado en contenedor y soporte multiplataforma (Windows, macOS).

## Qué aprenderás

- Programación de sistemas en Rust.
- Lectura a bajo nivel de métricas del sistema en Linux (`/proc`, `/sys`).
- Desarrollo de interfaces de terminal (TUI) y CLIs.
- Gestión de procesos y servicios con `systemd`.
- Desarrollo asistido por agentes de IA mediante metodologías orientadas a especificación (Spec-Driven Development).
