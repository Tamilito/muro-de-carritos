# Cambios del Muro de Carritos

Cómo se numeran las versiones (X.Y.Z):
- **Z** sube con arreglos chicos (1.1.0 → 1.1.1).
- **Y** sube con funciones nuevas (1.1 → 1.2).
- **X** sube con un cambio grande que rehace la app (1.x → 2.0).

La versión vive en una sola línea de `www/index.html`: `var APP_VERSION='1.2.2';`.
GitHub la lee de ahí para nombrar el APK y el Release. El número de compilación sube solo.

## 1.2.2 (4 nov 2026)
- Alejar, Tamaño y Separación: además de la barra, el número se puede escribir para poner un valor exacto. Si escribes algo fuera de rango se ajusta al límite (Separación no baja de 30 %).
- Las tres barras usan las mismas unidades que el número: Alejar de 0 a 100 %, Tamaño de 50 a 120 %, Separación de 30 a 150 % (arriba de 100 % se ve cuánto aire queda entre blísters).
- En el celular, cada barra va en dos renglones: nombre y número arriba, barra abajo a todo lo ancho. Ya no se sale el texto del recuadro.
- «Fotos: Sí / No» ahora es «Imagen: Catálogo / Mis fotos». Catálogo = blíster de la base de datos (por ahora, el dibujo). Mis fotos = las fotos que tomes de tus carritos; los que no tengan foto usan la del catálogo.

## 1.2.1 (4 nov 2026)
- En el celular, el encabezado ahora es una sola línea delgada (título, deshacer, rehacer y un punto de guardado). Antes ocupaba casi un cuarto de la pantalla y el muro se veía pasar por debajo.
- La barra de Muro ya no se sale de la pantalla en celulares angostos: los colores rápidos se encogen para caber, y nada se asoma a un lado del encabezado.
- La versión va primero en el subtítulo para que siempre se vea.
- Primera versión que llega por actualización, sin APK.

## 1.2.0 (4 nov 2026)
- Actualizaciones por internet: la app baja `www/index.html` del repo de GitHub y se actualiza sola, sin instalar otro APK.
- Revisa al abrir y al regresar a la app, cada 3 horas como máximo, solo con wifi (o también con datos, si lo activas).
- Botón «Buscar actualización» y «Volver a la versión del APK» en «Acomodo rápido».
- Si una versión nueva no arranca bien, la siguiente vez abre la anterior y no la vuelve a poner sola.
- Requisito: el repo tiene que ser público.
- Esta versión se instala con APK una última vez; las siguientes llegan solas.

## 1.1.0 (3 nov 2026)
- Vista y Muro quedan juntos en una sola barra.
- Muro: cualquier color con el selector y 8 colores rápidos; textos y líneas se ajustan solos a fondo claro u oscuro. La foto del muro sale con ese color.
- Alejar: barra para desenfocar el muro poco a poco (antes era el modo "Desde la puerta"). Se puede seguir arrastrando con el desenfoque puesto.
- Tamaño: barra de 50 % a 120 %.
- Separación: barra nueva. Mínimo 30 % visible de cada blíster (no deja tapar la parte donde va el carrito); hacia arriba se puede separar hasta dejar aire entre blísters.
- Se quitaron los modos Normal, Desde la puerta, Por color y Real u original, y el botón Oscuro/Blanco.
- La versión se ve junto al conteo de piezas, arriba.

## 1.0.0 (primer APK)
- Muro con columnas, arrastrar y soltar, mantener presionado en el celular, deshacer y rehacer.
- Coach del muro con reglas (columnas cortas, escalones, rachas de color, reales y originales).
- Bandeja, agregar y editar carritos, foto del muro para compartir.
- Fotos de blísters con fondo quitado automáticamente e importación de fotos.
- Guardar y cargar respaldo como archivo; botón atrás de Android.
