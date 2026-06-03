---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "MCP Servers: Good Practices, Design Choices and Consequences"
event: "SnowCamp"
event_url: "https://snowcamp.io/"
date: "2026-01-16"
location: "Grenoble, France"
lat: 45.1885
lng: 5.7245
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2026/2026-01-16_SnowCamp_-_MCP Servers_Good-Practices-Design-Choices-and-Consequences.pdf"
slides_url: "https://noti.st/lostinbrittany/puylun/mcp-servers-good-practices-design-choices-and-consequences"
video_url: ""
talk_tags:
  - MCP
  - AI
  - Best Practices

---

Large Language Models (LLMs) have become the core of modern agents, powering tools like OpenAI Codex, Claude Code, and Copilot Workspace. But left unguided, they still behave like a brilliant but distracted intern. That's where MCP (Model Context Protocol) servers come in—providing the structured, vendor-neutral way for LLMs and agents to interact with your data, tools, and APIs.

In this session, we'll explore the two main flavors of MCP servers: generic and domain-specific. Generic MCP servers are like open highways—versatile but unpredictable—enabling broad exploration of data and systems. Domain-specific MCP servers, on the other hand, are like guided tours—optimized, secure, and efficient, but less flexible.

We'll dig into real-world examples, from using a PostgreSQL MCP server for open-ended queries to building a domain-specific server tailored for RAGmonsters. Along the way, we'll examine how these choices affect performance, security, governance, and developer experience in the era of autonomous agents.

This isn't just theory. You'll see the practical trade-offs of each approach, with concrete guidance on how to build (or choose) the right server for your next project. Whether your goal is a versatile agent with wide capabilities or a specialized assistant with guardrails, this talk will show you how to make MCP servers work smarter—without losing control.
