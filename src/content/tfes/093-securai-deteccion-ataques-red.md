---
id: 093

title: "SecurAI: una aplicación inteligente para la detección de ataques en tu red"

shortTitle: "SecurAI: detección inteligente de ataques de red"

slug: securai-deteccion-ataques-red

status: finished

created: 2025-07-01

research: true

categories:
  - software
  - ai

degree:
  - TFG

summary: >
  Desarrollo de un sistema de detección de intrusiones modular y multiplataforma que analiza el tráfico de red en tiempo real y emplea técnicas de aprendizaje automático para identificar diferentes tipos de ataques y alertar al usuario.

tags:
  - Ciberseguridad
  - Sistemas de detección de intrusiones
  - Aprendizaje automático
  - Análisis de tráfico
  - Arquitectura modular
  - Aplicaciones multiplataforma

student: Álvaro Valencia Villalón

study: "Grado en Ingeniería del Software"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/093-securai-deteccion-ataques-red.pdf
  repository: https://github.com/Valeaal/SecurAI
---

## Descripción

Los sistemas de detección de intrusiones permiten identificar comportamientos maliciosos mediante el análisis del tráfico de una red. Sin embargo, muchas de las soluciones existentes requieren conocimientos avanzados para su instalación, configuración y utilización, lo que dificulta su adopción en entornos domésticos y pequeñas organizaciones.

Este trabajo desarrolla SecurAI, una aplicación de escritorio que captura y analiza en tiempo real los paquetes recibidos por un equipo y alerta al usuario cuando detecta posibles ataques. El sistema combina reglas, redes neuronales y máquinas de vectores de soporte para reconocer patrones asociados a diferentes amenazas de red.

La solución se ha diseñado como una plataforma modular y extensible. Los algoritmos de detección funcionan como módulos independientes que pueden incorporarse, activarse o desactivarse sin modificar el núcleo de la aplicación. SecurAI incluye además herramientas para visualizar estadísticas, simular ataques, consultar registros y evaluar el comportamiento de los módulos.

La aplicación dispone de una interfaz gráfica y se distribuye mediante instaladores autocontenidos para Windows y macOS, tanto en arquitecturas Intel como ARM, evitando que el usuario tenga que instalar o configurar manualmente Python, Node.js, modelos de aprendizaje automático u otras dependencias.

## Trabajo realizado

- Análisis de requisitos y diseño de una arquitectura cliente-servidor modular.
- Implementación de la captura continua de paquetes.
- Diseño de un sistema extensible de módulos de defensa y simulación de ataques, con carga automática, validación, activación y desactivación dinámica.
- Preparación y transformación de conjuntos de datos, balanceo de clases, selección de características, entrenamiento y evaluación con diferentes modelos de IA.
- Desarrollo de varios detectores de ARP Flooding, TCP SYN Flood y DNS Amplification.
- Incorporación de simuladores controlados de ARP Flooding, TCP SYN y DNS Amplification para comprobar desde la propia aplicación el funcionamiento de los detectores.
- Desarrollo de una interfaz gráfica que permite gestionar los módulos, observar el estado de la cola de paquetes, consultar ayuda y visualizar en tiempo real estadísticas sobre el volumen y los protocolos del tráfico de red.
- Empaquetado autocontenido del backend.
- Automatización de la construcción y publicación de versiones mediante GitHub Actions.
