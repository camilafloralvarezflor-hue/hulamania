# 📋 Instrucciones — Panel de Administración de Hulamania

## ¿Qué es el panel admin?

El panel de administración te permite crear, editar y eliminar posts del blog de Hulamania **sin tocar ningún archivo de código**. Todo se hace desde una interfaz visual.

---

## 🔐 Paso 1 — Activar el login (hacerlo una sola vez)

El panel usa **Sveltia CMS**, que conecta directamente con tu cuenta de GitHub. No necesitás configurar nada extra — solo autorizar la app la primera vez.

### Cómo activarlo:

1. **Entrá a** `https://hulamania.com/admin`
2. Hacé clic en **"Login with GitHub"**
3. GitHub te va a pedir que autorices **"Sveltia CMS"** — hacé clic en **Authorize**
4. ¡Listo! Ya entraste al panel.

> **Nota:** La cuenta de GitHub que uses debe ser la que es dueña del repositorio (`camilafloralvarezflor-hue`). Si usás otra cuenta, no va a tener permisos para guardar cambios.

---

## ✍️ Cómo crear un nuevo post

1. Entrá al panel: `https://hulamania.com/admin`
2. Hacé clic en **"Blog de Novedades"** en el menú de la izquierda
3. Hacé clic en el botón **"New Novedad"** (arriba a la derecha)
4. Completá los campos:
   - **Título** — el título principal del post
   - **Fecha** — el día de publicación
   - **Resumen** — 2-3 oraciones que aparecen en la lista del blog
   - **Imagen destacada** — opcional, podés subir una foto
   - **Contenido** — el cuerpo del post (podés usar los botones de formato: negrita, listas, títulos, etc.)
5. Cuando termines, hacé clic en **"Save"** (arriba a la derecha)
6. Hacé clic en **"Publish"** para publicarlo en el sitio

> El post va a aparecer en `https://hulamania.com/blog/` en unos minutos (GitHub tarda 1-2 minutos en actualizar el sitio).

---

## ✏️ Cómo editar un post existente

1. Entrá al panel y hacé clic en **"Blog de Novedades"**
2. Hacé clic en el post que querés editar
3. Hacé los cambios que necesitás
4. Hacé clic en **"Save"** → **"Publish"**

---

## 🗑️ Cómo eliminar un post

1. Entrá al panel y hacé clic en **"Blog de Novedades"**
2. Hacé clic en el post que querés eliminar
3. Hacé clic en los tres puntitos (⋯) o en el botón "Delete"
4. Confirmá la eliminación

---

## 🖼️ Cómo subir imágenes

- En el campo **"Imagen destacada"** hacé clic en "Choose an image"
- Podés subir una imagen nueva desde tu computadora o seleccionar una que ya hayas subido antes
- Las imágenes se guardan automáticamente en la carpeta `uploads/blog/` del sitio

---

## 🌐 Cómo se ve el blog

- **Lista de posts:** `https://hulamania.com/blog/`
- **Post individual:** `https://hulamania.com/blog/?post=nombre-del-post`

El link al blog también aparece en el menú de navegación del sitio principal.

---

## ❓ Qué hacer si perdés acceso

Si no podés entrar al panel (`https://hulamania.com/admin`):

1. **Verificá que estés logueada en GitHub** en el navegador (`github.com`)
2. **Probá en modo incógnito** para descartar problemas de caché
3. **Borrá las cookies** del sitio y volvé a intentar el login
4. Si el problema persiste, entrá directamente a GitHub (`github.com/camilafloralvarezflor-hue/hulamania`), navegá a la carpeta `posts/` y podés crear o editar los archivos `.md` manualmente desde ahí

---

## 📁 Estructura del blog (para referencia)

```
posts/
  2026-05-09-bienvenidos-al-blog.md   ← primer post de ejemplo
  2026-06-01-consejos-de-cuidado.md   ← así se ven los posts creados
  ...

blog/
  index.html   ← página del blog (no tocar)

admin/
  index.html   ← panel de administración (no tocar)
  config.yml   ← configuración del CMS (no tocar)
```

---

## 🛟 Tecnología utilizada

- **Sveltia CMS** — panel visual para el blog (reemplazo moderno de Decap/Netlify CMS)
- **GitHub Pages** — hosting del sitio
- **Cloudflare** — dominio y DNS
- Los posts se guardan como archivos Markdown en el repositorio de GitHub

---

*¿Dudas? Consultá con quien configuró el sitio.*
