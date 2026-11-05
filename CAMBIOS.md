# Cambios del Muro de Carritos

Cómo se numeran las versiones (X.Y.Z):
- **Z** sube con arreglos chicos (1.1.0 → 1.1.1).
- **Y** sube con funciones nuevas (1.1 → 1.2).
- **X** sube con un cambio grande que rehace la app (1.x → 2.0).

La versión vive en una sola línea de `www/index.html`: `var APP_VERSION='1.8.1';`.
GitHub la lee de ahí para nombrar el APK y el Release. El número de compilación sube solo.

## 1.8.1 (5 nov 2026)
- Arreglado: en el teléfono, la foto del muro salía con huecos donde iban algunos blísters dibujados (los que quedaban justo antes de un blíster con foto). Ahora la app termina de pintar cada blíster antes de seguir con el siguiente y la imagen se arma sin usar la tarjeta de video del teléfono.
- La foto del muro se genera más rápido (el fondo con textura se pinta de una vez) y, en muros muy grandes, ajusta un poco la resolución para no quedarse sin memoria.

## 1.8.0 (5 nov 2026)
- **La foto del blíster sale siempre** en el muro, en el garaje y en el editor. Se quitó «Imagen: Catálogo / Mis fotos»: si el carrito tiene foto, se ve la foto; si no, el dibujo.
- **Quitar el fondo hace menos desastre**: ya no se come las partes blancas del carrito cuando se tocan con el fondo blanco, quita las motitas sueltas y deja el borde más limpio.
- **Ajustar fondo** (botón «Fondo» en el visor de fotos del auto y junto a la foto del blíster en el editor):
  - Quitar fondo o Dejar fondo (la foto tal cual).
  - «Cuánto quita»: menos si se está comiendo el carrito, más si quedan restos de fondo.
  - Pincel para Borrar o Recuperar a mano, con tamaño. Con dos dedos se hace zoom; «Ver todo» regresa.
  - Deshacer, Desde cero y Listo. Se puede volver a ajustar cuantas veces quieras, porque la app guarda la foto original aparte (también en el respaldo).
  - Las fotos que subiste antes de esta versión no tienen original guardado: se pueden borrar partes con el pincel, pero lo que ya se quitó no regresa. Para eso, súbelas otra vez.
- En el visor de fotos del auto, **la estrella** de arriba a la izquierda marca la principal: dorada si es la principal, gris si no. Tocar una gris la hace la principal. Se quitó el botón «Hacer principal».
- En las tarjetas del garaje, «Ver» y «Fotos» quedaron solo con su ícono.
- En el garaje se quitaron los filtros rápidos (Todos, Reales, Originales, De película, En la bandeja). Queda el buscador.
- **Candado en la vista del muro**: el color del muro, Alejar, Tamaño y Separación vienen bloqueados para que no se muevan al pasar el dedo; si deslizas encima, se mueve la pantalla y no las barras. Toca el candado para cambiarlos y otra vez para bloquearlos. Cada vez que abres la app empiezan bloqueados.
- **Arranque con un auto**: la pantalla de carga muestra el auto azul con flamas en lugar del ícono de la app; al abrir, el auto se acerca, acelera y se va. El encabezado lleva el auto rojo en lugar del ícono. El ícono del teléfono no cambia.
- La pantalla de inicio nueva necesita instalar el APK de esta versión (trae un plugin nuevo). Lo demás también llega por actualización.

## 1.7.0 (5 nov 2026)
- **Fotos del auto en Mi garaje**: hasta 3 por carrito (por ejemplo de frente, de lado y de atrás). Botón «Fotos» en cada tarjeta; puedes elegir varias de un jalón y la app les quita el fondo.
- La tarjeta del garaje muestra las fotos del auto y se deslizan de lado, con puntitos. Al tocarlas se abre el visor: pasar entre fotos, «Hacer principal», «Quitar esta» y «Agregar».
- **En el muro se usa la foto del blíster**, que es aparte: se sube desde el editor del carrito («Foto del blíster») y se ve con Imagen: Mis fotos. Si un carrito no tiene fotos del auto, el garaje muestra su blíster.
- Tocar el nombre en la tarjeta del garaje abre el editor.
- El respaldo incluye también las fotos del auto.

## 1.6.0 (4 nov 2026)
- La app ahora se llama **Colección de autos**, con ícono nuevo (el auto derrapando, sin fondo) y pantalla de inicio nueva. El nombre y el ícono del teléfono cambian al instalar el APK de esta versión; tus datos se quedan.
- En **Mi garaje** cada tarjeta muestra la foto del carrito si la tiene, y trae el botón «Foto» para ponerle o cambiarle la foto ahí mismo (le quita el fondo blanco; si la imagen ya viene sin fondo, la respeta).
- Los respaldos y la foto del muro ahora se guardan como "coleccion-de-autos…".

## 1.5.0 (4 nov 2026)
- **Todo en tu teléfono, sin servidor.** Tus muros, carritos y fotos nunca salen del teléfono. Lo único que usa internet es buscar actualizaciones de la app.
- **Editor simple por defecto**: foto, nombre, color, qué es, tipo, serie, número, año, dónde va y notas.
- **Edición avanzada** (se prende en Ajustes): agrega cinco secciones para dejar el dibujo igual al carrito:
  - Pintura: acabado brillante, metálico, mate o cromo; segundo color en el techo o abajo; tomar un color de una foto con el gotero.
  - Decoración: franja, dos franjas, banda ancha, llamas, degradado, cuadros o arte/grafiti, con dos colores; número de carreras.
  - Rines: 5 rayos, 10 rayos, 5 hoyos, malla, disco o todo terreno; color; tamaño y traseros más grandes.
  - Forma y postura: más alto o más bajo, más largo o más corto, alerón, motor de fuera y vidrios (claros, polarizados, cromados o ámbar).
  - Blíster: Treasure Hunt o Super TH, color del cartón y blíster grande.
- Ajustes → Respaldo dice cuándo guardaste tu último respaldo. Como todo vive en el teléfono, si desinstalas la app se borra: el respaldo es tu copia.
- La foto del muro ahora usa exactamente el mismo dibujo que la pantalla.

## 1.4.1 (4 nov 2026)
- **Ajustes** en el engrane de arriba a la derecha: respaldo, Subir varias fotos, versión y Buscar actualización. Antes estaban hasta abajo del garaje, después de todos los carritos, y no se encontraban.
- Cuando hay una versión nueva lista, el engrane muestra un punto naranja y Ajustes trae el botón «Actualizar a la versión…» hasta arriba.
- En la app ya no sale el punto de "Guardado en el teléfono": siempre se guarda solo.

## 1.4.0 (4 nov 2026)
- **Menú abajo** con dos secciones: **Mi garaje** y **Mis muros**. La app recuerda en cuál estabas.
- **Mi garaje**: todos tus carritos, de todos los muros y la bandeja, en tarjetas con su blíster, nombre, dónde está, serie, color, año y si es real u original. Tocar la tarjeta abre el editor; «Ver» te lleva a su muro y lo ilumina.
- **Buscar** en el garaje por nombre, serie, número, color, año, muro o columna (puedes combinar palabras: "mach azul"). Filtros: Todos, Reales, Originales, De película y En la bandeja.
- Botón redondo «+» en el garaje para agregar un carrito.
- En el garaje también están las estadísticas (lo que antes era Inventario) y Respaldo y fotos (respaldo, Subir varias fotos y la versión).
- **Acomodar** (antes «Acomodo rápido»), con botones: columnas de mayor a menor, de menor a mayor, en campana y cortas al centro; color de oscuro a claro y de claro a oscuro; reales primero. Todo se puede deshacer.
- Arreglado: al cambiar el nombre de una columna, el cuadro de texto se escondía detrás de los blísters. Ahora sale encima y más grande en el celular.
- Arreglado: el cuadro «Este muro» se veía amontonado en algunos celulares. Ahora el título va en una línea con la X en la esquina, solo dice cuántos carritos y columnas tiene, y los botones son del mismo tamaño.
- Se quitaron los textos de indicaciones (cómo arrastrar, qué revisa el coach, etc.) y el botón «Volver a la versión del APK».

## 1.3.0 (4 nov 2026)
- **Varios muros**, como mazos: arriba hay una fila con tus muros (Muro 1, Muro 2…) y el botón «+ Muro». Toca el muro activo para cambiarle el nombre ("Muro de la sala") o eliminarlo; sus carritos pasan a la bandeja.
- Cada muro guarda su propio color y su separación. La bandeja es una sola, compartida por todos.
- Pasar carritos entre muros: en el editor del carrito, «Dónde va» lista las columnas de todos los muros; eliges la columna del otro muro y se va directo. Sale un aviso con «Ver ese muro».
- **Tipos de vehículo** nuevos con su dibujo: SUV o 4x4, van o combi, autobús, camión o tráiler, moto y monster truck.
- **Blíster grande** (para monster trucks y similares): el blíster sale 20 % más grande en el muro y en la foto, y el tope del 30 % visible se respeta igual. Al elegir Monster truck se marca solo.
- El coach avisa cuando hay una sola moto, monster o vehículo de trabajo entre coches, para que los juntes.
- **Tu biblioteca de fotos**: con «Importar fotos», las fotos que no tienen carrito todavía se guardan aparte. Al agregar un carrito, en cuanto escribes su nombre la foto se pone sola.
- Al escribir el nombre de uno que ya tienes, te lo muestra con «Copiar datos» para no capturar todo otra vez (útil para repetidos).
- Si eliminas un carrito con foto, la foto se queda en tu biblioteca.
- El respaldo ahora incluye todos los muros y la biblioteca.
- La foto del muro lleva el nombre del muro como título.
- Limpieza de «Acomodo rápido»: se quitaron «Ver los nombres de archivo», «Copiar los que faltan» y «Volver al muro original». «Importar fotos» ahora se llama «Subir varias fotos».

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
