---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Let’s dive into Kubernetes operator creation"
event: "DevOps Barcelona"
event_url: ""
date: "2023-11-09"
location: "Barcelona, Spain"
lat: 41.385064
lng: 2.173404
language: "en"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2023/2023-11-09_DevOps-Barcelona_lets-dive-into-kubernetes-operator-creation.pdf"
slides_url: "https://noti.st/lostinbrittany/vzc0uy/lets-dive-into-kubernetes-operator-creation"
video_url: "https://www.youtube.com/watch?v=3tYhXui8ESs"
talk_tags: []

---

Operators are extensions to Kubernetes that simplify application install and management by leveraging on Kubernetes Custom Resources and Controllers. The Kubernetes Operator pattern tries to emulate the role of a human operator, who uses their deep knowledge of the application to install, operate and debug it. The Kubernetes Operators search to automate these tasks and facilitate the whole application life cycle.

Last year at DevOps Barcelona, Aurélie and Horacio showed how to build a Terraform provider, using as example an external API and lots of Gophers. This year they would like to take a similar approach to show you, step by step, how to create a Kubernetes Operator. By taking again as base the Gopher REST API, they will explain the basics of an operator creation, give some pointers on how to do a simple yet efficient operator architecture that manages not only Kubernetes objects but also resources outside Kubernetes, and show you the code and the provider in action.

Will they succeed in this new mission?
