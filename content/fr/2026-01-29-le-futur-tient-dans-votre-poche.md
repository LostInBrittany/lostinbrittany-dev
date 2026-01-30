---
layout: layouts/post.webc
title: 'Le futur tient dans votre poche : faire tourner un modèle de raisonnement sur mon téléphone'
date: '2026-01-29'
permalink: '/fr/le-futur-tient-dans-votre-poche/'
tags: ['posts']
locale: 'fr'
social: 'posts/2026-01-29-the-future-fits-in-your-pocket-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-01-29-the-future-fits-in-your-pocket-00.png" :alt="title"></img>

Je viens de vivre un de ces rares moments où l'on entrevoit le futur. Pas comme un concept, mais fonctionnant là, dans ma main, générant des tokens à un rythme confortable sur un téléphone Android de milieu de gamme.

Le modèle ? LFM 2.5 700M Thinking. Moins d'un gigaoctet de RAM. Des dizaines de tokens par seconde sur mon Motorola G55. Et véritablement utile.

Cela me rappelle un autre moment, il y a presque 20 ans.

## "J'ai Internet dans ma poche !"

C'était en 2008, je crois. Je venais d'avoir mon premier téléphone Android (un G1, si ma mémoire est bonne). J'avais configuré les services Google, tout mis en place, et lors d'une soirée avec ma copine de l'époque (devenue depuis mon épouse) et des amis, j'ai déclaré avec enthousiasme : "J'ai Internet dans ma poche !"

Les gens ont ri. M'ont traité de geek. À quoi bon avoir Internet toujours disponible ? Personne n'utiliserait ça. J'ai parlé d'utiliser Google Calendar pour noter directement les réunions. Ma copine, enseignante, m'a dit que les gens normaux utilisaient un agenda papier pour ça.

Je leur rappelle encore ce moment. Presque 20 ans plus tard, je pense que j'avais raison.

Là, avec LFM 2.5 tournant sur mon téléphone, j'ai cette même sensation. Ce sentiment que "les gens ne le voient pas encore tout à fait, mais ça va compter."

## Le contexte : quand "petit" signifiait "jouet"

Depuis un an, je fais tourner le modèle OSS d'OpenAI avec 2 milliards de paramètres sur mon MacBook Air M4. C'est une révélation : avoir un assistant de l'ère ChatGPT 3 fonctionnant entièrement en local, m'aidant avec des tâches de code dans les avions, gardant le travail sensible privé. Les 32 Go de RAM gèrent ça parfaitement, et l'expérience semble... réelle. Pas un compromis, mais un véritable outil.

Mais il y a un hic : il faut au moins 16 Go de RAM. C'est un MacBook Air, pas un téléphone. C'est votre bureau, pas votre poche.

J'ai essayé des modèles plus petits avant. La gamme des 1-3 milliards de paramètres a été le domaine des démos mignonnes et des réponses "bon, il a essayé". Utile pour des tâches spécifiques et contraintes peut-être, mais pas quelque chose vers quoi vous vous tourneriez quand vous avez vraiment besoin d'aide.

![Un modèle de raisonnement dans ma poche](/img/posts/2026-01-29-the-future-fits-in-your-pocket-01.png)

## Le moment Apollo

J'ai toujours cru que la consommation énergétique actuelle de l'IA est une phase temporaire. L'ordinateur qui a guidé Apollo 11 vers la Lune remplissait un hangar. Ma montre connectée a des ordres de grandeur de puissance de calcul en plus et utilise des millions de fois moins d'énergie. Ce schéma se répète tout au long de l'histoire de l'informatique : ce qui commence massif et énergivore devient petit, efficace et omniprésent.

Mais croire en un futur éventuel et l'expérimenter sont deux choses différentes.

LFM 2.5 700M Thinking est plus de 20 fois plus petit que le modèle 2B que je fais tourner sur mon MacBook. Il utilise moins d'un gigaoctet de RAM. Et voilà le truc : ce n'est pas un jouet. C'est un modèle de raisonnement, capable de réfléchir aux problèmes, pas simplement de faire correspondre des patterns dans les réponses. Fonctionnant sur un téléphone qui coûte une fraction d'un appareil haut de gamme.

La trajectoire est claire une fois qu'on la voit. Tout comme avoir Internet dans sa poche semblait ridicule jusqu'à ce que ça devienne indispensable.

## Pourquoi c'est important

**Vie privée et propriété** : Chaque requête que vous envoyez à un modèle cloud est un point de données. Pour les questions personnelles, pour le code propriétaire, pour les pensées que vous êtes encore en train de former... avoir un modèle capable fonctionnant entièrement sur votre appareil change l'équation. Pas de clés API, pas de limites de débit, pas de mises à jour des conditions d'utilisation qui changent ce que vous avez le droit de demander.

**Disponibilité** : Avions, trains, zones rurales, pays avec un Internet restreint. Ou simplement travailler sur quelque chose que vous ne voulez pas voir interrompu par des problèmes de connectivité. L'inférence locale signifie que vos outils fonctionnent quand et où vous en avez besoin.

**Coût** : Après la configuration initiale, il n'y a pas de tarification par token, pas d'abonnement mensuel. Le coût marginal d'utilisation du modèle est essentiellement nul, juste la consommation de batterie de votre appareil.

**Latence** : Pas d'aller-retour vers un datacenter. Les tokens commencent à arriver immédiatement.

**Efficacité énergétique** : Faire de l'inférence localement sur le NPU d'un téléphone utilise des milliwatts. Une requête cloud implique des GPU de datacenter, la transmission réseau et l'infrastructure associée. La différence d'énergie par requête peut sembler faible, mais la physique compte. Un modèle fonctionnant sur du silicium optimisé pour l'appareil, faisant exactement le travail dont vous avez besoin et rien de plus, est fondamentalement plus efficace que l'alternative. À mesure que ces modèles deviennent plus capables, ce multiplicateur d'efficacité devient significatif.

## La réalité technique

Je ne prétendrai pas que cela égale GPT-4 ou Claude Sonnet. Ce n'est pas le cas. Mais ce n'est pas le propos.

Le propos est qu'un modèle de moins d'un milliard de paramètres peut maintenant être véritablement utile pour des tâches réelles. Assistance au code, aide à l'écriture, recherche rapide, raisonnement sur des problèmes... pas comme une nouveauté, mais comme un outil que vous choisiriez réellement d'utiliser.

Les gains d'efficacité ici sont stupéfiants. On parle de quantification de modèles, de moteurs d'inférence optimisés, d'innovations architecturales qui extraient plus de capacité de moins de paramètres. La communauté de recherche travaille là-dessus depuis des années, mais nous atteignons un point d'inflexion où "petit et efficace" passe de "intéressant" à "pratique."

## Essayez vous-même

Si vous êtes curieux des LLM locaux mais avez été rebuté par les exigences matérielles, cela vaut la peine d'explorer. LFM 2.5 700M fonctionne sur du matériel modeste, même un téléphone plus ancien avec une quantité décente de RAM peut le gérer.

La configuration est remarquablement simple. J'utilise [Apollo de Leap AI](https://www.liquid.ai/apollo), qui est complètement gratuit et prend environ une minute à configurer sur Android comme sur iPhone. Téléchargez l'application, sélectionnez le modèle, et c'est parti.

Pour une utilisation sur ordinateur, des outils comme Ollama ou LM Studio ont rendu le processus tout aussi simple.

Et une fois que ça tourne ? L'expérience d'avoir un assistant IA capable qui est vraiment à vous, qui fonctionne hors ligne, qui ne coûte rien par requête... ça change votre façon de penser à ces outils.

Les gens pourraient rire maintenant, tout comme ils l'ont fait pour "Internet dans ma poche." Mais donnez-lui du temps.

## La trajectoire

Nous sommes aux premiers jours de l'IA efficace. Le récit actuel est dominé par des modèles toujours plus grands, des entraînements massifs et des constructions de datacenters. Mais j'ai toujours cru que c'est le début de l'histoire, pas la fin.

L'histoire suggère que les technologies transformatrices suivent un chemin : d'abord puissantes mais chères et centralisées, puis de plus en plus efficaces et distribuées. Des mainframes aux mini-ordinateurs aux PC aux téléphones. Du cloud computing à l'edge computing. Et maintenant, peut-être, des LLM cloud massifs aux modèles locaux capables.

LFM 2.5 700M Thinking n'est pas parfait. Il ne remplace pas Claude ou GPT-4 pour les tâches complexes. Mais c'est la première fois que j'utilise un modèle de moins d'un milliard de paramètres et que je pense "c'est utile" plutôt que "c'est prometteur."

Et si c'est ce qu'on peut faire avec 700 millions de paramètres aujourd'hui, imaginez ce qu'on fera avec des modèles de taille similaire dans un an ou deux.

Le futur pourrait être plus petit qu'on ne le pense. Et il tient peut-être déjà dans votre poche.

Tout comme en 2008.
