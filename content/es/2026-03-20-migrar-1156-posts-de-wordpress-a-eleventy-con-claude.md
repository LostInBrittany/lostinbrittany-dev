---
layout: layouts/post.webc
title: "Migrar 1156 posts de WordPress a Eleventy con Claude"
description: "Veinte años de blog, 1156 entradas y sus comentarios, fuera de WordPress."
date: '2026-03-20'
permalink: '/es/migrar-1156-posts-de-wordpress-a-eleventy-con-claude/'
tags: ['posts']
locale: 'es'
social: 'posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png'
---


<img class="img-right img-250px" src="/img/posts/2026-03-20-migrer-1156-posts-01.png" :alt="title"></img>

¿Os acordáis de la época dorada de los blogs franceses? Entre 2005 y 2012, más o menos. Para quienes no estéis familiarizados con la blogosfera francesa, imaginad algo parecido a lo que pasaba en España con Microsiervos, Barrapunto o los primeros blogs de tecnología. Gente como [Korben](https://korben.info) (uno de los blogueros tech franceses más emblemáticos, que sigue activo hoy) empezaba en esa época: una comunidad donde todo el mundo se conocía, se enlazaban mutuamente en blogrolls, se comentaban los posts unos a otros, y se veían en quedadas IRL. Era otro internet, antes de que las redes sociales se lo tragaran todo.

Resulta que en esa época, hace ya 20 años, yo tenía un blog. Bastante activo, de hecho. [lostinbrittany.org](https://lostinbrittany.org/blog). Escribía sobre temas muy variados, iba a encuentros de blogueros, nos poníamos en blogrolls mutuos... Era una web diferente.

![El blog LostInBrittany, versión WordPress](/img/posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png)

Entre 2006 y 2012 escribí unos 1.300 posts, primero en Dotclear (una plataforma de blogs francesa, pensad en ella como la alternativa gala a WordPress), que luego migré a WordPress. Mi colega [Steven](https://www.linkedin.com/in/stevenleroux), CTO de Clever Cloud, se acuerda perfectamente. Todavía se ríe, 20 años después, de mis posts sobre cada nueva versión de WordPress. Gracias Steven.

## El blog ha muerto, viva el blog

El blog lleva años inactivo. Pero aun así, me obligaba a mantener WordPress actualizado. Parchearlo. Securizarlo. Actualizar plugins. Comprobar que nada se hubiera roto. Para un blog que ya nadie leía, se había convertido en un ritual absurdo de mantenimiento, algo así como cortar el césped de una casa abandonada.

Y en un momento dado, me harté.

El detonante fue leer un post de Nicolas Martignole, del [Touilleur Express](https://www.touilleur-express.fr/2026/03/10/de-wordpress-a-golang-avec-claude-code/) (un conocido blog tech francés), donde contaba su propia migración de WordPress. Me sentí identificado. Esa sensación de arrastrar un WordPress como una bola de plomo, cuando existen soluciones más ligeras, más simples, más adaptadas.

## Por qué Eleventy

Si seguís este blog, ya sabéis que soy fan de [Eleventy](https://11ty.dev/). Ya tengo varios sitios funcionando con él: este blog técnico que estáis leyendo ahora mismo, [lostinbrittany.com](https://lostinbrittany.com) mi web personal, [playtesting.org](https://playtesting.org) mi blog de juegos de rol... y otros.

Me encanta la filosofía: ficheros estáticos, Markdown, componentes [WebC](https://www.11ty.dev/docs/languages/webc/) que me gustan especialmente, sin base de datos, sin servidor que mantener, sin vulnerabilidades de WordPress que parchear un domingo por la mañana. Solo contenido que se transforma en HTML. Simple, rápido, desplegable en cualquier sitio.

Así que la decisión era obvia: migrar el viejo blog a Eleventy.

## 1.156 posts. Sí, mil ciento cincuenta y seis.

El proyecto parecía titánico. 1.156 posts para ser exactos. Años de contenido en todos los formatos imaginables: HTML bruto, contenido WordPress con sus shortcodes, imágenes incrustadas de mil maneras distintas, vídeos embebidos... ¡Y los comentarios! No quería perder los comentarios de ninguna manera. Son la mitad del alma de un blog de aquella época, las conversaciones que la gente tenía allí.

Si hubiera tenido que hacerlo a mano, estaría todavía en ello dentro de cinco años. Incluso con scripts, la cantidad de casos particulares a gestionar hacía que la tarea fuera desalentadora.

## Entra Claude en la ecuación

Así que hice lo que se hace en 2026: le di el trabajo a Claude.

Le proporcioné la plantilla y el código de este blog, el proyecto Eleventy con los componentes WebC. Le pedí que creara un proyecto nuevo al lado, y que migrara todo el contenido de WordPress. Posts, comentarios, blogroll, imágenes, todo.

El pliego de condiciones era simple:
- Migrar los 1.156 posts a Markdown con el front matter correcto
- Conservar los comentarios, asociados a cada post
- Mantener las imágenes y los enlaces funcionales
- Respetar la estructura Eleventy y las convenciones WebC del blog

Y unas horas después... estaba hecho.

No perfecto a la primera, claro. Hubo iteraciones, ajustes, casos particulares que tratar. Pero el grueso del trabajo, esa migración masiva que me habría llevado semanas, se despachó en unas pocas horas. Claude recorrió la exportación de WordPress, transformó cada post, gestionó los comentarios, limpió el HTML, lo estructuró todo.

## El resultado

[lostinbrittany.org](https://lostinbrittany.org/blog) está en línea. Sobre Eleventy. Sin WordPress.

Sin más actualizaciones de seguridad. Sin más plugins que mantener. Sin más base de datos MySQL. Solo ficheros estáticos, desplegados en segundos.

Y todos los posts están ahí. Los 1.156. Con sus comentarios. Veinte años de blog, preservados en un formato que sobrevivirá mucho más que cualquier instancia de WordPress.

## Lo que esto dice sobre el momento que vivimos

Lo que me impactó de esta experiencia no es tanto que Claude hiciera el trabajo. Es que una tarea que llevaba años posponiendo porque parecía demasiado grande se volvió factible en una tarde.

Hay un montón de tareas así en nuestras vidas de desarrolladores. Migraciones que posponemos. Código legacy que no nos atrevemos a tocar. Refactorizaciones que sabemos necesarias pero que nunca empezamos porque la relación esfuerzo/beneficio parece demasiado desfavorable.

Los asistentes de código cambian esa ecuación. No haciendo el trabajo por nosotros, sino haciendo accesibles proyectos que nunca habríamos emprendido solos.

Y mi viejo blog, el que contaba los inicios del iPhone, las nuevas versiones de WordPress (sí Steven, ya lo sé), y mil cosas más, por fin encontró su forma definitiva. Estático, ligero, perdurable.

Como debería haber sido desde el principio, al fin y al cabo.
