---
layout: layouts/post.webc
title: 'The Developer’s Journey'
date: '2025-11-17'
permalink: '/en/developers-journey/'
tags: ['posts']
locale: 'en'
canonical_url: ''
---

### Growing Up with Smarter Tools

_Rewriting the Role: Developers in the Age of LLMs – Part IV_

![The Developer’s Journey: Growing Up with Smarter Tools](/img/posts/rewriting-the-role/developers-journey.jpg)


In the previous post, we explored how coding itself is changing, from syntax to intent, from typing to conducting.
Now let’s talk about **how we, as developers, grow** in that new environment.
Because while tools evolve fast, careers, mentorship, and professional growth still depend on something slower and deeper: learning to understand complexity.

---

## The vanishing entry-level

Every developer's story once started the same way: writing the boring bits.

I learned programming in the 90s with Pascal. In 1997, I taught myself Java, and my first programming job was an internship at a bank. What did I do? I migrated hundreds of AWT components to Swing. Button by button, panel by panel. It was tedious, repetitive, and absolutely fundamental to understanding how GUI frameworks worked.

Years later, while working on my PhD during the day, I learned web programming at night. I built basic CRUD sites in PHP for two campus associations: user registration, event listings, simple admin panels. Nothing glamorous. But every form I validated, every SQL query I wrote, every session I managed taught me how web applications actually worked.

That kind of work (the boring, repetitive scaffolding) was how we learned.

Today, a junior developer can prompt an LLM: "Migrate these AWT components to Swing" or "Build a PHP CRUD system with user authentication and event management." The code appears in seconds. That's undeniable progress. But it creates a paradox:

**If juniors skip the "easy" problems, where do they learn to reason about systems?**

![The vanishing entry-level](/img/posts/rewriting-the-role/vanishing-entry-level.jpg)

When I migrated AWT to Swing, I learned about event models, component lifecycles, and layout managers—not because I was brilliant, but because I had to touch each one manually. When I built those PHP CRUD apps, I learned about state management, validation, and security. Not from reading about it, but from making every mistake myself first.
Repetition wasn't just practice. It was how the patterns got into your bones.

Today's juniors don't get that. They get working code without the struggle that builds understanding. And the industry is starting to notice: entry-level positions are shrinking, not because we don't need developers, but because we don't know how to evaluate or onboard someone who's never built the basics from scratch.

The work that used to prove you could code (the boring, grinding, character-building work) has been automated away. And we haven't figured out what replaces it as a rite of passage.

Some will argue: "Good! Why should juniors waste time on boring work when AI can do it?" 

Fair point. But there's a difference between automating tedious work and skipping the learning entirely. When I migrated AWT components, the tedium was the tuition. The repetition was what made the patterns stick.

The question isn't whether we should use AI for CRUD apps—of course we should. The question is: if juniors don't build the basics, how do they learn to evaluate when AI gets them wrong?

---

## Learning through collaboration, not repetition

A junior developer I mentored recently asked an LLM to build a user registration endpoint. The code looked clean—proper error handling, password hashing, email validation.

Then I asked: "What happens if two users register with the same email at exactly the same time?"

Silence.

"What if the database connection drops after you've sent the confirmation email?"

More silence.

The code worked. But he hadn't thought about race conditions, idempotency, or failure modes. The LLM gave him working code, but it didn't teach him to ask the hard questions.

That's the new apprenticeship: not writing code from scratch, but learning to interrogate generated code with the skepticism it deserves.

Working with an LLM becomes an education in itself:
* You see code appear and must verify it's correct
* You debug logic you didn't design
* You test edge cases the model didn't consider
* You learn to articulate requirements precisely

The cycle (speculate, generate, verify, refine) becomes the training ground.

We used to learn by building.
Now we learn by **reviewing, reasoning, and refining**.

---

## Mentorship as sense-making

If AI gives juniors superpowers, seniors must become **sense-makers**.

Here's what that looks like in practice:

Instead of: "Use a Set instead of an Array here".
A senior now says: "Let's think about lookup performance. With an Array, checking if an item exists is O(n). With a Set, it's O(1). When you have 10,000 users, that difference matters. The LLM used an Array because it's simpler, but it didn't consider scale".

Instead of: "This authentication bug is in line 47".
A senior now says: "When auth fails, let's trace the flow. Token gets validated here, user lookup happens here, permissions check here. Which step is failing? Let's add logging to find out. This is how you debug systems you don't fully understand".

The role shifts from producing code to explaining *why things work* and *when they don't*.


![Mentorship as sense-making](/img/posts/rewriting-the-role/mentorship.jpg)

A good senior today:
* Narrates their reasoning out loud
* Reviews not just code, but thought process
* Turns "I'll fix it" into "Let's see why it broke"
* Shares mental models, not snippets

It's the same spirit of mentorship, just at a higher altitude.
Juniors bring speed; seniors bring understanding.
The learning loop becomes mutual.

---

## Redefining seniority

Seniority used to mean years of syntax mastery, the person who knew the dark corners of the framework.
Now, frameworks document themselves, and AI can explain them better than we can.

So what makes a senior developer in this new world?

* **System sense:** seeing how parts connect across teams, services, and time.
* **Human empathy:** understanding users, teammates, and the organizational context.
* **Ethical judgment:** knowing when *not* to automate, when to slow down, when to ask “should we?”
* **Teaching mindset:** because explaining is the last mile of mastery.

> “Seniority is shifting from knowing the answers to knowing which questions matter.”

That shift may be the healthiest thing that’s happened to our field in years.

---

## The new apprenticeship

The next generation won't learn by rebuilding the same examples we did.
They'll learn by working *with* intelligent systems, debugging them, challenging them, extending them.

What does that look like in practice?

It means juniors should:
* Generate code, then manually rewrite it to understand the choices made
* Break working AI code deliberately to see what fails and why
* Compare multiple AI solutions to the same problem
* Build projects where AI handles the scaffolding while they focus on architecture

And it means seniors should:
* Create challenges that can't be solved by prompting alone
* Design code reviews that focus on "why" over "what"
* Build environments where failure is safe and instructive

Our job is to design those learning environments, to make sure curiosity still meets friction.

Because the craft of software has never been about memorization.
It's about **understanding complexity and staying curious inside it**.

---

## Three patterns for rethinking learning

At BDX I/O, I proposed three concrete approaches for onboarding developers in the AI age:

![Three patterns for rethinking learning](/img/posts/rewriting-the-role/rethinking-learning.jpg)

### Tri-programming: Junior, AI, and Senior

Pair programming used to mean two humans. Now it means three participants: a junior asking questions, an AI generating solutions, and a senior guiding both.

The junior articulates the problem. The AI proposes code. The senior teaches critical evaluation: "Why did the LLM choose this approach? What's it optimizing for? What did it miss?"

This isn't slower than traditional pairing, it's different. The junior learns to prompt clearly, read critically, and think architecturally. The AI provides instant implementation. The senior focuses on the why, not the how.

### Teaching the teachable: Prompt crafting, critical reading, debugging AI output

The skills that matter now aren't the ones we spent years mastering.

Juniors need to learn:
* **Prompt crafting**: How to describe intent precisely enough that AI understands constraints, edge cases, and trade-offs
* **Critical code reading**: How to spot when elegant code embodies the wrong model (like our encryption-not-hashing disaster from Part III)
* **Debugging AI output**: How to trace through generated logic without the mental model that comes from writing it yourself

These aren't "soft skills." They're the new fundamentals.

### Guided co-creation: New onboarding pattern instead of rote implementation

The old onboarding: "Build a todo app. Then build auth. Then build a blog".
The new onboarding: "Use AI to scaffold a blog with auth. Now explain every decision it made. Now break it deliberately. Now fix it differently".

The goal shifts from proving you can implement to proving you can **evaluate, extend, and reason about systems you didn't build**.

Juniors generate their first PR in days, not weeks. But they spend those weeks understanding why it works, when it fails, and how to improve it.

This is guided co-creation: AI handles mechanical complexity while humans focus on conceptual depth.

These patterns won't work everywhere, but they point toward a future where we're intentional about what juniors learn and how.

---

## The uncomfortable truth

Let's be honest: this transition isn't easy for everyone.

When entry-level work vanishes, the bar for "junior developer" rises. Companies expect new hires to review generated code, debug complex systems, and make architectural judgments; skills that used to take years to develop.

The paradox: tools that should democratize programming may actually raise the barrier to entry. It's easier to *generate* code, but harder to prove you *understand* it.

This isn't inevitable, but it's a risk we need to take seriously. If we don't deliberately create learning paths for the next generation, we'll end up with a bimodal distribution: seniors who learned the old way, and a missing generation who couldn't find footing in the new one.

The solution isn't to slow down AI progress. It's to rethink how we onboard, mentor, and evaluate junior developers.

---

## The journey continues

Becoming a developer has always been a journey from imitation to intention.
That hasn't changed.
Only the tools have.

We still grow the same way we always did:
* By making things
* By breaking them
* By understanding what happens next

The difference now? That understanding can't come from repetition alone. It has to come from interrogation: asking why the generated code works, when it might fail, and what assumptions it embodies.

The path to mastery still starts with curiosity.
It just runs through smarter terrain.

And for those of us who've walked the old path, our responsibility is clear: we light the way forward, not by guarding what we learned, but by teaching how to learn when the machine knows the syntax but not the meaning.

![The journey continues](/img/posts/rewriting-the-role/junior-to-senior-map.jpg)

---

### ✳️ Coming Next

In the next post, we’ll step outside the profession to look at **how we teach and learn programming itself**.
What happens when every student can ask an LLM for answers?
How should educators adapt?
And what should we teach when the machine already knows the syntax?

