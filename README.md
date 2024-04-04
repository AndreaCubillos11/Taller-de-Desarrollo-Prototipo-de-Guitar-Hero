# Taller-de-Desarrollo-Prototipo-de-Guitar-Hero

***Instrucciones para ejecutar el juego:***

1. **Clonar el Repositorio:**

   - Abre tu terminal o línea de comandos.
   - Navega al directorio donde deseas guardar el juego.
   - Ejecuta el siguiente comando para clonar el repositorio:

     ```
     git clone (aquí va el enlace del repositorio)
     ```

   - Esto descargará una copia local del repositorio en tu máquina.

2. **Abrir el Juego en el Navegador:**

   - Ve al directorio del repositorio clonado:

     ```
     cd (aquí va el nombre del archivo)
     ```

   - Encuentra el archivo `inicio.html` y ábrelo en tu navegador. Puedes hacerlo directamente desde la línea de comandos:

     ```
     open inicio.html # En macOS
     start inicio.html # En Windows
     ```

   - El juego debería cargarse en tu navegador y estar listo para jugar.

***Implementación de las funcionalidades Básicas:***

**1. Sonido:**

a) Función `playSound(flid)`:

   - Esta función se encarga de reproducir un sonido específico para cada cuerda de la guitarra cuando el jugador presiona la tecla correspondiente en el momento adecuado.
   - Toma un argumento llamado `flid`, que representa el identificador de la cuerda de la guitarra (por ejemplo, `'fgreen'`, `'fred'`, etc.).

b) Switch basado en `flid`:

   - La función utiliza un `switch` para determinar qué sonido debe reproducirse según el valor de `flid`.
   - Cada caso del `switch` corresponde a una cuerda de la guitarra y su sonido asociado.
   - Por ejemplo:
     - Si `flid` es `'fgreen'`, se obtiene el elemento de audio con el ID `"sonido5"` y se reproduce.
     - Si `flid` es `'fred'`, se obtiene el elemento de audio con el ID `"sonido4"` y se reproduce.
     - Y así sucesivamente para las otras cuerdas.

c) Elementos de audio:

   - Los elementos de audio con los ID `"sonido1"`, `"sonido2"`, `"sonido3"`, `"sonido4"` y `"sonido5"` están presentes en el HTML y contienen los archivos de sonido correspondientes.

**2. Contador de Puntos:**

a) Función `actualizarContador()`:

   - Esta función actualiza el contenido del elemento HTML con el ID `"contador"`.
   - Utiliza `document.getElementById('contador')` para obtener una referencia al elemento en el DOM.
   - Luego, establece el texto del elemento como `"Puntuación: "` seguido del valor almacenado en la variable `contador_numero`.

b) Variable `contador_numero`:

   - Esta variable mantiene un registro de la puntuación del jugador.
   - Inicialmente, se establece en `0`.

c) Función `collider`:

   - Esta función se llama cuando se produce una colisión entre dos elementos: la nota musical y el botón.
   - Toma tres argumentos:
     - `nota`: El elemento de la nota musical.
     - `buttom`: El elemento del botón.
     - `flid`: El identificador de la cuerda de la guitarra (por ejemplo, `'fgreen'`, `'fred'`, etc.).

**3. Colisión entre la nota y el botón:**

- La función verifica si la parte inferior de la nota (`pos1.bottom`) está dentro del área vertical del botón (`pos2.top` a `pos2.bottom`).
- Si la nota está dentro del área de colisión, se realizan las siguientes acciones:
  - Se quita la clase CSS `'animated'` de la nota y se agrega la clase `'hidden'`.
  - Se agrega la clase `'hitted'` al botón.
  - Se reproduce una animación de destello (probablemente visual) utilizando la función `play_flare_animation(flid)`.
  - Se reproduce el sonido correspondiente a la cuerda de la guitarra utilizando `playSound(flid)`.
  - Se incrementa el contador de puntos `(contador_numero)` en `1`.
  - Se llama a `actualizarContador()` para reflejar la puntuación actualizada en la interfaz.

**4. Mínimo 4 Cuerdas:**

a. Definición de las Cuerdas y Notas:

   - En el fragmento HTML, el contenedor `.notas` agrupa las notas de las cuerdas.
   - Cada cuerda está representada por un elemento `<div>` con una clase específica (por ejemplo, `.n-green`, `.n-red`, etc.).
   - Las notas están inicialmente ocultas (`hidden`) para que no sean visibles al inicio del juego.

b. Estilos y Posiciones de las Cuerdas y Notas:

   - Cada cuerda tiene una posición específica en el mástil de la guitarra mediante las propiedades `top` y `left`.
   - Las notas se definen con las clases `.n-green`, `.n-red`, `.n-yellow`, `.n-blue` y `.n-orange`.
   - Por ejemplo, la cuerda verde tiene la clase `.n-green` y se posiciona en la parte superior izquierda del mástil.

c. Efectos Visuales y Animaciones:

   - Los efectos visuales de destello (por ejemplo, `fgreen`, `fred`, etc.) se muestran cuando se toca una nota correctamente.
   - Estos elementos visuales están inicialmente ocultos (`hidden`).
   - Cuando se activa una nota, se aplica una animación específica (por ejemplo, `ngreen`, `nred`, etc.) para simular su movimiento hacia abajo en el mástil.

**5. Aleatoriedad en las Notas:**

a. Función `setInterval()` para generar notas aleatorias:

   - Esta función se ejecuta repetidamente con un intervalo de 3000 milisegundos (3 segundos).
   - Dentro de esta función:
     - Se obtiene una colección de elementos con la clase `'nota'` mediante `document.getElementsByClassName('nota')`.
     - Se genera un número aleatorio entre `0` y `5` (representando las cuerdas de la guitarra) utilizando la función `getRandomNumb(0, 5)`.
     - El número aleatorio determina qué nota se mostrará.
     - La nota correspondiente se muestra al quitar la clase `'hidden'` y, opcionalmente, se agrega la clase `'animated'` para aplicar algún efecto visual.

b. Función `getRandomNumb(min, max)`:

   - Esta función genera un número entero aleatorio dentro del rango especificado `(min y max)`.
   - Utiliza `Math.random()` para obtener un número decimal entre `0` (inclusive) y `1` (exclusivo).
   - Luego, multiplica este número por la diferencia entre `max` y `min`, y suma `min` para obtener un número aleatorio dentro del rango deseado.

**6. Botón de Pausa:**

a. Evento del botón de pausa `(pauseButton.addEventListener('click', () => {...}))`:

   - Cuando el usuario hace clic en el botón de pausa, se ejecuta el código dentro de la función.
   - La variable `juegoPausado` se utiliza para rastrear si el juego está en pausa o no.

b. Si el juego no está pausado:

   - Se reanuda la animación del mástil al establecer `mastilTexture.style.animationPlayState` en `'running'`.
   - Se reanuda la generación de notas aleatorias al configurar un nuevo intervalo utilizando `setInterval()`.
   - El número aleatorio determina qué nota se mostrará.
   - La nota correspondiente se muestra al quitar la clase `'hidden' y, opcionalmente, se agrega la clase `'animated'` para aplicar algún efecto visual.
   - Se cambia el texto del botón de pausa a "Pausa".
   - Se oculta la caja de pausa estableciendo `pauseBox.style.display` en `'none'`.
   - Se establece `juegoPausado` a `false`.

c. Si el juego está pausado:

   - Se detiene la generación de notas aleatorias al limpiar el intervalo utilizando `clearInterval(intervalo)`.
   - Se pausa la animación del mástil al establecer `mastilTexture.style.animationPlayState` en `'paused'`.
   - Se detienen las animaciones de las notas existentes al quitar la clase `'animated'` de cada elemento con la clase `'nota'`.
   - Se cambia el texto del botón de pausa a "Reanudar".
   - Se muestra una caja de pausa con un identificador `'pauseBox'`, aumentando su ancho y altura.
   - Se establece `juegoPausado` a `true`.

d. Actualización del botón de pausa:

   - El texto del botón de pausa se actualiza según el estado del juego `(juegoPausado)`.
   - Si el juego está pausado, el texto se establece en `'Reanudar'`.
   - Si el juego no está pausado, el texto se establece en `'Pausa'`.

e. Además, hay un botón de continuar con el identificador `'continueButton'` que, cuando se hace clic, simula un clic en el botón de pausa llamando a `pauseButton.click()`.

**7. Botón de Inicio:**

a) Evento del botón de inicio `(startButton.addEventListener('click', () => {...}))`:

   - Cuando el usuario hace clic en el botón de inicio, se ejecuta el código dentro de la función.
   - La variable `isGameStarted` se establece en `true`, indicando que el juego ha comenzado.
   - La animación del mástil `(mastilTexture)` se activa al establecer `animationPlayState` en `'running'`.

b) Generación aleatoria de notas:

   - La función `startGame()` utiliza `setInterval()` para generar notas aleatorias cada 3000 milisegundos (3 segundos).
   - Se obtiene una colección de elementos con la clase `'nota'`.
   - Se genera un número aleatorio entre `0` y `5` (representando las cuerdas de la guitarra).
   - El número aleatorio determina qué nota se mostrará.
   - La nota correspondiente se muestra al quitar la clase `'hidden'` y, opcionalmente, se agrega la clase `'animated'` para aplicar algún efecto visual.

c) Manejo de teclas presionadas y liberadas:

   - La función `document.body.addEventListener('keydown', function (e))` detecta cuando el usuario presiona una tecla.
   - Dependiendo de la tecla presionada, se ejecuta una acción específica:
     - Por ejemplo, si se presiona la tecla correspondiente a la cuerda verde, se activa la función `collider()` para verificar si la nota está dentro del área de colisión con el botón verde.
     - Además, se agrega la clase `'hit'` al botón correspondiente.


Desarrollado por: Andrea Cubillos e Ivonne Sierra.
   - La función `document.body.addEventListener('keyup', function (e))` detecta cuando el usuario suelta una tecla.
   - Dependiendo de la tecla liberada, se ejecuta una acción específica:
     - Por ejemplo, si se suelta la tecla correspondiente a la cuerda verde, se quita la clase `'hit'` del botón verde.
     - También se quita la clase `'hitted'` del botón, que probablemente se agregó cuando se tocó correctamente la nota.
