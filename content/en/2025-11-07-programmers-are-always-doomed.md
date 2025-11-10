---
layout: layouts/post.webc
title: 'Programmers Are Always Doomed...'
date: '2025-11-07'
permalink: '/en/programmers-are-always-doomed/'
tags: ['posts']
locale: 'en'
canonical_url: ''
thumbnail: 'posts/rewriting-the-role/programmers-are-always-doomed.jpg'
---

### Until They’re Not

_Rewriting the Role: Developers in the Age of LLMs – Part I_

![Programmers Are Always Doomed... Until They’re Not](/img/posts/rewriting-the-role/programmers-are-always-doomed.jpg)

This article is the first in a series titled **_Rewriting the Role: Developers in the Age of LLMs_**, inspired by the talk I gave on November 7, 2025, at the [BDX I/O](https://bdxio.fr/) conference in Bordeaux.
The talk, and now this series, explores how the developer’s craft evolves when large language models start writing code beside us, and what remains profoundly human in that process.

A few months ago, I saw my first AI-generated pull request. It was clean. It had tests. The commit message was better written than most of mine. And for a moment, I just stared at it thinking: *“Am I obsolete?”*

I’ve been writing code professionally since the late 1990s, long enough to have witnessed several _“ends of programming”_. But lately, I’ve noticed that fear returning, not just in headlines, but in people.

I’ve talked to university students who told me:

> “I chose computer science, but now I’m scared I picked the wrong field.”

I’ve met junior developers struggling to land their first job, watching job boards shrink and wondering if the market still wants them. 

And every few weeks, someone, usually younger, asks me the same question:

> “Is software development still a good career path?”

I understand the worry.

When you see AI tools generating full applications, when recruiters talk about _“smaller dev teams”_, when social media repeats _“AI will replace developers”_, it’s easy to feel like we’re living through the end of something.

So I did what I usually do when I feel that uneasy shift: I started reading, thinking, and talking about it with other developers, experienced and emerging. And I realized: this isn’t the first time we’ve felt this way.

Every few decades, a new wave of abstraction changes how we build software, and each time, someone declares that the developer’s job is over. It happened with compilers, with graphical IDEs, with the cloud, and now with LLMs.

This series of posts is my attempt to make sense of that pattern. Because one of the responsibilities of those of us who have been around long enough to see multiple “developer apocalypses” is to help put the current one in perspective. To tell the next generation:

**We’ve been here before. And we’re still here.**

---

## From Assembly to Fortran: the first panic

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/panic-fortran.png" alt="From Assembly to Fortran: the first panic"></img>

In the 1950s, programming meant understanding the machine, literally.
Programmers wrote in assembly or even raw opcodes, flipping switches or feeding punched paper tapes. Then came **Fortran** and the first compilers, promising to translate human-readable code into machine instructions.

The reaction? Panic.

Assembly veterans dismissed Fortran as *“not real programming.”* They feared that if anyone could type `DO 10 I = 1, 10`, the craft would disappear. But it didn’t. It evolved. Programmers stopped thinking about registers and started thinking about algorithms.

Abstraction shifted the focus. We didn’t lose craft; we moved it up a level.

---

## From Punched Cards to Keyboards: touching the code

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/panic-typing.png" alt="From Punched Cards to Keyboards: touching the code"></img>

In the 1960s and 70s, programming was a *production chain*. Developers wrote code on paper forms. Clerks, often keypunch operators, typed those forms into **punched cards**, one card per line. A deck of cards represented a program, and it could take hours (or a day) to get results back from the mainframe.

When **interactive terminals** appeared, like IBM’s green screens or DEC’s VT100s, it was a revolution. For the first time, programmers could type and run their own code directly. The workflow collapsed from days to minutes. And yes, many professionals resisted at first: *“Writing code on paper teaches rigour and forces you to think about the algorithm.”*

But once again, the craft didn’t die. It simply became *closer* to the machine.

---

## From Code to Models: the Automation Dream

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/panic-case.png" alt="From Code to Models: the Automation Dream"></img>

In the 1980s, the software world fell in love with a new idea:
if we could draw a system precisely enough — boxes, arrows, relationships — then maybe we wouldn’t need to code it at all.

That idea had a name: **CASE**, for *Computer-Aided Software Engineering*.
It was the era of **structured design**, **data flow diagrams**, and **entity-relationship models**.
Vendors promised tools that would automate the entire process — from design to documentation to code generation.
A software factory, powered by diagrams.

You’d describe your system in a visual tool like **Excelerator**, **KnowledgeWare**, or **Texas Instruments’ IEF**, press a button, and voilà — the code would appear.
Analysts would design, and programmers, supposedly, would become obsolete.

It was the 1980s version of “AI will replace developers.”

And as usual, it didn’t quite work out that way.

The generated code was brittle, the tools expensive, and the “models” quickly drifted away from the real system.
The dream of the fully automated software factory collapsed under its own weight.
But the *desire* — to automate the boring parts of coding — didn’t die.

In the early 2000s, it came back with a new name: **Model-Driven Engineering (MDE)**.
This time, the focus was on formal models, transformations, and meta-models.
Frameworks like **UML**, **Eclipse EMF**, or **Acceleo** tried to turn models directly into code, with the slogan:

> “The model *is* the software.”

It sounded modern, elegant — and once again, a little bit like magic.
Developers worried that soon they’d be replaced by *modelers*.
In practice, MDE found real success in highly specialized fields — aerospace, automotive, embedded systems — but never fully replaced programming.

Yet it left behind something important: the idea that **intent can be described at a higher level**, and that machines can help us implement it.

Which, of course, brings us back to today.

LLMs promise to generate code from *descriptions*, not diagrams.
It’s the same dream — only now the boxes and arrows have turned into English sentences.
The language changed, but the story didn’t:
we keep trying to teach machines to understand what we mean, so we can focus on *why* we’re building it.

---



## From C to Java: productivity vs. purity

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/panic-java.png" alt="From C to Java: productivity vs. purity"></img>

In the mid-1990s, **Java** arrived with a bold promise: *“Write once, run anywhere.”*
It offered memory safety, automatic garbage collection, and a virtual machine that freed developers from manual memory management.
To many C and C++ veterans, that sounded like heresy.

> “Real devs use C. Garbage collection will make you soft.”
> “If you don’t manage your own memory, you’re not a real engineer.”

Sound familiar?

Once again, the same pattern played out: a new abstraction, a fear of lost discipline, and then adaptation.
Java traded fine-grained control for **portability, safety, and speed of delivery**.
It opened the door to millions of web and enterprise developers who could focus on business logic instead of segmentation faults.
It didn’t deskill the profession; it expanded it.
Developers who once spent weeks debugging memory leaks could now spend that time solving business problems. The demand for software didn't shrink, it exploded.

Java was a reminder that progress often feels like betrayal to those fluent in the previous layer of mastery.
And yet, each wave of progress brings a new kind of mastery, a different kind of craftsmanship.


---

## From Code to Low-Code / No-Code: anyone can build an app

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/panic-lowcode.png" alt="From Code to Low-Code / No-Code: anyone can build an app"></img>

The 2010s brought the next big scare: **low-code and no-code platforms**. Drag-and-drop builders like PowerApps, Bubble, Airtable, and Webflow claimed to democratize software creation. Analysts talked about *citizen developers* replacing traditional engineers.

Headlines followed:

> *“Will citizen developers replace traditional developers?”*
> LinkedIn, 2019

> *“No-code vs. traditional coding: will developers become obsolete?”*
> Medium, 2020

> *“No-code tools are changing software development forever”*
> TechRepublic, 2020

The subtext was always the same: *this time, we won’t need programmers.*

Of course, that didn’t happen. Low-code tools empowered new creators, but they also created new demand for APIs, automation, and custom logic, written by developers. We didn’t disappear. We moved up again.

---

## The pattern: abstraction, panic, adaptation

If you zoom out, every generation of programmers lives through the same cycle:

<table class="comparison-table">
  <thead>
    <tr>
      <th>Era</th>
      <th>Innovation</th>
      <th>Fear</th>
      <th>Reality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1950s</td>
      <td>Compilers (Fortran)</td>
      <td>“We’ll forget how to code machines.”</td>
      <td>We learned to code ideas.</td>
    </tr>
    <tr>
      <td>1970s</td>
      <td>Terminals</td>
      <td>“Programmers shouldn’t type.”</td>
      <td>Coding became interactive.</td>
    </tr>
    <tr>
      <td>1990s</td>
      <td>RAD tools</td>
      <td>“Visual tools will replace us.”</td>
      <td>They didn’t. We learned design.</td>
    </tr>
    <tr>
      <td>2000s</td>
      <td>Managed languages</td>
      <td>“Too easy, we’ll lose rigor.”</td>
      <td>We gained productivity.</td>
    </tr>
    <tr>
      <td>2010s</td>
      <td>Low-code / no-code</td>
      <td>“Anyone can build apps.”</td>
      <td>And we built the systems that made it possible.</td>
    </tr>
  </tbody>
</table>

Every time, abstraction rises. Every time, panic follows. And every time, developers adapt.

---

## The lesson

<img class="img-left img-150px img-border" src="/img/posts/rewriting-the-role/end-is-nigh.png" alt="The lesson"></img>

We’ve been here before.

Abstraction doesn’t kill craftsmanship, it refocuses it.
Automation doesn’t erase skill, it changes where the skill lives.

From flipping switches to prompting LLMs, we’re still doing the same essential job:
**turning ideas into reality through computation.**

But every time the tools get smarter, something subtle happens.
We start to wonder if we’re losing something, if the craft itself is slipping away.
Are we being *deskilled*, or are we just being *reskilled*?

That’s what we’ll explore next.

---

### Coming Next

In the next post, we’ll look at how automation reshapes what it means to be skilled.
Does AI *de-skill* developers by removing friction — or *re-skill* us by shifting what mastery means?
We’ll explore how our craft evolves when tools begin to learn, too.
