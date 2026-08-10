---
layout: layouts/post.webc
title: "Why I'm Learning Rust in 2026"
description: "Not to type it faster. To tell whether the code an agent just wrote is safe."
date: '2026-02-24'
permalink: '/en/why-im-learning-rust-in-2026/'
tags: ['posts']
locale: 'en'
social: 'posts/2026-02-24-why-im-learning-rust-in-2026-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-02-24-why-im-learning-rust-in-2026.png" :alt="title"></img>

I learned just enough Rust a couple of years ago to nod along in conversations, read some code, feel vaguely guilty, and move on. I never actually used it.

And now, in 2026, I'm coming back to it on purpose.

Which sounds a bit counter-intuitive, because we're in the era where code assistants can generate a plausible implementation of almost anything in seconds. If the machine can write Rust for you, why spend time learning Rust?

Partly because Rust is everywhere around me.

At [Clever Cloud](https://clever.cloud), where I work, Rust is one of the main languages of the platform. A large part of our infrastructure, our internal tooling, and our core systems are written in Rust. It's not a side experiment, it's how things get built here. When I look at PRs, architecture discussions, or production incidents, Rust is what I'm reading. Being able to follow that code, question it, and have informed opinions about it isn't optional for me, it's part of doing my job well.

But the deeper reason is that the job itself has shifted.

## Assistants didn't kill language learning, they moved the goalposts

Five years ago, learning a language meant: "I want to be productive writing code in it." Syntax, patterns, libraries, muscle memory.

In 2026, with agents in the loop, I'm learning Rust for a different reason:

**I want to be able to lead the code even when I'm not the one typing it.**

When an assistant produces 200 lines in a blink, the bottleneck is no longer "how fast can I write it?" It's:

- can I tell if this is correct?
- can I tell if this is safe?
- can I tell if this will bite us in production?
- can I steer the implementation before it becomes a maintenance story?

Rust is a language where those questions matter a lot, because Rust's value is not "pretty syntax". It's guarantees, and the cost of misunderstanding those guarantees is real.

## Rust is a great amplifier... which means mistakes get amplified too

Rust is famous for catching mistakes at compile time. That's true.

But it's also very good at giving you a false sense of security if you only look at the fact that it compiles.

An agent can generate Rust that compiles while still being:

- **allocation-happy** (clone everywhere)
- **over-engineered** (lifetimes and generic frameworks for no reason)
- **brittle** (bad error semantics, no context)
- **subtly wrong under concurrency** (blocking the async runtime, cancellation hazards, unnecessary shared state)
- **"safe" in the Rust sense, but not safe in the engineering sense** (dependency choices, feature flags, MSRV drift)

So yes: assistants make it easier to produce Rust code.

They also make it easier to ship Rust code you don't actually understand.

## The new core skill is not writing code. It's reviewing code.

My day job already pushes me in that direction.

When you're in a leadership/DevRel/architecture-ish role, you're constantly doing some variant of:

- reading code you didn't write
- reviewing PRs
- diagnosing behavior across systems
- making calls about tooling and dependencies
- explaining why something is a good idea or a bad one

Assistants just crank that dynamic up to 11.

If an agent can produce four alternative implementations, my value isn't "I can type faster." My value is: **I can pick the right one and explain why.**

And to do that, I need competence, not vibes.

## "But can't I just ask the agent to explain?"

Sure. I do that all the time.

But there's a trap: if you don't already have a mental model, explanations feel convincing even when they're wrong or incomplete.

Rust has a lot of "looks fine" code that is actually a pile of tradeoffs:

- Do we own the string or borrow it?
- Are we returning references that can't possibly live long enough?
- Is this error type useful to callers or just noise?
- Are we pulling in a whole dependency tree for one helper?
- Is this async because it's needed, or because async looks modern?

If you can't read Rust, you can't reliably evaluate the explanation either.

That's not an anti-AI stance. It's just acknowledging the new reality: the agent is a multiplier, and multipliers amplify your judgment... or your lack of it.

## Learning a language in 2026 is about learning its failure modes

So this is my real goal with Rust:

- learn the patterns that appear in real codebases (clap, serde, tokio, axum, error handling idioms)
- learn the failure modes agents fall into (clone soup, unwraps, generic overreach, accidental blocking, dependency sprawl)
- build a set of review reflexes and "pushback phrases" I can reuse
- become fluent enough to lead agents effectively instead of just accepting their output

That's why my learning plan is project-driven and review-driven. I'm not trying to "become a Rustacean." I'm trying to become someone who can look at Rust code and say:

- "Yes, this is good. Ship it."
- "No, this is Phase 3 complexity for a Phase 1 problem."
- "This blocks the executor."
- "This dependency is not worth it."
- "This error story will be a nightmare in six months."

## The punchline: learning Rust is how I stay accountable

There's also a simpler, more personal reason.

When I ship something, I want to be accountable for it.

If a system breaks in production, "the assistant wrote it" is not an answer. The responsibility doesn't move.

So learning Rust in 2026 is, for me, a way to keep the contract honest:

- I can use agents,
- I can move faster,
- but I still understand what we're building.

That's not nostalgic. It's pragmatic.

## What I'm going to do about it

I'm documenting the journey as I go, because this is the part that feels worth sharing:

- what I build
- what the compiler taught me
- what the agent got wrong
- the review rules I extracted
- the "cheap correctness first" ladder I use to avoid over-engineering

The promise isn't "you should all learn Rust."

The promise is: **if you work with code assistants, you should still learn enough of the languages you ship to keep your judgment sharp.**

Rust just happens to be a very good language for making that lesson concrete.
