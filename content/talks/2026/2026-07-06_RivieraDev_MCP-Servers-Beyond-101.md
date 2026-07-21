---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "MCP Servers Beyond 101: Good Practices, Design Choices and Their Consequences"
event: "RivieraDev"
event_url: "https://rivieradev.com/session/974"
date: "2026-07-06"
location: "Sophia Antipolis, France"
lat: 43.6155
lng: 7.0722
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2026/2026-07-06_RivieraDev_MCP-Servers-Beyond-101.pdf"
slides_url: "https://noti.st/lostinbrittany/qJGauY/plongee-dans-la-conception-de-serveurs-mcp-bonnes-pratiques-choix-de-conception-et-leurs-consequences"
video_url: ""
talk_tags:
  - MCP
  - AI
  - Best Practices

---

The Model Context Protocol has become the connection point between large language models and the tools, APIs, and data they use. But running an MCP server is only the starting point. The real challenges emerge from design decisions: generic or domain-specific servers, open or controlled access, flexibility or security.

This deep dive goes beyond introductory material. Drawing from real-world projects, it examines what works, what fails, and why. Through in-depth demonstrations, architectural discussions, and concrete examples, we explore how these choices directly affect developer experience, performance, token consumption, and security.

The talk draws parallels with the early days of REST API development and the mistakes teams made then, while highlighting a critical difference today: LLMs and agents no longer merely observe systems, they act upon them. Attendees leave with a clear mental framework and practical best practices for designing MCP servers that are safer, more efficient, and truly production-ready.
