---
id: 095

title: "Click2Order: plataforma web para la gestión eficiente de pedidos de una empresa de distribución de bebidas"

shortTitle: "Click2Order: gestión de pedidos y rutas de reparto"

slug: click2order-gestion-pedidos-distribucion-bebidas

status: finished

created: 2025-09-01

research: false

categories:
  - development

degree:
  - TFG

summary: >
  Desarrollo de una plataforma web para digitalizar la gestión de pedidos entre
  una empresa distribuidora de bebidas y sus clientes, centralizando el catálogo,
  los pedidos y la planificación de rutas de reparto optimizadas.

tags:
  - Desarrollo web
  - Gestión de pedidos
  - Comercio electrónico B2B
  - Optimización de rutas

student: Ana Isabel Ruiz González

study: "Grado en Ingeniería Informática"

academicYear: 2024-2025

supervisors:
  - Gabriel Luque

resources:
  thesis: /documents/095-click2order-gestion-pedidos-distribucion-bebidas.pdf
---

## Descripción

En muchas pequeñas y medianas empresas de distribución de bebidas, los pedidos de bares, restaurantes y otros establecimientos se reciben mediante llamadas, mensajes, audios o fotografías de listas escritas a mano. Este proceso puede provocar errores en las cantidades, las marcas o los formatos solicitados, además de dificultar la organización de los pedidos y de las rutas de reparto.

Click2Order es una plataforma web orientada a digitalizar y estructurar esta comunicación comercial. Los clientes pueden consultar el catálogo de la empresa, buscar y filtrar productos, guardar sus productos favoritos, preparar pedidos mediante un carrito y repetir pedidos realizados anteriormente.

El distribuidor dispone de un área de administración desde la que puede gestionar clientes, categorías, productos y pedidos, modificar su estado y generar documentos PDF con las listas de carga. La plataforma también representa en un mapa las ubicaciones de los clientes y utiliza los servicios de Mapbox para calcular rutas optimizadas de reparto que pueden abrirse posteriormente en Google Maps.

## Trabajo realizado

- Análisis de las necesidades de una empresa real de distribución de bebidas.
- Definición de requisitos funcionales y no funcionales y de los casos de uso de   clientes y administradores.
- Aplicación de una metodología ágil Kanban para organizar el desarrollo.
- Diseño de una arquitectura cliente-servidor con una API REST.
- Desarrollo del frontend con React, Vite, Tailwind CSS y React Context.
- Implementación del backend mediante Node.js y Express.
- Validación de los datos recibidos por la API mediante Zod.
- Diseño de una base de datos documental en MongoDB, alojada mediante MongoDB  Atlas.
- Desarrollo del registro, autenticación, recuperación de contraseñas y gestión de   perfiles de usuario.
- Implementación de la gestión de clientes, categorías y productos.
- Desarrollo de un catálogo con búsqueda, filtrado, ordenación y productos favoritos.
- Implementación del carrito, la realización y repetición de pedidos y la consulta de su historial.
- Incorporación de notificaciones por correo electrónico mediante Nodemailer.
- Generación de documentos PDF con las listas de carga de los pedidos.
- Integración con Cloudinary para almacenar las imágenes de productos y categorías.
- Integración con las API de geocodificación y optimización de Mapbox.
- Visualización de clientes y rutas de reparto mediante mapas interactivos.
- Exportación de las rutas calculadas a Google Maps.
- Realización de pruebas funcionales de la API mediante Postman.
- Elaboración de manuales de usuario, instalación y despliegue.
