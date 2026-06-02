---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Hands-on MCP Servers Beyond 101: Good Practices, Design Choices and Their Consequences"
event: "DevDays Europe"
event_url: "https://events.pinetool.ai/3574/#sessions/114845"
date: "2026-05-19"
location: "Vilnius, Lithuania"
language: "en"
slides_pdf: "/slides/2026/2026-05-19_DevDays-Europe_Hands-on-MCP-Servers-Beyond-101.pdf"
slides_url: "https://noti.st/lostinbrittany/qxdm2L/hands-on-mcp-servers-beyond-101-good-practices-design-choices-and-their-consequences"
video_url: ""
talk_tags:
  - MCP
  - AI
  - Best Practices

---

This six-hour hands-on workshop explores practical MCP (Model Context Protocol) server design through building and experimenting with real code. Rather than focusing on basic functionality, the session emphasizes safety, efficiency, and reliability when exposing capabilities to AI agents.

Participants learn how design choices impact results, covering authentication, scope definition, error handling, and information exposure. The workshop progresses through a maturity framework spanning four levels: ensuring servers function correctly, shaping them with proper API design, scaling them across multiple services, and governing them for production safety.

Key topics include validating inputs rigorously, sanitizing outputs before returning to LLMs, implementing tool-level authorization, testing how agents actually use tools, managing blast radius in autonomous systems, and establishing audit trails for accountability.

By completion, attendees gain both working MCP servers and practical design patterns that reduce token waste while improving agent reliability and security.
