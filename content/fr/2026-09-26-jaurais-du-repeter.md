---
layout: layouts/post.webc
title: "J'aurais dû répéter"
description: "Le matin de mon talk à Confitura, au lieu de travailler mon anglais, j'ai corrigé la façon dont une voix macOS lit les traits d'union."
date: '2026-09-26'
permalink: '/fr/jaurais-du-repeter/'
tags: ['posts']
locale: 'fr'
social: 'posts/2026-09-26-jaurais-du-repeter-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-09-26-i-should-have-been-rehearsing.png" :alt="title"></img>

C'est le matin de [mon talk](/talks/2026/2026-09-26_Confitura_Wrap-Reshape-or-Redesign-Retrofitting-Your-APIs-for-a-World-of-Agents/) à [Confitura](https://confitura.pl), à Varsovie. Les slides sont prêtes. Ce que je voulais faire ce matin était simple : écouter quelques passages de mon talk lus à voix haute, pour vérifier ma prononciation en anglais.

Je m'explique. Je suis un Espagnol perdu en Bretagne. J'ai un accent dans toutes les langues que je parle, et l'anglais reste toujours un petit défi. Avant un talk, entendre les phrases difficiles dites par quelqu'un d'autre m'aide beaucoup.

J'ai donc sélectionné un paragraphe, appuyé sur le raccourci « Énoncer la sélection », et entendu la voix native de macOS. Restons polis : elle n'a pas beaucoup progressé ces dernières années.

## Kokoro, comme voix système

J'avais entendu du bien de [Kokoro](https://huggingface.co/hexgrad/Kokoro-82M), un modèle de synthèse vocale neuronal aux poids ouverts. Il est petit (82 millions de paramètres), il tourne en local, et il a une voix étonnamment humaine. En cherchant un moyen de l'utiliser partout sur mon Mac, j'ai trouvé [KokoroVoice](https://github.com/vicnaum/kokoro-tts-macos) : une application qui enregistre Kokoro comme une vraie voix système macOS, via une extension audio unit de synthèse vocale. Tout tourne en local sur Apple Silicon, avec MLX. On choisit « Kokoro Heart » dans *Réglages Système → Accessibilité → Contenu énoncé*, et toutes les applications capables de parler parlent désormais avec Kokoro.

C'est génial. Vraiment. Sauf pour une chose.

## Le problème des traits d'union

Mon talk contient cette phrase :

> Collapse the multi-step human workflow into one outcome-shaped call.

Et Kokoro la lisait comme ça :

> Collapse the multi. Step human workflow into one outcome. Shaped call.

Écoutez vous-même :

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/1-hyphen.m4a"></audio>

Chaque mot composé était coupé en deux, avec une intonation de fin de phrase au milieu. Et en anglais technique, les mots composés avec trait d'union sont partout : *real-time*, *open-source*, *end-to-end*, *state-of-the-art*… Mon talk en est plein.

La chose raisonnable à faire était d'ignorer le problème et de répéter. Mais j'ai un TDAH, et quand mon cerveau trouve un problème intéressant, l'hyperfocus se déclenche. Alors j'ai ouvert Claude Code dans le dépôt de KokoroVoice, et j'ai passé ma matinée sur des traits d'union. Parfois je déteste mon cerveau.

## Premier round : un correctif qui passait les tests

J'ai demandé à Claude de rédiger une issue expliquant le problème. Puis, tant qu'à faire, de forker le dépôt, de corriger le bug et d'ouvrir une pull request.

Le premier correctif était le plus évident : dans l'étape de normalisation du texte, remplacer un trait d'union entre deux lettres par un espace. `multi-step` devient `multi step`. Claude a écrit une dizaine de cas de test, tous au vert, et a ouvert la [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2). Il faut lui reconnaître une chose : il a dit clairement qu'il n'avait pas *entendu* le résultat. Il n'y avait pas de Xcode sur ma machine, donc il n'avait testé que la transformation du texte, pas la voix.

J'ai donc installé Xcode, compilé l'application, et écouté.

Ça faisait toujours une pause.

## Deuxième round : mes oreilles contre les phonèmes

Claude est alors parti à la chasse : peut-être que j'utilisais encore l'ancienne version de l'extension, peut-être que mon texte contenait un trait d'union Unicode qui ressemble seulement à `-`, peut-être que des retours à la ligne ajoutaient des points… Il a écrit un petit outil pour capturer l'audio et mesurer les silences, et n'a trouvé aucun silence au niveau des traits d'union. Sur le papier, tout avait l'air correct.

À un moment, je l'ai arrêté et je lui ai dit ce que j'entendais vraiment. `multi step` sonnait maintenant presque naturel. Mais `outcome shaped` avait toujours une pause, parce que « outcome shaped » n'est pas quelque chose que le modèle connaît comme un tout. Et si je l'écrivais en un seul mot, `outcomeshaped`, c'était lu parfaitement.

C'était la pièce qui manquait. Kokoro ne lit pas des lettres, il lit des phonèmes produits par une bibliothèque de conversion graphème-phonème appelée Misaki. Regarder ce que Misaki produisait pour chaque option a tout éclairci :

| Écrit comme | Phonèmes Misaki | Ce qu'on entend |
|---|---|---|
| `outcome-shaped` | `ˈWtkˌʌm—ʃˈApt` | le trait d'union devient un tiret (`—`), donc une pause |
| `outcome shaped` | `ˈWtkˌʌm ʃˈApt` | deux accents primaires (`ˈ`), donc deux groupes séparés |
| `outcomeshaped` | `WtkˈʌmʃˌApt` | un seul mot, ça coule |

En anglais, un mot composé porte son accent principal sur la première partie : *OUT-come-shaped*, et non *OUT-come SHAPED*. Avec un espace, chaque mot garde son propre accent primaire, et la voix entend deux groupes. D'où la pause.

Alors, il suffit de coller les mots ? Non. Coller marche pour `outcomeshaped` parce que le modèle neuronal de secours de Misaki le devine bien. Mais la même astuce transforme `endtoend` en quelque chose comme « end-TOHND », et `realtime` en « ree-ALL-time ». Très bien pour un mot, une catastrophe comme règle générale.

Voici `real-time, end-to-end, state-of-the-art` avec les mots collés :

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b3-joined.m4a"></audio>

## Troisième round : laisse-moi écouter

C'est la partie que j'ai préférée. Au lieu de débattre de phonèmes, Claude a généré des fichiers WAV avec le vrai modèle, pour cinq stratégies différentes, sur ma phrase et sur une deuxième pleine de mots composés à risque (*real-time, end-to-end, state-of-the-art*). Puis il a ouvert le dossier et m'a demandé lesquels sonnaient juste.

Le gagnant : garder l'espace, mais utiliser le balisage d'accentuation de Misaki pour rétrograder chaque partie après la première. `outcome-shaped` devient `outcome [shaped](-1)`, et `state-of-the-art` devient `state [of](-1) [the](-1) [art](-1)`. Les phonèmes portent maintenant l'accent d'un mot composé, la pause a disparu, et le surlignage des mots fonctionne toujours. Ce n'est pas l'option la plus sophistiquée (construire le mot collé à partir des prononciations du dictionnaire sonnait bien aussi, mais demandait beaucoup plus de code), mais c'était assez bien pour mes oreilles, et le plus simple.

Voici la phrase du talk avec le correctif :

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/4-space-destress.m4a"></audio>

Et les mots composés à risque :

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b4-space-destress.m4a"></audio>

La [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2) est à jour, avec toute l'histoire dans la description. Maintenant, c'est au mainteneur de décider.

## Ce que j'en retiens

Quelques leçons, au-delà de « Horacio devrait répéter davantage ».

**Les tests étaient au vert et le bug était toujours là.** C'étaient de bons tests, mais ils vérifiaient le texte, et le problème était dans la façon dont le texte sonnait. Un agent ne peut vérifier que ce qu'il peut observer. Quand le résultat est de l'audio, l'observateur doit avoir des oreilles.

**J'étais la partie utile de la boucle.** Pas parce que je connaissais les entrailles de Misaki (je ne les connaissais pas, avant ce matin), mais parce que je pouvais entendre la différence entre *multi step* et *outcome shaped*, et essayer *outcomeshaped* à la main. Cette seule observation valait plus que toutes les hypothèses précédentes.

**Demander un test d'écoute a tout changé.** Dès que la question est devenue « lequel de ces cinq fichiers sonne juste ? » au lieu de « cette regex est-elle correcte ? », on a convergé en quelques minutes.

Et maintenant, si vous voulez bien m'excuser, j'ai un talk à répéter. Avec une voix qui dit enfin *outcome-shaped* correctement.
