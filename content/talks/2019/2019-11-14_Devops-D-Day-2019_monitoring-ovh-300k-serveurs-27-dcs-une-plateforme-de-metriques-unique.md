---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Monitoring OVH : 300K serveurs, 27 DCs une plateforme de métriques unique"
event: "Devops D-Day 2019"
event_url: ""
date: "2019-11-14"
location: "Marseille, France"
lat: 43.296482
lng: 5.36978
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2019/2019-11-14_Devops-D-Day-2019_monitoring-ovh-300k-serveurs-27-dcs-une-plateforme-de-metriques-unique.pdf"
slides_url: "https://noti.st/lostinbrittany/X3udc7/monitoring-ovh-300k-serveurs-27-dcs-une-plateforme-de-metriques-unique"
video_url: "https://www.youtube.com/watch?v=elGhLortFXw"
talk_tags: []

---

Comment faire quand on doit faire le suivi de toute l’infrastructure du plus grand fournisseur de cloud Européen ? Comment choisir un outil quand les plus populaires ne tient pas la marée à cette échèle ? Comment construire une plateforme Metrics pour unifier, concilier et remplacer des années de legacy fragmenté et des solutions partielles ?

Dans ce talk nous racontons notre expérience sur la construction et la maintenance d’OVH Metrics, la plateforme utilisée pour monitorer toute l’infrastructure OVH. Nous avions besoin d’aller à des endroits ou la plupart de solutions de monitoring ne sont jamais allées, opérer à l’échelle du plus grand fournisseur Européen de cloud et hosting : 27 data centers, plus de 300k serveurs (physiques !) et des centaines de produits pour accomplir notre mission avec nos 1,3 millions de clients.

Venez pour entendre cette histoire de séries temporelles, de solutions open-sources poussées à l’extreme, de clusters HBase opérés en limite de capacité, et de comment une petite équipe s’est appuyé sur une poignée de solutions open-source et une bonne dose de code maison pour construire une des solutions de monitoring les plus performantes au monde.
