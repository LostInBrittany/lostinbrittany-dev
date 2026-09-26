---
layout: layouts/talk.webc
tags:
  - talks
locale: "en"

title: "Wrap, Reshape, or Redesign: Retrofitting Your APIs for a World of Agents"
event: "JUG Summer Camp"
event_url: "https://www.jugsummercamp.org/edition/17/presentations/cmnfz8xii018o01pfqwihs54o"
date: "2026-09-04"
location: "La Rochelle, France"
lat: 46.160329
lng: -1.151139
language: "fr"
slides_pdf: "https://lostinbrittany-slidedecks.cellar-c2.services.clever-cloud.com/2026/2026-09-04_JUG-Summer-Camp_Wrap-Reshape-or-Redesign-Retrofitting-Your-APIs-for-a-World-of-Agents.pdf"
slides_url: "https://noti.st/lostinbrittany/PKy0W6/wrap-reshape-or-redesign-retrofitting-your-apis-for-a-world-of-agents"
video_url: ""
talk_tags:
  - AI
  - MCP
  - API Design
  - Agents

---

Most APIs we use today were designed for human developers. That worked because humans compensate: they read docs, infer conventions, recognize dangerous operations, and fill in what the interface never made explicit.

Now those same APIs have a second consumer: LLM-based agents, copilots, and agentic workflows. This new consumer does not compensate reliably. It takes descriptions literally, chooses wrong actions confidently, and cannot infer the operational boundaries your API never stated.

The naive response is to wrap existing APIs with tool descriptions and call it done. In practice, some capabilities can be wrapped as-is, some must be reshaped into narrower intent-level tools, and some expose deeper design flaws that need real redesign.

In this talk, I'll share a practical framework for retrofitting existing APIs and platform capabilities for agent consumption, based on real platform examples. We'll look at concrete before-and-after cases, discuss the tradeoffs of each strategy, and see why designing for agents often improves the platform for humans too.
