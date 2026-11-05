# Colección de autos para Android

Este proyecto convierte el planeador del muro en una app Android (APK).
GitHub la compila gratis en la nube; no necesitas instalar nada en tu compu.

## Una sola vez: crear el repositorio

1. Entra a github.com y crea una cuenta gratis (si no tienes).
2. Botón **New** (repositorio nuevo). Nombre: `muro-de-carritos`.
   - **Public** te deja bajar el APK desde el celular sin iniciar sesión. No hay nada privado aquí: es el código y tu lista de carritos.
   - **Private** también funciona, pero para bajar el APK tienes que iniciar sesión en GitHub desde el celular.
3. Clic en **Create repository**.

## Subir los archivos

4. En el repositorio vacío, clic en **uploading an existing file**.
5. Abre la carpeta `muro-de-carritos-app` y arrastra **lo que hay adentro**
   (carpetas `www`, `recursos`, `scripts` y los archivos `package.json`,
   `capacitor.config.json`, `compilar-apk.yml` y `LEEME.md`).
6. Clic en **Commit changes**.

## Activar la compilación

7. Pestaña **Actions** → **set up a workflow yourself**.
8. Borra todo lo que aparece en el editor, abre `compilar-apk.yml` con el Bloc de notas,
   copia todo su contenido y pégalo ahí.
9. Clic en **Commit changes** (dos veces si lo pide).

GitHub empieza a compilar solo. En la pestaña **Actions** verás "Compilar APK" girando.
Tarda unos 5 a 8 minutos. Cuando salga la palomita verde, ya está.

## Instalar en el celular

10. Desde el celular, abre tu repositorio en GitHub → a la derecha, **Releases** →
    la más nueva → toca `muro-de-carritos.apk`.
11. Android te pedirá permiso para instalar apps desde el navegador: **Permitir**.
    Si Play Protect avisa que es una app desconocida: **Instalar de todos modos**.

## Pasar tu muro de la compu a la app

12. En la página de tu compu: panel «Acomodo rápido» → **Guardar respaldo**. Se baja un archivo `.json`.
13. Mándatelo al celular (Drive, WhatsApp, cable).
14. En la app: **Cargar respaldo** → elige ese archivo. Pasa todo, fotos incluidas.

## Actualizar la app

Desde la versión 1.2.0 la app se actualiza sola, sin instalar otro APK:
1. En GitHub entra a la carpeta `www` → **Add file → Upload files** → sube el `index.html` nuevo → **Commit changes**
   (o desde la terminal: `git add www/index.html && git commit -m "v1.x.x" && git push`).
2. La app revisa GitHub al abrirse y al regresar a ella (cada 3 horas como máximo, con wifi).
   Si hay versión nueva la baja, te avisa con «Actualizar ya» y, si no lo tocas, se pone sola la siguiente vez que la abras.
3. Para no esperar: panel «Acomodo rápido» → **Buscar actualización**.

Esto solo funciona si el repo es **público** (GitHub no deja que la app lea un repo privado).
Si una versión nueva truena al abrir, cierra la app y ábrela otra vez: regresa sola a la anterior.
También está el botón **Volver a la versión del APK**.

Cuándo sí hay que instalar un APK nuevo: si cambia algo nativo (ícono, nombre de la app, plugins nuevos)
o si Claude te lo dice. Instalar un APK siempre regresa a la versión que trae adentro; luego se actualiza sola otra vez.

## Importante

- **No borres `recursos/debug.keystore`.** Es la firma de la app; sin ella, las versiones nuevas no se instalan encima de la vieja.
- **Si desinstalas la app, se borra tu muro.** Usa «Guardar respaldo» de vez en cuando.
- Si la compilación sale en rojo, abre la ejecución en **Actions**, copia el error y pásaselo a Claude.
