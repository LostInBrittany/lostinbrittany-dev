---
layout: layouts/post.webc
title: 'When Tools Learn, So Must We'
date: '2025-11-10'
permalink: '/en/when-tools-learn/'
tags: ['posts']
locale: 'en'
canonical_url: ''
thumbnail: 'posts/rewriting-the-role/when-tools-learn.jpg'
---

### Deskilling or Reskilling in the Age of AI

_Rewriting the Role: Developers in the Age of LLMs – Part II_

![Programmers Are Always Doomed... Until They’re Not](/img/posts/rewriting-the-role/when-tools-learn.jpg)

In the first part of this series, I looked back at the many times developers were declared obsolete.
From Fortran to Java, from punched cards to low-code tools, every new abstraction seemed ready to kill programming, and every time we just moved one level up.

But this new wave feels different, doesn’t it?

Large Language Models can write *real* code.
Not snippets, not templates. Entire functions, tests, even PRs that pass CI.
When you see that, it’s hard not to wonder: *if the machine can do this, what’s left for us?*

That question usually hides another one:

> Are we being **deskilled**?

---

## The deskilling fear

The word *deskilling* comes from labor economics.
It describes what happens when machines or processes remove the need for workers to use judgment and expertise, when a craft becomes button-pushing.

It’s a powerful image, and an easy one to apply to AI:
“The model writes the code, so the programmer becomes a reviewer, a human safety net.”

![The deskilling fear](/img/posts/rewriting-the-role/whats-left-for-me.jpg)

But as **Kwame Anthony Appiah wrote in *The Atlantic*** ([*“The Age of De-Skilling – Will AI stretch our minds—or stunt them?,”* October 2025*](https://www.theatlantic.com/ideas/archive/2025/10/ai-deskilling-automation-technology/684669/)),* that framing misses something important.
Automation doesn’t erase skill.
It **moves** it.

> “AI doesn’t deskill people. It shifts expertise to places the tools can’t reach.”
> — *The Atlantic, 2025*

---

## From repetition to reasoning

Every wave of automation in software has done the same thing:

* **Compilers** automated machine code, so we learned algorithms.
* **IDEs** automated typing and syntax, so we learned architecture.
* **The cloud** automated deployment, so we learned systems design.
* **LLMs** automate boilerplate, so we must learn *critical thinking.*

When the tools get smarter, our value doesn’t disappear, it migrates from **execution** to **interpretation**.

![From repetition to reasoning](/img/posts/rewriting-the-role/from-repetition-to-reasoning.jpg)

The hard part of programming has never been typing.
It’s understanding the problem, structuring the system, validating assumptions, and debugging what you didn’t expect.
LLMs don’t change that; they just change which steps we spend our time on.

---

## What we're really learning now

Using AI to code isn't making us dumber. It's teaching us different literacies—ones that matter more as the tools get smarter.


![What we’re really learning now](/img/posts/rewriting-the-role/what-are-we-learning.jpg)

### Framing: the art of describing intent

When you write code yourself, you can be vague about requirements because you'll figure it out as you go. But when you're working with an LLM, precision matters upfront. You're learning to articulate *what you want* before you see *how it works*.

This isn't dumbing down, it's specification design, the skill that separates good architects from code monkeys. You're learning to think before you build, which was always supposed to be the hard part.

### Reading critically: when elegant code is wrong

LLMs are excellent at producing code that *looks* right. Clean structure, sensible naming, proper patterns. But "looks right" and "is right" are different things.

I've seen generated functions that handle the happy path beautifully but silently fail on edge cases. I've seen elegant algorithms that are O(n²) when they should be O(n). The code compiles. The tests pass. And it's still wrong.

This teaches us to read code the way we should have been reading it all along: skeptically, with an eye for what's missing, not just what's there.

### Debugging through abstractions you didn't write

Here's where it gets interesting: when AI generates code, you often don't have the mental model of *how* it works, only *what* it does. And when it breaks, you can't rely on your memory of writing it.

This is actually closer to how most professional development works—inheriting codebases, debugging libraries, tracing issues through layers you didn't create. LLMs are teaching junior developers a skill that used to take years to develop: reasoning about systems from the outside in.

### Deciding when *not* to automate

Perhaps the most human skill of all: judgment.

Should you use AI to generate security-critical code? Data validation logic? The algorithm that decides who gets a loan? Just because you *can* automate something doesn't mean you *should*.

This isn't a technical skill, it's an ethical one. And it's becoming the defining characteristic of seniority in our field.


---

## From “lost skills” to new ones

The real danger isn’t forgetting how to write a `for` loop, it’s forgetting how to *think* about one.
If you treat the model as an oracle, you’ll stop building the mental model that lets you reason about your own systems.
But if you treat it as a partner, you’ll discover new forms of mastery.

The historian of technology David Noble once said:

> “Every machine embodies a social decision: about what gets automated, and what remains a skill.”

Our decision, as developers, is whether we hand over thinking, or use automation to think deeper.

---

## The craft endures

<img class="img-right img-250px" src="/img/posts/rewriting-the-role/the-craft-endures.jpg" alt="The craft endures"></img>

I don’t believe AI is deskilling us.
It’s forcing us to rediscover what *skill* really means.

The craft of software has always been to translate messy human intent into precise computational action.
Now we’re just doing it through a new medium: language.

When the tools learn, **so must we**.
Not to compete with them, but to guide them.
Not to defend what used to make us valuable, but to explore what will.

Because the next generation of developers won’t be less skilled.
They’ll just be skilled at different things.

---

## Coming next

In the next post, I’ll look at how this transformation is reshaping our roles, especially the gap between **junior** and **senior** developers, and how we can help new programmers grow in an age where code almost writes itself.

