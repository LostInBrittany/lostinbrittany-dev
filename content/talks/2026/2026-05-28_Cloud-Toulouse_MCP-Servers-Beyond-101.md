---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "MCP Servers Beyond 101: Good Practices, Design Choices and Their Consequences"
event: "Cloud Toulouse"
event_url: "https://cloudtoulouse.com/programme/"
date: "2026-05-28"
location: "Toulouse, France"
language: "fr"
slides_pdf: "/slides/2026/2026-05-28_Cloud-Toulouse_MCP-Servers-Beyond-101.pdf"
slides_url: "https://noti.st/lostinbrittany/5b5Nn9/mcp-servers-beyond-101-good-practices-design-choices-and-their-consequences"
video_url: ""
talk_tags:
  - MCP
  - AI
  - Best Practices

---

The presentation explores practical design patterns for building robust Model Context Protocol servers. Rather than merely covering foundational concepts, the talk examines real-world tradeoffs: choosing between generic and specialized approaches, balancing flexibility against safety, and understanding how architectural decisions impact security and performance.

Drawing from actual project experiences, the speaker demonstrates how LLMs acting as autonomous agents create higher-stakes scenarios than traditional API consumers. The content maps lessons from REST API evolution onto the MCP landscape, structured around four maturity levels: functioning servers, well-shaped implementations, scalable multi-server systems, and governance frameworks. Topics include input validation, authentication strategies, discovery mechanisms, and accountability measures necessary when agents execute consequential operations.
