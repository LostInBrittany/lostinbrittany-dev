---
layout: layouts/post.webc
title: "Pourquoi j'apprends Rust en 2026"
date: '2026-02-24'
permalink: '/fr/pourquoi-japprends-rust-en-2026/'
tags: ['posts']
locale: 'fr'
social: 'posts/2026-02-24-why-im-learning-rust-in-2026-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-02-24-why-im-learning-rust-in-2026.png" :alt="title"></img>

J'avais appris juste assez de Rust il y a quelques années pour hocher la tête dans les conversations, lire un peu de code, ressentir une vague culpabilité, et passer à autre chose. Je ne l'avais jamais vraiment utilisé.

Et maintenant, en 2026, j'y reviens volontairement.

Ce qui semble un peu contre-intuitif, parce qu'on est à l'ère où les assistants de code peuvent générer une implémentation plausible de presque n'importe quoi en quelques secondes. Si la machine peut écrire du Rust à ta place, pourquoi passer du temps à apprendre Rust ?

En partie parce que Rust est partout autour de moi.

Chez [Clever Cloud](https://clever.cloud), où je travaille, Rust est l'un des principaux langages de la plateforme. Une grande partie de notre infrastructure, de notre outillage interne et de nos systèmes centraux sont écrits en Rust. Ce n'est pas une expérimentation marginale, c'est comme ça que les choses se construisent ici. Quand je regarde des PRs, des discussions d'architecture ou des incidents en production, c'est du Rust que je lis. Être capable de suivre ce code, de le questionner et d'avoir des opinions éclairées dessus n'est pas optionnel pour moi, ça fait partie de mon travail.

Mais la raison plus profonde, c'est que le métier lui-même a changé.

## Les assistants n'ont pas tué l'apprentissage des langages, ils ont déplacé les poteaux

Il y a cinq ans, apprendre un langage signifiait : « Je veux être productif en écrivant du code dedans. » Syntaxe, patterns, bibliothèques, mémoire musculaire.

En 2026, avec des agents dans la boucle, j'apprends Rust pour une raison différente :

**Je veux être capable de piloter le code même quand ce n'est pas moi qui le tape.**

Quand un assistant produit 200 lignes en un clin d'œil, le goulot d'étranglement n'est plus « à quelle vitesse je peux l'écrire ? » C'est :

- est-ce que je peux dire si c'est correct ?
- est-ce que je peux dire si c'est sûr ?
- est-ce que je peux dire si ça va nous mordre en production ?
- est-ce que je peux orienter l'implémentation avant qu'elle devienne une histoire de maintenance ?

Rust est un langage où ces questions comptent énormément, parce que la valeur de Rust n'est pas la « jolie syntaxe ». Ce sont les garanties, et le coût de mal comprendre ces garanties est bien réel.

## Rust est un excellent amplificateur... ce qui veut dire que les erreurs sont amplifiées aussi

Rust est célèbre pour attraper les erreurs à la compilation. C'est vrai.

Mais il est aussi très doué pour donner un faux sentiment de sécurité si on se contente de regarder le fait que ça compile.

Un agent peut générer du Rust qui compile tout en étant :

- **gourmand en allocations** (clone partout)
- **sur-ingéniéré** (lifetimes et frameworks génériques sans raison)
- **fragile** (mauvaise sémantique d'erreurs, pas de contexte)
- **subtilement faux en concurrence** (bloquer le runtime async, risques d'annulation, état partagé inutile)
- **« safe » au sens Rust, mais pas safe au sens ingénierie** (choix de dépendances, feature flags, dérive de MSRV)

Alors oui : les assistants facilitent la production de code Rust.

Ils facilitent aussi la mise en production de code Rust qu'on ne comprend pas vraiment.

## La nouvelle compétence clé n'est pas écrire du code. C'est relire du code.

Mon travail quotidien me pousse déjà dans cette direction.

Quand on est dans un rôle de leadership/DevRel/architecture, on fait constamment une variante de :

- lire du code qu'on n'a pas écrit
- relire des PRs
- diagnostiquer des comportements à travers les systèmes
- faire des choix d'outillage et de dépendances
- expliquer pourquoi quelque chose est une bonne ou une mauvaise idée

Les assistants poussent cette dynamique à fond.

Si un agent peut produire quatre implémentations alternatives, ma valeur n'est pas « je tape plus vite ». Ma valeur, c'est : **je peux choisir la bonne et expliquer pourquoi.**

Et pour ça, j'ai besoin de compétence, pas de vibes.

## « Mais tu ne peux pas juste demander à l'agent d'expliquer ? »

Bien sûr. Je le fais tout le temps.

Mais il y a un piège : si on n'a pas déjà un modèle mental, les explications semblent convaincantes même quand elles sont fausses ou incomplètes.

Rust a beaucoup de code qui « a l'air bien » mais qui est en fait un tas de compromis :

- Est-ce qu'on possède la chaîne ou on l'emprunte ?
- Est-ce qu'on retourne des références qui ne peuvent pas vivre assez longtemps ?
- Est-ce que ce type d'erreur est utile pour les appelants ou juste du bruit ?
- Est-ce qu'on tire un arbre de dépendances entier pour un seul helper ?
- Est-ce que c'est async parce que c'est nécessaire, ou parce que async fait moderne ?

Si on ne sait pas lire du Rust, on ne peut pas évaluer l'explication de manière fiable non plus.

Ce n'est pas une position anti-IA. C'est simplement reconnaître la nouvelle réalité : l'agent est un multiplicateur, et les multiplicateurs amplifient votre jugement... ou son absence.

## Apprendre un langage en 2026, c'est apprendre ses modes de défaillance

Voici donc mon vrai objectif avec Rust :

- apprendre les patterns qui apparaissent dans les vrais codebases (clap, serde, tokio, axum, idiomes de gestion d'erreurs)
- apprendre les modes de défaillance dans lesquels les agents tombent (soupe de clones, unwraps, surenchère de génériques, blocage accidentel, prolifération de dépendances)
- construire un ensemble de réflexes de revue et de « phrases de pushback » réutilisables
- devenir assez fluide pour piloter les agents efficacement au lieu de simplement accepter leur output

C'est pourquoi mon plan d'apprentissage est orienté projet et revue. Je n'essaie pas de « devenir un Rustacean ». J'essaie de devenir quelqu'un qui peut regarder du code Rust et dire :

- « Oui, c'est bon. On shippe. »
- « Non, c'est de la complexité Phase 3 pour un problème Phase 1. »
- « Ça bloque l'exécuteur. »
- « Cette dépendance ne vaut pas le coup. »
- « Cette gestion d'erreurs sera un cauchemar dans six mois. »

## Le mot de la fin : apprendre Rust, c'est rester responsable

Il y a aussi une raison plus simple, plus personnelle.

Quand je mets quelque chose en production, je veux en être responsable.

Si un système casse en production, « c'est l'assistant qui l'a écrit » n'est pas une réponse. La responsabilité ne se déplace pas.

Donc apprendre Rust en 2026 est, pour moi, une façon de garder le contrat honnête :

- je peux utiliser des agents,
- je peux aller plus vite,
- mais je comprends toujours ce qu'on construit.

Ce n'est pas de la nostalgie. C'est du pragmatisme.

## Ce que je vais faire concrètement

Je documente le parcours au fur et à mesure, parce que c'est la partie qui me semble valoir la peine d'être partagée :

- ce que je construis
- ce que le compilateur m'a appris
- ce que l'agent a mal fait
- les règles de revue que j'en ai extraites
- l'échelle « correction à moindre coût d'abord » que j'utilise pour éviter la sur-ingénierie

La promesse n'est pas « vous devriez tous apprendre Rust ».

La promesse, c'est : **si vous travaillez avec des assistants de code, vous devriez quand même apprendre suffisamment les langages que vous mettez en production pour garder votre jugement affûté.**

Rust se trouve simplement être un très bon langage pour rendre cette leçon concrète.
