# Herramientas de Equipo — Proyecto de Grado (MGPE)

Sitio estático con herramientas de autoconocimiento y trabajo en equipo para
los proyectos de grado del Magíster en Gestión de Personas y Efectividad
Organizacional.

Todos los archivos están en la misma carpeta — no hay subcarpetas.

## Estructura

```
index.html              Página de inicio
belbin_test.html         Test de Roles de Equipo (Belbin)
plan_trabajo.html        Constructor de Plan de Trabajo
contrato_equipo.html     Contrato de Equipo
tuckman.html             Etapas de Equipo (Tuckman)
liderazgo_test.html      (pendiente de agregar)

sidebar.css              Estilos de la barra lateral
sidebar.js                Barra lateral compartida: contiene el HTML del
                          menú y el script que lo inyecta y marca la
                          página activa
```

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
