---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Let’s dive into Terraform provider creation"
event: "DevOps Barcelona"
event_url: ""
date: "2022-11-04"
location: "Barcelona, Spain"
lat: 41.385064
lng: 2.173404
language: "en"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2022/2022-11-04_DevOps-Barcelona_lets-dive-into-terraform-provider-creation.pdf"
slides_url: "https://noti.st/lostinbrittany/LjJRXw/lets-dive-into-terraform-provider-creation"
video_url: "https://www.youtube.com/watch?v=j-Qj6xEKF1g"
talk_tags: []

---

Currently when we think of Infrastructure as Code (IaC), one tool seems to stand out and has become a de-facto standard: Terraform.

With Terraform you can easily build, edit and version your whole infrastructure by using Terraform builtin providers or custom ones.

But sometimes there is no provider for the infrastructure you intend to use, not even the lone no-star repository in a lost corner of the internet, only a custom REST API. What can you do? Going back to manual operations? Create your own scripts?

In this talk Horacio and Aurélie will show you, step by step, how to go from an infrastructure API to a fully functional yet light Terraform provider. By taking as base a REST API, they will explain the basics of provider creation, give some pointers on how to do a simple yet efficient provider architecture and show you the code and the provider in action.

Will they succeed in this new mission?
