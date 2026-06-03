---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Serveurs MCP : bonnes pratiques, choix de conception et leurs conséquences"
event: "Devoxx France"
event_url: "https://m.devoxx.com/events/devoxxfr2026/talks/22577/serveurs-mcp-bonnes-pratiques-choix-de-conception-et-leurs-consquences"
date: "2026-04-24"
location: "Paris, France"
lat: 48.8566
lng: 2.3522
language: "fr"
slides_pdf: "/slides/2026/2026-04-24_Devoxx-France_MCP-Servers-Beyond-101-Good-Practices-Design-Choices-and-Their-Consequences.pdf"
slides_url: "https://noti.st/lostinbrittany/2igHkB/serveurs-mcp-bonnes-pratiques-choix-de-conception-et-leurs-consequences"
video_url: "https://www.youtube.com/watch?v=NNJC-zgsLTA"
talk_tags:
  - MCP
  - AI
  - Best Practices

---

This three-hour deep dive explores the Model Context Protocol (MCP) beyond introductory concepts. The presentation analyzes real design decisions through the lens of the RAGmonsters project, examining what succeeds and what fails in production environments.

The talk progresses through four maturity levels: foundational functionality, proper structuring, scaling considerations, and governance requirements. Key topics include distinguishing between generic and domain-specific servers, security implications of design choices, token efficiency, testing strategies, and handling autonomous agent behavior.

Drawing parallels to early REST API adoption, the presentation emphasizes that "MCP servers are APIs" and should be designed accordingly. Particular attention addresses the security risks of LLM-powered agents, including prompt injection vulnerabilities and the "lethal trifecta" of private data access, untrusted input, and exfiltration capabilities.
