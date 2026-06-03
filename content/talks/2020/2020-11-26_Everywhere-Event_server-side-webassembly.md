---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Server-side WebAssembly"
event: "Everywhere Event"
event_url: ""
date: "2020-11-26"
location: "Virtual"
language: "en"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2020/2020-11-26_Everywhere-Event_server-side-webassembly.pdf"
slides_url: "https://noti.st/lostinbrittany/8cxZEj/server-side-webassembly"
video_url: ""
talk_tags: []

---

If you follow the trends in web development, you have surely heard of WebAssembly (Wasm). Wasm is supported by all modern browsers, and its growing track of success stories seem to confirm that it will change the web development landscape in the coming years.

But way, this is a DevOps conference, why should you be interested in a web development tool? Because Wasm is not only for web developers, it’s quickly becoming a serious player as a server-side technology.

Wasm is a binary instruction format for a stack-based virtual machine. And Wasm execution environments can include not only browsers but minimal shells, mobiles, desktops and IoT devices.

Tools like Wasmer (a server-side WASM runtime) and WASI (the WebAssembly system interface) allows to run WebAssembly in a fast, scalable, secure way across all machines. It’s potential is so high that Solomon Hykes, co-founder of Docker, has said that if WASM+WASI existed in 2008, they wouldn’t have needed to build Docker.

In this talk we will take a look at the WASM state in 2020, from a server-side point of view. After a brief introduction to WebAssembly, we will see how Wasmer and WASI allow you to use WASM on any machine, and we will discuss real-life exemples of how WebAssembly is a true alternative as a server-side platform.

Some of the use-cases we will see include a FaaS platform, a server-side platform to compute untrusted code, and some other examples of Wasm replacing traditional virtual machines, containers, and processes.
