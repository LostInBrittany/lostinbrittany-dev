---
layout: layouts/post.webc
title: 'Teaching the next generation'
description: "Perfect code in two days, and nothing learned. Teaching when friction is gone."
date: '2025-11-25'
permalink: '/en/teaching-the-next-generation/'
tags: ['posts']
locale: 'en'
social: 'posts/rewriting-the-role/teaching-next-generation.jpg'
---

### Becoming a Developer in the Age of LLMs

_Rewriting the Role: Developers in the Age of LLMs – Part V_


![Teaching the next generation: Becoming a Developer in the Age of LLMs](/img/posts/rewriting-the-role/teaching-next-generation.jpg)


In the last post, we looked at how developers grow once they're already in the field: how juniors and seniors adapt to smarter tools and new forms of collaboration.
But what about those who haven't written a single line yet?
How do we **teach** programming in a world where autocomplete can build an app?

This is more than a question of curriculum.
It's a question of identity:

> What does it mean to *learn to code* when the code itself can be generated?

---

## The broken teaching model

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-traditional-model.jpg" alt="The broken teaching model"></img>

A computer science professor I know gave her students a classic assignment: "Implement a binary search tree with insert, delete, and search operations."

She'd given this assignment for fifteen years. It usually took students a week, with office hours full of questions about pointers, recursion, and edge cases.

This semester, everyone submitted perfect code in two days.

She was thrilled at first. Then suspicious. Then she asked a student to explain their insertion logic during office hours.

"Um... I'm not sure exactly. ChatGPT wrote it."

"Okay, but do you understand how it works?"

"I mean, it passes all the tests."

This wasn't cheating in the traditional sense. The student had submitted original code. But they'd learned nothing.

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-ai-assistant.jpg" alt="Students have AI assistants"></img>

Most programming courses were designed for a world where typing was learning. We gave students exercises like "write a function that sorts a list" or "implement Fibonacci recursively." They practiced syntax, built small programs, made mistakes, and learned through friction.

Now that friction is gone.

With ChatGPT, Copilot, or Claude, any student can produce a perfect answer in seconds. If grading depends on the final output, everyone can pass and no one truly learns.

Automation hasn't broken education.
It has broken our **old assumptions** about what education measures.

---

## From execution to understanding

If machines can execute, then humans must learn to **understand**.

We should teach less *how to write* code, and more *how to reason about it*.

Here's what that looks like in practice:

**Old assignment:** "Write a function that finds the maximum value in an array."

**New assignment:** "Here are three implementations of finding the maximum value (one from Claude, one from a student, one from Stack Overflow). Compare them. Which handles empty arrays? Which is most readable? Which would you use in production and why?"

The student must now:
* Read and comprehend code they didn't write
* Evaluate trade-offs (readability vs performance vs safety)
* Articulate reasoning, not just produce output

**Old assignment:** "Build a todo app with authentication."

**New assignment:** "Use AI to generate a todo app with authentication. Now:
1. Diagram its architecture
2. Identify three security vulnerabilities
3. Explain how you'd test the auth flow
4. Redesign it for 10,000 concurrent users"

The student gets a working app in minutes. But the learning happens in the analysis, critique, and redesign.

Instead of asking *"can you produce this?"*, we ask *"can you explain this?"*

Exercises evolve from:
* "Write a loop" becomes "Trace this loop and explain its behavior"
* "Implement a function" becomes "Compare the AI's implementation with yours: which is safer, clearer, faster?"
* "Build this app" becomes "Design its architecture and justify your choices"

We teach less syntax, more synthesis.

---

## The role of friction

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-role-of-friction.jpg" alt="The role of friction"></img>

When everything is instantly solvable, we must **design friction on purpose**.

Here are approaches educators are experimenting with:

**Time-boxed challenges with no AI**
"You have 30 minutes to debug this broken authentication function. No LLMs allowed. Go."

This isn't about punishment. It's about building the muscle memory to reason under pressure. In production, when the server is down at 3am, you can't always wait for AI to generate solutions.

**Constrained prompting**
"Generate a sorting algorithm, but you can only use 20 words in your prompt."

This forces precision. Students learn that vague requests get vague results.

**AI code archeology**
"Here's code generated by an LLM six months ago. The requirements have changed. Modify it to handle the new requirements. You can't regenerate from scratch."

This mirrors real-world maintenance: understanding and modifying code you didn't write, with incomplete context.

**Deliberately broken AI output**
"This LLM-generated function looks perfect. Find the three bugs."

Students learn that elegant code can be wrong. They develop the skepticism that Parts II through IV emphasized.

The goal isn't difficulty for its own sake.
It's to restore **productive struggle**: the effort that builds intuition.

The struggle is where understanding grows.

---

## Teaching collaboration with AI

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-collaboration-with-ai.jpg" alt="Teaching collaboration with AI"></img>


Students shouldn't hide their use of LLMs. They should **learn to use them well**.

Last year, I gave an assignment to my students. Several seemed stuck, so I went to check on them.

What I found was fascinating and a bit disturbing.

Do you know that moment when an LLM runs out of ideas and starts looping? It gives you a solution that doesn't work, you ask again, and it gives you the same solution phrased slightly differently. Then another variation. Then back to the first one.

That's where these students were trapped.

They'd copy-paste the LLM's output into their code. It didn't work. They'd go back to the chat and ask again ("it doesn't work, fix it"), copy the new solution. Still didn't work. Ask again. Copy-paste. Ask again.

They were stuck in a loop with the machine, neither of them making progress, and they didn't even realize it until I pointed it out.

"Why don't you read the error message?" I asked.

Blank stares.

They weren't debugging. They weren't thinking about *why* the code failed. They were just cycling through LLM outputs like a slot machine, hoping the next pull would win.

This is what happens when we don't teach students *how* to work with AI.

**The solution isn't to ban the tool. It's to make its use explicit and structured.**

Now when I give assignments, students must submit:

1. **Their prompts** (showing iteration and refinement)
2. **The AI's responses** (what worked, what didn't)
3. **Their modifications** (what they changed and why)
4. **A reflection** (what they learned about the problem)

One student's recent submission showed real learning:

*"First prompt: 'make a REST API for a library system' (too vague, got generic CRUD)*

*Refined: 'REST API with books, users, loans, due dates, late fees' (better structure but missing validation)*

*Debugged: 'the loan endpoint doesn't prevent borrowing checked-out books' (learned about state management)*

*Hit a wall: Asked AI three times how to prevent race conditions when two users borrow the same book simultaneously. Got three similar answers that didn't work. Stopped, researched database transactions myself, then asked more specifically about using SELECT FOR UPDATE in PostgreSQL. That worked."*

See the difference? When the student got stuck in the loop, they *recognized it* and broke out. They researched independently, refined their question, and learned something real about concurrency.

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-process-reflection-reasoning.jpg" alt="Teaching process, reflection and reasoning"></img>

Pair programming with an AI model should be an explicit exercise:

1. **Prompt design**: describe intent precisely
2. **Verification**: test and analyze what the model produced  
3. **Debugging**: when it fails, understand why before asking again
4. **Reflection**: document what was learned

Instead of banning the tool, we make it visible.

The question is no longer *"Did you use AI?"* but *"How did you use it, and what did you learn when it failed?"*

Because the most important lesson about LLMs isn't how to get them to generate code.

It's knowing when to stop asking them and start thinking for yourself.

---

## Rethinking assessment

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-grades.jpg" alt="Rethinking assessment"></img>


In this new landscape, plagiarism detection is meaningless.
A student's code can be unique yet entirely machine-written.
So we grade something else: **process, reflection, and reasoning**.

**The "Lab Notes" approach**

Last year, I started requiring students to submit brief "lab notes" with every assignment.

Not a formal report, just a candid account of their process:

A typical submission might read:

*"I started by asking Claude to generate a user authentication system. It gave me a solution using JWT tokens. I didn't understand what JWT was, so I researched it and learned about stateless authentication.*

*Then I tested the code and realized it didn't handle token expiry properly. I prompted for a fix, got a solution with refresh tokens, but that introduced a race condition I had to debug myself.*

*Final implementation: 70% AI-generated, 30% my modifications. Key learning: token-based auth is elegant but has subtle failure modes around concurrent requests."*

The code itself? Fairly standard. But the lab notes show:
* The student identified gaps in their knowledge
* They researched concepts independently  
* They found and fixed a real bug
* They understood trade-offs

What surprised me most: students were remarkably honest. They'd write things like "I got stuck in a loop with the LLM for 20 minutes before I realized I needed to read the actual error message" or "This part I copied from Stack Overflow because the AI solution was too complex."

That honesty is valuable. It shows self-awareness and metacognition, exactly what we want to develop.

**Oral defenses**

Another approach I've used: pair programming interviews.

"Here's your code. Walk me through this function. Why did you choose this data structure? What happens if this API call fails? How would you test this?"

If a student can't explain their own code, it's immediately obvious. And if they can explain it (even if AI wrote most of it), that shows understanding.

**Critique assignments**

I've also started giving assignments like: "Here are three AI-generated solutions to the same problem. Which would you ship to production? Why? What would you change?"

This forces students to develop judgment. They learn to evaluate code quality, not just produce it.

When understanding becomes visible, cheating becomes pointless.

The goal isn't to catch students using AI. It's to make using AI *well* part of what we're teaching.

---

## Supporting educators

<img class="img-right" src="/img/posts/rewriting-the-role/teaching-traditional-model.jpg" alt="Educators need reskilling too"></img>

Educators need reskilling too.

I've talked to computer science professors who are genuinely anxious. They spent decades mastering pedagogy for a world where students typed every character. Now that world is gone, and they feel lost.

Here's what they're discovering works:

**Experiment publicly with students**

One professor I know starts each semester by showing students what LLMs can and can't do. He prompts it live, shows when it fails, demonstrates how to verify output. He makes his own learning visible.

This does two things: it demystifies the tool, and it shows that even experts are still figuring this out.

**Share lesson plans openly**

Educators are reinventing the wheel in isolation. Some universities are creating open repositories of "AI-era programming assignments" with notes on what worked and what didn't.

Teaching with AI is itself a new discipline. We need to build that knowledge collectively.

**Accept that the role has changed**

The best teachers I know aren't fighting AI. They're teaching *with* it, showing students how to question, verify, and think beyond the output.

They've realized: their job was never to be the source of all programming knowledge. It was to teach students how to think like programmers.

AI doesn't change that mission. It just changes the medium.

Because the educator's real role was never to guard the keyboard.
It's to guard the **thinking**.

---

## What we really teach

A student recently told me: "I used to think programming was about memorizing syntax. Now I realize it's about understanding problems well enough to explain them to something that's very smart but has no common sense."

That's it. That's the shift.

In the end, the mission hasn't changed.
We still teach students to solve problems, to reason about complexity, and to build responsibly.
We just do it in a new medium: language instead of syntax.

The generation learning to code right now won't remember a time when AI couldn't write functions. They'll think of programming the way we think of using calculators in math class: a tool that handles mechanics so you can focus on concepts.

And that's not a bug. It's a feature.

We don't teach people to out-code the machine.
We teach them to understand, guide, and question it.

To think like programmers in a world where the typing is optional but the thinking never is.

---

### Coming Next

In the final post of the series, we'll zoom out to look at the bigger picture: how all these shifts, from automation to education, are shaping a future that's still profoundly human.
Because the future of software development isn't less human.
It's just differently human.