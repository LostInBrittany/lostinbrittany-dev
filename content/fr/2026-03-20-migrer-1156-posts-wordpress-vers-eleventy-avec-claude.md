---
layout: layouts/post.webc
title: "Migrer 1156 posts WordPress vers Eleventy avec Claude"
date: '2026-03-20'
permalink: '/fr/migrer-1156-posts-wordpress-vers-eleventy-avec-claude/'
tags: ['posts']
locale: 'fr'
social: 'posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-03-20-migrer-1156-posts-01.png" :alt="title"></img>

Vous vous souvenez de l'âge d'or des blogs français ? Entre 2005 et 2012, plus ou moins. L'époque où des gens comme [Korben](https://korben.info) démarraient, où il existait une vraie blogosphère française, où la plupart des blogueurs se connaissaient, se mettaient dans des blogrolls mutuels, allaient à des rencontres IRL...

Il se trouve qu'à cette époque, il y a 20 ans, j'avais un blog. Assez actif, même. [lostinbrittany.org](https://lostinbrittany.org/blog). J'y écrivais sur des sujets très divers, j'allais à des rencontres de blogueurs, on se retrouvait, on commentait les posts les uns des autres. C'était un autre web.

![Le blog LostInBrittany, version WordPress](/img/posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png)

Entre 2006 et 2012, j'ai pondu quelque 1300 posts, d'abord sur Dotclear, que j'ai ensuite migré sur WordPress. Mon collègue [Steven](https://www.linkedin.com/in/stevenleroux), CTO de Clever Cloud, s'en souvient. Il se moque encore, 20 ans après, de mes posts sur les nouvelles versions de WordPress. Merci Steven.

## Le blog est mort, vive le blog

Le blog n'est plus actif depuis des années. Mais voilà, je me forçais quand même à tenir WordPress à jour. Le patcher. Le sécuriser. Mettre à jour les plugins. Vérifier que rien n'avait pété. Pour un blog que plus personne ne lisait, c'était devenu un rituel absurde de maintenance, un peu comme tondre la pelouse d'une maison abandonnée.

Et au bout d'un moment, j'en ai eu marre.

Le déclic est venu en lisant un post de Nicolas Martignole, du [Touilleur Express](https://www.touilleur-express.fr/2026/03/10/de-wordpress-a-golang-avec-claude-code/), où il raconte sa propre migration de WordPress. Ça m'a parlé. Ce sentiment de traîner un WordPress comme un boulet, alors que des solutions plus légères, plus simples, plus adaptées existent.

## Pourquoi Eleventy

Si vous suivez ce blog, vous savez que je suis un fan d'[Eleventy](https://11ty.dev/). J'ai déjà plusieurs sites qui tournent dessus : ce blog technique que vous lisez en ce moment, [lostinbrittany.com](https://lostinbrittany.com) le site perso, [playtesting.org](https://playtesting.org) mon blog de JdR... et d'autres.

J'adore la philosophie : des fichiers statiques, du Markdown, des composants [WebC](https://www.11ty.dev/docs/languages/webc/) que j'affectionne particulièrement, pas de base de données, pas de serveur à maintenir, pas de failles de sécurité WordPress à colmater en urgence un dimanche matin. Juste du contenu qui se transforme en HTML. Simple, rapide, déployable n'importe où.

Alors la décision était évidente : migrer l'ancien blog sur Eleventy.

## 1156 posts. Oui, mille cent cinquante-six.

Le chantier semblait titanesque. 1156 posts pour être exact. Des années de contenu dans tous les formats possibles : du HTML brut, du contenu WordPress avec ses shortcodes, des images intégrées de mille façons différentes, des vidéos embarquées... Et les commentaires ! Je ne voulais surtout pas perdre les commentaires. C'est la moitié de l'âme d'un blog de cette époque, les conversations qu'on y avait.

Si j'avais dû faire ça à la main, j'y serais encore dans cinq ans. Même avec des scripts, le nombre de cas particuliers à gérer rendait la chose décourageante.

## Entrer Claude dans l'équation

Alors j'ai fait ce qu'on fait en 2026 : j'ai donné le boulot à Claude.

Je lui ai fourni la template et le code de ce blog, le projet Eleventy avec les composants WebC. Je lui ai demandé de créer un nouveau projet à côté, et d'y migrer tout le contenu WordPress. Les posts, les commentaires, la blogroll, les images, tout.

Le cahier des charges était simple :
- Migrer les 1156 posts en Markdown avec le bon front matter
- Conserver les commentaires, rattachés à chaque post
- Garder les images et les liens fonctionnels
- Respecter la structure Eleventy et les conventions WebC du blog

Et quelques heures plus tard... c'était fait.

Pas parfait du premier coup, bien sûr. Il y a eu des itérations, des ajustements, des cas particuliers à traiter. Mais le gros du travail, cette migration massive qui m'aurait pris des semaines, a été abattue en quelques heures. Claude a parcouru l'export WordPress, transformé chaque post, géré les commentaires, nettoyé le HTML, structuré le tout.

## Le résultat

[lostinbrittany.org](https://lostinbrittany.org/blog) est en ligne. Sur Eleventy. Plus de WordPress.

Plus de mises à jour de sécurité. Plus de plugins à maintenir. Plus de base de données MySQL. Juste des fichiers statiques, déployés en quelques secondes.

Et tous les posts sont là. Les 1156. Avec leurs commentaires. Vingt ans de blog, préservés, dans un format qui survivra bien plus longtemps qu'une instance WordPress.

## Ce que ça dit sur le moment qu'on vit

Ce qui m'a frappé dans cette expérience, ce n'est pas tant que Claude ait fait le travail. C'est qu'un travail que j'avais repoussé pendant des années parce qu'il semblait trop gros est devenu faisable en un après-midi.

Il y a un tas de tâches comme ça, dans nos vies de développeurs. Des migrations qu'on repousse. Du code legacy qu'on n'ose pas toucher. Des refactorings qu'on sait nécessaires mais qu'on ne lance jamais parce que le rapport effort/bénéfice semble trop défavorable.

Les assistants de code changent cette équation. Pas en faisant le travail à notre place, mais en rendant accessibles des chantiers qu'on n'aurait jamais entrepris seuls.

Et mon vieux blog, celui qui racontait les débuts de l'iPhone, les nouvelles versions de WordPress (oui Steven, je sais), et mille autres choses, il a enfin trouvé sa forme finale. Statique, léger, pérenne.

Comme il aurait dû l'être depuis le début, finalement.
