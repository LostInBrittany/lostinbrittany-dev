---
layout: layouts/post.webc
title: 'El futuro cabe en tu bolsillo: ejecutando un modelo de razonamiento en mi teléfono'
description: "Un modelo de razonamiento en menos de un giga, sin conexión, en un Android."
date: '2026-01-29'
permalink: '/es/el-futuro-cabe-en-tu-bolsillo/'
tags: ['posts']
locale: 'es'
social: 'posts/2026-01-29-the-future-fits-in-your-pocket-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-01-29-the-future-fits-in-your-pocket-00.png" :alt="title"></img>


Acabo de vivir uno de esos raros momentos en los que vislumbras el futuro. No como un concepto, sino funcionando ahí mismo en tu mano, generando tokens a un ritmo cómodo en un teléfono Android de gama media.

¿El modelo? LFM 2.5 700M Thinking. Menos de un gigabyte de RAM. Decenas de tokens por segundo en mi Motorola G55. Y genuinamente útil.

Me recuerda a otro momento, hace casi 20 años.

## "¡Tengo Internet en el bolsillo!"

Era 2008, creo. Acababa de conseguir mi primer teléfono Android (un G1, si no me falla la memoria). Había configurado los servicios de Google, lo había preparado todo, y en una fiesta con mi novia de entonces (ahora mi esposa) y amigos, declaré con entusiasmo: "¡Tengo Internet en el bolsillo!"

La gente se rio. Me llamaron friki. ¿Para qué servía tener Internet siempre disponible? Nadie usaría eso. Hablé de usar Google Calendar para apuntar reuniones directamente. Mi novia, profesora, me dijo que la gente normal usaba una agenda de papel para eso.

Todavía les recuerdo ese momento. Casi 20 años después, creo que tenía razón.

Ahí de pie con LFM 2.5 funcionando en mi teléfono, tengo esa misma sensación. Esa sensación de "la gente todavía no lo ve del todo, pero esto va a importar."

## El contexto: cuando "pequeño" significaba "juguete"

Durante el último año, he estado ejecutando el modelo OSS de OpenAI con 2 mil millones de parámetros en mi MacBook Air M4. Ha sido una revelaciónL tener un asistente de la era ChatGPT 3 funcionando completamente en local, ayudándome con tareas de código en aviones, manteniendo el trabajo sensible privado. Los 32GB de RAM lo manejan perfectamente, y la experiencia se siente... real. No un compromiso, sino una herramienta genuina.

Pero hay un problema: necesita al menos 16GB de RAM. Eso es un MacBook Air, no un teléfono. Es tu escritorio, no tu bolsillo.

He probado modelos más pequeños antes. El rango de 1-3 mil millones de parámetros ha sido el dominio de demos simpáticas y respuestas de "bueno, lo intentó". Útil para tareas específicas y limitadas quizás, pero no algo a lo que recurrirías cuando realmente necesitas ayuda.

![Un modelo de razonamiento en mi bolsillo](/img/posts/2026-01-29-the-future-fits-in-your-pocket-01.png)

## El momento Apollo

Siempre he creído que el consumo energético actual de la IA es una fase temporal. El ordenador que guió al Apollo 11 a la Luna llenaba un hangar. Mi smartwatch tiene órdenes de magnitud más de potencia de cálculo y usa millones de veces menos energía. Este patrón se repite a lo largo de la historia de la informática: lo que empieza siendo masivo y hambriento de energía se vuelve pequeño, eficiente y omnipresente.

Pero creer en un futuro eventual y experimentarlo son cosas diferentes.

LFM 2.5 700M Thinking es más de 20 veces más pequeño que el modelo 2B que ejecuto en mi MacBook. Usa menos de un gigabyte de RAM. Y aquí está la cosa: no es un juguete. Es un modelo de razonamiento, uno que puede razonar sobre problemas, no solo hacer coincidencia de patrones en las respuestas. Funcionando en un teléfono que cuesta una fracción de un dispositivo de gama alta.

La trayectoria está clara una vez que la ves. Igual que tener Internet en el bolsillo parecía tonto hasta que se volvió indispensable.

## Por qué esto importa

**Privacidad y propiedad**: Cada consulta que envías a un modelo en la nube es un punto de datos. Para preguntas personales, para código propietario, para pensamientos que todavía estás formando... tener un modelo capaz funcionando completamente en tu dispositivo cambia la ecuación. Sin claves API, sin límites de velocidad, sin actualizaciones de términos de servicio que cambien lo que puedes preguntar.

**Disponibilidad**: Aviones, trenes, zonas rurales, países con Internet restringido. O simplemente trabajar en algo que no quieres que se interrumpa por problemas de conectividad. La inferencia local significa que tus herramientas funcionan cuando y donde las necesitas.

**Coste**: Después de la configuración inicial, no hay precio por token, ni suscripción mensual. El coste marginal de usar el modelo es esencialmente cero, solo el consumo de batería de tu dispositivo.

**Latencia**: Sin viaje de ida y vuelta a un datacenter. Los tokens empiezan a fluir inmediatamente.

**Eficiencia energética**: Ejecutar inferencia localmente en el NPU de un teléfono usa milivatios. Una consulta a la nube implica GPUs de datacenter, transmisión de red e infraestructura asociada. La diferencia de energía por consulta puede parecer pequeña, pero la física importa. Un modelo funcionando en silicio optimizado para el dispositivo, haciendo exactamente el trabajo que necesitas y nada más, es fundamentalmente más eficiente que la alternativa. A medida que estos modelos se vuelven más capaces, ese multiplicador de eficiencia se vuelve significativo.

## La realidad técnica

No voy a pretender que esto iguala a GPT-4 o Claude Sonnet. No lo hace. Pero ese no es el punto.

El punto es que un modelo de menos de mil millones de parámetros ahora puede ser genuinamente útil para tareas reales. Asistencia con código, ayuda con escritura, investigación rápida, razonamiento sobre problemas... no como una novedad, sino como una herramienta que realmente elegirías usar.

Las ganancias de eficiencia aquí son asombrosas. Estamos hablando de cuantización de modelos, motores de inferencia optimizados, innovaciones arquitectónicas que exprimen más capacidad de menos parámetros. La comunidad de investigación ha estado trabajando en esto durante años, pero estamos llegando a un punto de inflexión donde "pequeño y eficiente" pasa de "interesante" a "práctico."

## Pruébalo tú mismo

Si tienes curiosidad por los LLM locales pero te han desanimado los requisitos de hardware, vale la pena explorar esto. LFM 2.5 700M funciona en hardware modesto, incluso un teléfono más antiguo con una cantidad decente de RAM puede manejarlo.

La configuración es notablemente simple. Estoy usando [Apollo de Leap AI](https://www.liquid.ai/apollo), que es completamente gratis y toma aproximadamente un minuto configurar tanto en Android como en iPhone. Descarga la app, selecciona el modelo, y ya está funcionando.

Para uso en escritorio, herramientas como Ollama o LM Studio han hecho el proceso igualmente sencillo.

¿Y una vez que está funcionando? La experiencia de tener un asistente de IA capaz que es verdaderamente tuyo, que funciona sin conexión, que no cuesta nada por consulta... cambia cómo piensas sobre estas herramientas.

La gente puede reírse ahora, igual que lo hicieron con "Internet en el bolsillo." Pero dale tiempo.

## La trayectoria

Estamos en los primeros días de la IA eficiente. La narrativa ahora mismo está dominada por modelos cada vez más grandes, entrenamientos masivos y construcciones de datacenters. Pero siempre he creído que ese es el principio de la historia, no el final.

La historia sugiere que las tecnologías transformadoras siguen un camino: primero potentes pero caras y centralizadas, luego cada vez más eficientes y distribuidas. De mainframes a minicomputadoras a PCs a teléfonos. De cloud computing a edge computing. Y ahora, quizás, de LLMs masivos en la nube a modelos locales capaces.

LFM 2.5 700M Thinking no es perfecto. No reemplaza a Claude o GPT-4 para tareas complejas. Pero es la primera vez que uso un modelo de menos de mil millones de parámetros y pienso "esto es útil" en lugar de "esto es prometedor."

Y si esto es lo que podemos hacer con 700 millones de parámetros hoy, imagina lo que haremos con modelos de tamaño similar en un año o dos.

El futuro podría ser más pequeño de lo que pensamos. Y puede que ya quepa en tu bolsillo.

Igual que en 2008.
