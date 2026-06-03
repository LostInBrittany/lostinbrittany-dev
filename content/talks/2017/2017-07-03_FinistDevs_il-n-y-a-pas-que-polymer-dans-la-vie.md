---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: " Il n'y a pas que Polymer dans la vie…"
event: "FinistDevs"
event_url: ""
date: "2017-07-03"
location: "Brest, France"
lat: 48.390394
lng: -4.486076
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2017/2017-07-03_FinistDevs_il-n-y-a-pas-que-polymer-dans-la-vie.pdf"
slides_url: "https://noti.st/lostinbrittany/G1ABuG/il-n-y-a-pas-que-polymer-dans-la-vie"
video_url: ""
talk_tags: []

---

Polymer par-ci, Polymer par-là, c'est bien beau de voir tout ce qu'on peut faire avec cette bibliothèque…

Mais à la base le discours qu'on nous vend depuis des années est celui des Web Components, des briques modulaires et interopérables, suivant un standard et pouvant être mélangés comme on le souhaite pour construire des webapp comme si on faisait du LEGO.
Alors, il n'est pas contradictoire de militer pour les Web Components et d'utiliser Polymer ?

Ben, pas du tout ! Polymer, surtout depuis la sortie de Polymer 2, n'est qu'une surcouche de sucre syntactique au dessus du standard Web Components, et les éléments créés avec Polymer sont bel et bien des Web Components standard.

De la même façon, il y a plein d'autres bibliothèques de Web Components qui ont un rôle semblable : SkateJS, SlimJS, BramJS... Chacune orientée vers une sensibilité et une façon de coder. Et bien entendu, les éléments créés avec eux se mélangent sans soucis, car ils suivent tous le même standard.

Dans ce talk nous allons voir comment ces éléments Polymer sont construits à partir du standard web components, voir ce côté sucre syntactique et comprendre ce qu'ils apportent. Ensuite on verra rapidement les bases de SkateJS et de SlimJS pour finir par prouver l'intéropérabilité avec une petite application qui mélange du Web Component standard, du Polymer, du SkateJS et du SlimJS.
