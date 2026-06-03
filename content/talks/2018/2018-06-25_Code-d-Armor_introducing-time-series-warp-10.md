---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Introducing Time Series & Warp 10"
event: "Code d’Armor"
event_url: "http://www.codedarmor.fr"
date: "2018-06-25"
location: "22300 Lannion, France"
lat: 48.732084
lng: -3.459144
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2018/2018-06-25_Code-d-Armor_introducing-time-series-warp-10.pdf"
slides_url: "https://noti.st/lostinbrittany/thWpcA/introducing-time-series-warp-10"
video_url: "https://www.youtube.com/watch?v=AmVWN4pxlcE"
talk_tags: []

---

Longtemps considérées à tort comme une branche de l’économétrie, les séries temporelles sont revenues sur le front de la scène depuis quelques années, avec des applications sur multitude de domaines, du monitoring au traitement du signal, en passant par l’astronomie ou la détection de fraude.

Profitant des années de recherches et d’un corpus mathématique bien fournie, les séries temporelles sont cependant mal adaptées au stockage dans des bases de données classiques, qu’elles soient SQL ou non. C’est pour cela que l’essor des séries temporelles s’est vu accompagner de l’apparition d’une nouvelle catégorie de base de données : les bases de données en séries temporelles ou TSDB (time-series databases), telles que OpenTSDB, InfluxDB, Prometheus ou Warp 10.

Dans ce talk nous allons présenter les séries temporelles, et les différentes TSDB, et nous ferons un focus sur Warp 10, le moteur TSDB au cœur d’OVH Metrics, en expliquant pourquoi et comment OVH a fait ce choix pour sa plateforme.
