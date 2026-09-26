---
layout: layouts/post.webc
title: "Debería haber estado ensayando"
description: "La mañana de mi charla en Confitura, en lugar de practicar mi inglés, arreglé cómo lee los guiones una voz de macOS."
date: '2026-09-26'
permalink: '/es/deberia-haber-estado-ensayando/'
tags: ['posts']
locale: 'es'
social: 'posts/2026-09-26-deberia-haber-estado-ensayando-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-09-26-i-should-have-been-rehearsing.png" :alt="title"></img>

Es la mañana de [mi charla](/talks/2026/2026-09-26_Confitura_Wrap-Reshape-or-Redesign-Retrofitting-Your-APIs-for-a-World-of-Agents/) en [Confitura](https://confitura.pl), en Varsovia. Las slides están listas. Lo que quería hacer esta mañana era sencillo: escuchar algunas partes de mi charla leídas en voz alta, para comprobar mi pronunciación en inglés.

Me explico. Soy un español perdido en Bretaña. Tengo acento en todos los idiomas que hablo, y el inglés siempre es un pequeño reto. Antes de una charla, oír las frases difíciles dichas por otra persona me ayuda mucho.

Así que seleccioné un párrafo, pulsé el atajo de «Leer selección» y escuché la voz nativa de macOS. Seamos educados y digamos que no ha mejorado mucho en los últimos años.

## Kokoro, como voz del sistema

Había oído hablar bien de [Kokoro](https://huggingface.co/hexgrad/Kokoro-82M), un modelo neuronal de síntesis de voz de pesos abiertos. Es pequeño (82 millones de parámetros), funciona en local y suena sorprendentemente humano. Buscando una forma de usarlo en todo mi Mac, encontré [KokoroVoice](https://github.com/vicnaum/kokoro-tts-macos): una aplicación que registra Kokoro como una voz real del sistema macOS, mediante una extensión audio unit de síntesis de voz. Todo funciona en local sobre Apple Silicon, con MLX. Eliges «Kokoro Heart» en *Ajustes del Sistema → Accesibilidad → Contenido leído*, y todas las aplicaciones que saben hablar hablan ahora con Kokoro.

Es genial. De verdad. Salvo por una cosa.

## El problema de los guiones

Mi charla tiene esta frase:

> Collapse the multi-step human workflow into one outcome-shaped call.

Y Kokoro la leía así:

> Collapse the multi. Step human workflow into one outcome. Shaped call.

Escuchadlo vosotros mismos:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/1-hyphen.m4a"></audio>

Cada palabra compuesta quedaba cortada en dos, con una entonación de final de frase en medio. Y en el inglés técnico, las palabras compuestas con guion están por todas partes: *real-time*, *open-source*, *end-to-end*, *state-of-the-art*… Mi charla está llena de ellas.

Lo razonable habría sido ignorarlo y ensayar. Pero tengo TDAH, y cuando mi cerebro encuentra un problema interesante, se dispara el hiperfoco. Así que abrí Claude Code en el repositorio de KokoroVoice y me pasé la mañana con los guiones. A veces odio mi cerebro.

## Primer asalto: un arreglo que pasaba los tests

Le pedí a Claude que redactara una issue explicando el problema. Y luego, ya puestos, que hiciera un fork del repositorio, lo arreglara y abriera una pull request.

El primer arreglo fue el más obvio: en la etapa de normalización del texto, convertir un guion entre dos letras en un espacio. `multi-step` pasa a ser `multi step`. Claude escribió una docena de casos de test, todos en verde, y abrió la [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2). Hay que reconocerle una cosa: dijo claramente que no había *oído* el resultado. No había Xcode en mi máquina, así que solo había probado la transformación del texto, no la voz.

Así que instalé Xcode, compilé la aplicación y escuché.

Seguía haciendo una pausa.

## Segundo asalto: mis oídos contra los fonemas

Claude se lanzó entonces a la caza: quizá estaba usando todavía la versión antigua de la extensión, quizá mi texto tenía un guion Unicode que solo se parece a `-`, quizá los saltos de línea añadían puntos… Escribió una pequeña herramienta para capturar el audio y medir los silencios, y no encontró ningún silencio en los guiones. Sobre el papel, todo parecía correcto.

En un momento dado lo paré y le conté lo que oía de verdad. `multi step` sonaba ya casi natural. Pero `outcome shaped` seguía teniendo una pausa, porque «outcome shaped» no es algo que el modelo conozca como una unidad. Y si lo escribía como una sola palabra, `outcomeshaped`, lo leía perfectamente.

Esa era la pieza que faltaba. Kokoro no lee letras, lee fonemas producidos por una librería de conversión de grafemas a fonemas llamada Misaki. Mirar lo que Misaki producía para cada opción lo aclaró todo:

| Escrito como | Fonemas de Misaki | Lo que se oye |
|---|---|---|
| `outcome-shaped` | `ˈWtkˌʌm—ʃˈApt` | el guion se convierte en una raya (`—`), o sea, una pausa |
| `outcome shaped` | `ˈWtkˌʌm ʃˈApt` | dos acentos primarios (`ˈ`), o sea, dos grupos separados |
| `outcomeshaped` | `WtkˈʌmʃˌApt` | una sola palabra, fluye |

En inglés, una palabra compuesta lleva el acento principal en la primera parte: *OUT-come-shaped*, no *OUT-come SHAPED*. Con un espacio, cada palabra conserva su propio acento primario y la voz oye dos grupos. Ahí está la pausa.

Entonces, ¿basta con juntar las palabras? No. Juntarlas funciona con `outcomeshaped` porque el modelo neuronal de respaldo de Misaki lo adivina bien. Pero el mismo truco convierte `endtoend` en algo como «end-TOHND», y `realtime` en «ree-ALL-time». Vale para una palabra, pero como regla general es un desastre.

Así suena `real-time, end-to-end, state-of-the-art` con las palabras juntas:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b3-joined.m4a"></audio>

## Tercer asalto: déjame escuchar

Esta es la parte que más me gustó. En lugar de discutir sobre fonemas, Claude generó ficheros WAV con el modelo real, para cinco estrategias distintas, con mi frase y con una segunda llena de palabras compuestas problemáticas (*real-time, end-to-end, state-of-the-art*). Luego abrió la carpeta y me preguntó cuáles sonaban bien.

La ganadora: mantener el espacio, pero usar el marcado de acentuación de Misaki para rebajar cada parte después de la primera. `outcome-shaped` pasa a ser `outcome [shaped](-1)`, y `state-of-the-art` pasa a ser `state [of](-1) [the](-1) [art](-1)`. Los fonemas llevan ahora el acento de una palabra compuesta, la pausa ha desaparecido y el resaltado de palabras sigue funcionando. No es la opción más sofisticada (construir la palabra junta a partir de las pronunciaciones del diccionario también sonaba bien, pero requería mucho más código), pero era suficiente para mis oídos, y la más sencilla.

Así suena la frase de la charla con el arreglo:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/4-space-destress.m4a"></audio>

Y las palabras compuestas problemáticas:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b4-space-destress.m4a"></audio>

La [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2) está actualizada, con toda la historia en la descripción. Ahora le toca decidir al mantenedor.

## Lo que me llevo

Algunas cosas, más allá de «Horacio debería ensayar más».

**Los tests estaban en verde y el bug seguía ahí.** Eran buenos tests, pero comprobaban el texto, y el problema estaba en cómo sonaba el texto. Un agente solo puede verificar lo que puede observar. Cuando el resultado es audio, el observador necesita oídos.

**Yo era la parte útil del bucle.** No porque conociera las tripas de Misaki (no las conocía, hasta esta mañana), sino porque podía oír la diferencia entre *multi step* y *outcome shaped*, y probar *outcomeshaped* a mano. Esa sola observación valió más que todas las hipótesis anteriores.

**Pedir una prueba de escucha lo cambió todo.** En cuanto la pregunta pasó a ser «¿cuál de estos cinco ficheros suena bien?» en lugar de «¿es correcta esta regex?», convergimos en minutos.

Y ahora, si me disculpáis, tengo una charla que ensayar. Con una voz que por fin dice *outcome-shaped* como es debido.
