# Herramientas de Equipo — Proyecto de Grado (MGPE)

Sitio estático con herramientas de autoconocimiento y trabajo en equipo para
los proyectos de grado del Magíster en Gestión de Personas y Efectividad
Organizacional.

Todos los archivos están en la misma carpeta — no hay subcarpetas.

## Estructura

```
index.html                       Página de inicio
belbin_test.html                  Test de Roles de Equipo (Belbin)
verificador_alcance.html          Autodiagnóstico de Alcance del proyecto de grado
plan_trabajo.html                 Guía del Plan de Trabajo + descarga de plantilla
contrato_equipo.html              Guía del Contrato de Equipo + descarga de plantilla
tuckman.html                      Etapas de Equipo (Tuckman)
liderazgo_test.html               (pendiente de agregar)

plan_trabajo_plantilla.xlsx       Plantilla descargable (Excel)
contrato_equipo_plantilla.docx    Plantilla descargable (Word)

sidebar.css                       Estilos de la barra lateral
sidebar.js                         Barra lateral compartida
```

`plan_trabajo.html` y `contrato_equipo.html` son guías de lectura, no
formularios: explican qué poner en cada sección y ofrecen un botón para
descargar la plantilla real (Excel y Word respectivamente), que el equipo
completa fuera del sitio, en su propio computador.

`verificador_alcance.html` sí es un formulario interactivo: el equipo
completa cada componente del alcance (título, objetivo SMART, fundamentación
teórica, entregables, límites, restricciones, supuestos) directamente en el
navegador. El progreso se guarda solo en `localStorage` del navegador del
estudiante (clave `mgpe_verificador_alcance_v1`) — no hay backend ni envío de
datos a ningún servidor. El botón "Copiar resumen" arma un texto plano con
todo lo completado para pegarlo donde el equipo lo necesite (correo, Word,
etc.).

La barra lateral vive en **`sidebar.js`**. Cada página solo tiene un
`<div id="sidebar-placeholder"></div>` y carga `sidebar.js`, que la
inyecta automáticamente y le pone la clase `active` al link de la página
actual. Para agregar o editar un link del menú, se edita `sidebar.js` (la
constante `SIDEBAR_HTML`) — no hay que tocar cada página.

## Ver el sitio

Como `sidebar.js` inyecta el menú directamente (sin `fetch`), el sitio
funciona igual abriendo cualquier archivo con doble clic, en una vista
previa, o publicado en GitHub Pages. No necesita servidor.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todos estos archivos a la raíz del repositorio.
3. En el repositorio: **Settings → Pages → Source**, selecciona la rama
   (`main`) y la carpeta raíz.
4. Guarda. GitHub entrega una URL del tipo
   `https://tu-usuario.github.io/tu-repositorio/`.

## Páginas pendientes

- `liderazgo_test.html`: referenciado en la barra lateral pero aún no
  construido. Mientras no exista, ese link del menú dará error 404 — se
  puede quitar la entrada correspondiente en `sidebar.js` si se prefiere
  ocultarlo hasta tenerlo listo.

## Notas sobre `verificador_alcance.html`

- La lista de asignaturas de "Fundamentación Teórica" y la lógica del
  gate de pertinencia disciplinar ("¿es un tema de gestión de personas u
  organizacional, o tiene un componente clínico/individual?") están
  basadas en la malla curricular vigente del Decreto de Rectoría
  Nº15/2025 (modalidad semipresencial). Si el programa vuelve a rediseñar
  su plan de estudios, esa lista de checkboxes es lo primero que hay que
  actualizar.
- Los ejemplos de reformulación (clínico → gestión de personas) y el
  caso de ejemplo completo son ilustrativos; vale la pena revisarlos con
  el equipo docente para confirmar que reflejan bien los desvíos de
  alcance más comunes que ven en la práctica.
