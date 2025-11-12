---
layout: layouts/post.webc
title: 'Co-Authoring with the Machine'
date: '2025-11-12'
permalink: '/en/co-authoring-with-the-machine/'
tags: ['posts']
locale: 'en'
canonical_url: ''
---

### The Developer’s New Workflow in the Age of AI

_Rewriting the Role: Developers in the Age of LLMs – Part III_


![Co-Authoring with the Machine: The Developer’s New Workflow in the Age of AI](/img/posts/rewriting-the-role/developers-new-workflow.jpg)

In the first two parts of this series, we looked back at the long tradition of technological panic in software development, and how each wave of automation has shifted, not erased, the craft.
Then we explored how the fear of “deskilling” misses the point: every time tools get smarter, developers reskill.

Now it’s time to get practical.
Let’s talk about **what’s actually changing** in the way we work.

---

## From Syntax Recall to Intent Articulation

Last week, I needed a MongoDB aggregation pipeline.

The old way would have meant: opening documentation, scrolling through `$lookup` examples, trying to remember which stage goes where, copying something from Stack Overflow, debugging syntax errors until it finally worked.

Instead, I described what I wanted: "Join users with their orders, filter the last 30 days, group by product category, calculate average order value."

The LLM wrote the pipeline in seconds. I spent my time on what actually mattered: verifying the logic, testing edge cases, ensuring it matched my intent.

Same result, different process. The work didn't disappear—it shifted from **syntax recall to intent articulation**.

For most of programming history, being a good developer meant remembering things: syntax, APIs, frameworks, the right configuration flag for that obscure library.

But today, the IDE remembers that for us.

![From Syntax Recall to Intent Articulation](/img/posts/rewriting-the-role/from-syntax-to-intent.jpg)

AI assistants autocomplete not just function names, but entire design patterns. They write tests, refactor methods, even scaffold projects.
The developer’s challenge shifts from **recall** to **articulation**, from *how* to write something to *what* we mean to create.

We’ve moved from typing to thinking aloud.
From *coding for the machine* to *negotiating with it*.

> “The bottleneck has moved from syntax to semantics.”

---

## From Implementation to Orchestration

In modern development, our job is rarely to write everything from scratch.
It's to **assemble**, **connect**, and **guide** APIs, libraries, frameworks, services.
The LLM becomes one more component in that system.

We're moving from *implementation* to *orchestration*.

Think about what happens when you build a feature today:

* You don't write an authentication system; you configure Auth0 or Cognito.  
* You don't implement payment processing; you integrate Stripe's API.  
* You don't build a search engine; you connect to Elasticsearch.  
* You don't hand-code email templates; you use SendGrid or Postmark.

And now, you don't write boilerplate CRUD operations—you prompt an LLM and review the output.

![From Implementation to Orchestration](/img/posts/rewriting-the-role/from-implementation-to-orchestration.jpg)

If you used to be a builder, now you're a conductor.
You wave the baton, and the orchestra (your LLM, your CI/CD pipeline, your cloud services) plays the instruments.

A conductor doesn't play every note, but they need to understand music theory, read the score, and know when the violins are off-key. They ensure harmony, timing, and intent.

That's what we're learning to do with intelligent tools: not write every line, but understand every layer.

The orchestrator's skill isn't in playing instruments; it's in knowing which instrument to use, when to bring it in, and how all the parts fit together. It's understanding the dependencies between services, the failure modes of APIs, and the latency characteristics of your data layer.

When something breaks, the orchestrator doesn't just see error logs; they see the shape of the system and know which component failed based on the symptom.

---

## From Writing Code to Curating Systems

Developers used to own every line they wrote.
Now we're **curators** of codebases that mix human and machine contributions: generated, edited, regenerated, merged.

That doesn't make the job smaller; it makes it broader.

### Track *why* code exists, not just *what* it does

Comments used to explain *how* complex code worked. Now they need to explain *why* it exists at all. 

When an LLM generates a function, it can't tell you: "I chose this approach because the API rate-limits at 100 requests per minute" or "This uses polling instead of webhooks because the third-party service is unreliable."

That context lives in your head. If you don't document it, six months later you'll be staring at AI-generated code wondering why it's built this way... and so will your teammates.

### Version prompts and context as real artifacts

Here's something that sounds strange but is becoming necessary: your Git repository might soon need to track not just code, but the prompts that created it.

When a generated function breaks, you'll need to know what you asked for. Was it "write an authentication handler" or "write an authentication handler that supports SSO, handles token refresh, and rate-limits by IP address"? The specificity of your prompt shaped the code's behavior.

Prompts are becoming part of your technical documentation.

### Maintain human understanding across machine contributions

This is the hardest part: keeping your mental model intact when code appears faster than you can internalize it.

I've seen teams accept a 500-line LLM-generated module because it passed tests. Three months later, when bugs appeared, nobody understood how it worked. The original prompt was lost. The developer who reviewed it had moved on.

Curation means you don't merge code you don't understand, even if it works. Especially if it works.

![From Writing Code to Curating Systems](/img/posts/rewriting-the-role/from-writing-to-curating.jpg)

Curation is care.
It's reading critically, pruning excess, and preserving meaning across versions.
It's how we keep ownership in a world where authorship is shared.

---

## The Pitfalls: Overtrust, Hallucination, Loss of Mental Model

The danger isn't that the model writes code.

**It's that we stop understanding what we build.**

Let me show you what I mean.

A team needed to implement user authentication. They prompted an LLM: "Create a secure authentication system with password storage, login, and session management."

The model generated 400 lines of code. It was beautiful:

* Clean separation of concerns: controllers, services, repositories
* Proper error handling with typed exceptions  
* Rate limiting on login attempts
* Password complexity validation
* Session management with expiry
* Unit tests covering all the main flows

The senior developer reviewed it. The structure was solid. The patterns were familiar. The tests passed. He approved the PR.

Three months later, during a routine security audit, they discovered the passwords were stored using AES encryption, not one-way hashing. Every user password in the database could be decrypted with the right key.

They had to force-reset every user account and notify them of a security vulnerability.

![The Pitfalls: Overtrust, Hallucination, Loss of Mental Model](/img/posts/rewriting-the-role/pitfalls.jpg)

**What went wrong?**

The code *worked*. Users could register, log in, log out. Sessions expired correctly. Rate limiting prevented brute force attacks. Every test passed.

But the *security model* was fundamentally broken.

The senior developer had reviewed the *syntax*: clean code, good patterns, proper structure. He hadn't reviewed the *semantics*: is this cryptographically sound? Does this follow security best practices? Is this actually protecting user data?

He'd verified the code ran. He hadn't verified it was *correct*.

This is the core danger of AI-generated code: **overtrust through plausibility.**

When code is well-formatted and follows conventions, our brains tell us it's correct. When tests pass, we assume completeness. When an LLM generates something that *looks* like what we'd write, we stop interrogating whether it embodies the right model.

### The three failure modes

**Overtrust:** We assume generated code is correct because it's professionally structured. But structure isn't correctness. The authentication code *looked* secure. It just wasn't.

**Hallucination:** LLMs generate *confident* fictions. They don't flag uncertainty. The model "knew" about password hashing (it's in its training data), but it confidently generated encryption instead. Why? Because both are cryptographic operations, both protect data, and the model doesn't understand the security implications that make one correct and the other catastrophic.

**Loss of Mental Model:** The deepest danger. When you write authentication yourself, you research it. You read about rainbow tables, timing attacks, bcrypt work factors. You build a mental model of *why* one-way hashing matters. When you review generated code, you often skip that learning. You verify it runs, but you never internalize the security model. So you can't spot when it's wrong.

Understanding is invisible infrastructure. Once it's gone, so is control.

We need to stay skeptical, test-driven, and deeply curious.
Not because generated code is bad, but because understanding is our responsibility.
Comprehension, not generation, remains the real mark of craftsmanship.


---

## Co-Authoring, Not Delegating

Coding with an LLM is like pair programming with a colleague who’s brilliant, fast, and occasionally delusional.
You still have to:

* Ask clearly.
* Review ruthlessly.
* Teach continuously.

![Co-Authoring, Not Delegating](/img/posts/rewriting-the-role/co-authoring-with-llm.jpg)

The best developers don’t treat AI as an oracle.
They treat it as a **junior teammate**: fast, creative, but needing direction.

That’s what *co-authoring* really means:
You stay inside the feedback loop of design, generation, and review.
You don’t give away control; you share creation.

---

## The Craft Remains

We used to say we *wrote* software.
Now, we’re *conducting* it, orchestrating systems of people, machines, and models.
The tools play the instruments.
But we still write the score.

Because even when machines can code, they still can’t care.
And caring (about correctness, elegance, and meaning) is what defines a developer.

---

### Coming Next

In the next post, we’ll look at **how this shift is transforming the developer journey itself**, from how juniors learn, to what seniority means when experience isn’t measured in syntax, but in judgment.


