---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "MCP Servers Beyond 101: Good Practices, Design Choices and Their Consequences"
event: "DevDays Europe"
event_url: "https://events.pinetool.ai/3574/#sessions/114843"
date: "2026-05-21"
location: "Vilnius, Lithuania"
lat: 54.6872
lng: 25.2797
language: "en"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2026/2026-05-21_DevDays-Europe_MCP-Servers-Beyond-101.pdf"
slides_url: "https://noti.st/lostinbrittany/THMZuk/mcp-servers-beyond-101-good-practices-design-choices-and-their-consequences"
video_url: "https://www.youtube.com/watch?v=b4mp6V_wyKE"
talk_tags:
  - MCP
  - AI
  - Best Practices

---

This presentation explores advanced approaches to designing Model Context Protocol servers beyond foundational concepts. The speaker draws from real-world experiences to demonstrate how architectural choices impact security, performance, and user experience.

The talk follows a maturity framework across four levels: ensuring functionality, applying proper design discipline, enabling multi-server ecosystems, and implementing organizational governance. Key themes include treating MCP servers as deliberate API products, validating all inputs and outputs, authenticating callers, and preventing unintended agent behavior.

The presentation uses RAGmonsters—a fictional monster database—as a concrete example. It contrasts a generic PostgreSQL approach (which resulted in unwanted database alterations) against a purpose-built solution with typed tools, resources, prompts, and validation. Additional topics cover composition patterns, discovery mechanisms, gateways, contracts, and audit requirements for production deployments.
