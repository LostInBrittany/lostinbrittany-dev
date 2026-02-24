---
layout: layouts/post.webc
title: "Por qué estoy aprendiendo Rust en 2026"
date: '2026-02-24'
permalink: '/es/por-que-estoy-aprendiendo-rust-en-2026/'
tags: ['posts']
locale: 'es'
social: 'posts/2026-02-24-why-im-learning-rust-in-2026-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-02-24-why-im-learning-rust-in-2026.png" :alt="title"></img>

Aprendí lo justo de Rust hace un par de años para asentir en las conversaciones, leer algo de código, sentir una vaga culpabilidad y seguir adelante. Nunca lo usé de verdad.

Y ahora, en 2026, vuelvo a ello a propósito.

Lo cual suena un poco contraintuitivo, porque estamos en la era en la que los asistentes de código pueden generar una implementación plausible de casi cualquier cosa en segundos. Si la máquina puede escribir Rust por ti, ¿para qué dedicar tiempo a aprender Rust?

En parte porque Rust está por todas partes a mi alrededor.

En [Clever Cloud](https://clever.cloud), donde trabajo, Rust es uno de los principales lenguajes de la plataforma. Gran parte de nuestra infraestructura, nuestro tooling interno y nuestros sistemas centrales están escritos en Rust. No es un experimento secundario, es así como se construyen las cosas aquí. Cuando miro PRs, discusiones de arquitectura o incidentes en producción, lo que estoy leyendo es Rust. Ser capaz de seguir ese código, cuestionarlo y tener opiniones informadas sobre él no es opcional para mí, es parte de hacer bien mi trabajo.

Pero la razón más profunda es que el trabajo en sí ha cambiado.

## Los asistentes no mataron el aprendizaje de lenguajes, movieron la portería

Hace cinco años, aprender un lenguaje significaba: "Quiero ser productivo escribiendo código en él." Sintaxis, patrones, bibliotecas, memoria muscular.

En 2026, con agentes en el bucle, estoy aprendiendo Rust por una razón diferente:

**Quiero ser capaz de liderar el código incluso cuando no soy yo quien lo escribe.**

Cuando un asistente produce 200 líneas en un parpadeo, el cuello de botella ya no es "¿qué tan rápido puedo escribirlo?" Es:

- ¿puedo decir si esto es correcto?
- ¿puedo decir si esto es seguro?
- ¿puedo decir si esto nos va a morder en producción?
- ¿puedo dirigir la implementación antes de que se convierta en una historia de mantenimiento?

Rust es un lenguaje donde esas preguntas importan mucho, porque el valor de Rust no es la "sintaxis bonita". Son las garantías, y el coste de malinterpretar esas garantías es real.

## Rust es un gran amplificador... lo que significa que los errores también se amplifican

Rust es famoso por atrapar errores en tiempo de compilación. Eso es cierto.

Pero también es muy bueno dando una falsa sensación de seguridad si solo miras el hecho de que compila.

Un agente puede generar Rust que compila y al mismo tiempo ser:

- **hambriento de allocations** (clone por todas partes)
- **sobreingeniería** (lifetimes y frameworks genéricos sin razón)
- **frágil** (mala semántica de errores, sin contexto)
- **sutilmente incorrecto en concurrencia** (bloqueando el runtime async, riesgos de cancelación, estado compartido innecesario)
- **"safe" en el sentido Rust, pero no safe en el sentido de ingeniería** (elección de dependencias, feature flags, deriva de MSRV)

Así que sí: los asistentes facilitan producir código Rust.

También facilitan poner en producción código Rust que en realidad no entiendes.

## La nueva competencia clave no es escribir código. Es revisar código.

Mi trabajo diario ya me empuja en esa dirección.

Cuando estás en un rol de liderazgo/DevRel/arquitectura, estás constantemente haciendo alguna variante de:

- leer código que no escribiste
- revisar PRs
- diagnosticar comportamientos entre sistemas
- tomar decisiones sobre tooling y dependencias
- explicar por qué algo es una buena o mala idea

Los asistentes llevan esa dinámica al extremo.

Si un agente puede producir cuatro implementaciones alternativas, mi valor no es "puedo teclear más rápido". Mi valor es: **puedo elegir la correcta y explicar por qué.**

Y para eso necesito competencia, no vibes.

## "¿Pero no puedes simplemente pedirle al agente que explique?"

Claro. Lo hago todo el tiempo.

Pero hay una trampa: si no tienes ya un modelo mental, las explicaciones parecen convincentes incluso cuando son incorrectas o incompletas.

Rust tiene mucho código que "parece bien" pero que en realidad es un montón de compromisos:

- ¿Somos dueños del string o lo estamos tomando prestado?
- ¿Estamos devolviendo referencias que no pueden vivir lo suficiente?
- ¿Este tipo de error es útil para los llamadores o solo ruido?
- ¿Estamos trayendo un árbol de dependencias entero por un solo helper?
- ¿Esto es async porque es necesario, o porque async parece moderno?

Si no sabes leer Rust, tampoco puedes evaluar la explicación de forma fiable.

Esto no es una postura anti-IA. Es simplemente reconocer la nueva realidad: el agente es un multiplicador, y los multiplicadores amplifican tu juicio... o la falta de él.

## Aprender un lenguaje en 2026 es aprender sus modos de fallo

Este es mi verdadero objetivo con Rust:

- aprender los patrones que aparecen en codebases reales (clap, serde, tokio, axum, modismos de manejo de errores)
- aprender los modos de fallo en los que caen los agentes (sopa de clones, unwraps, exceso de genéricos, bloqueo accidental, proliferación de dependencias)
- construir un conjunto de reflejos de revisión y "frases de pushback" reutilizables
- volverme lo bastante fluido para liderar agentes eficazmente en vez de simplemente aceptar su output

Por eso mi plan de aprendizaje está orientado a proyectos y a revisión. No intento "convertirme en un Rustacean". Intento convertirme en alguien que puede mirar código Rust y decir:

- "Sí, esto está bien. A producción."
- "No, esto es complejidad de Fase 3 para un problema de Fase 1."
- "Esto bloquea el executor."
- "Esta dependencia no vale la pena."
- "Esta gestión de errores será una pesadilla en seis meses."

## La conclusión: aprender Rust es cómo me mantengo responsable

También hay una razón más simple, más personal.

Cuando pongo algo en producción, quiero ser responsable de ello.

Si un sistema se rompe en producción, "lo escribió el asistente" no es una respuesta. La responsabilidad no se mueve.

Así que aprender Rust en 2026 es, para mí, una forma de mantener el contrato honesto:

- puedo usar agentes,
- puedo ir más rápido,
- pero sigo entendiendo lo que estamos construyendo.

Eso no es nostalgia. Es pragmatismo.

## Lo que voy a hacer al respecto

Estoy documentando el camino sobre la marcha, porque esta es la parte que me parece que vale la pena compartir:

- lo que construyo
- lo que el compilador me enseñó
- lo que el agente hizo mal
- las reglas de revisión que extraje
- la escalera de "corrección barata primero" que uso para evitar la sobreingeniería

La promesa no es "todos deberíais aprender Rust".

La promesa es: **si trabajas con asistentes de código, deberías aprender lo suficiente de los lenguajes que pones en producción para mantener tu juicio afilado.**

Rust simplemente resulta ser un muy buen lenguaje para hacer esa lección concreta.
