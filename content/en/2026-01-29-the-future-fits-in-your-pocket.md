---
layout: layouts/post.webc
title: 'The Future Fits in Your Pocket: Running a Thinking Model on My Phone'
date: '2026-01-29'
permalink: '/en/the-future-fits-in-your-pocket/'
tags: ['posts']
locale: 'en'
thumbnail: 'posts/2026-01-29-the-future-fits-in-your-pocket-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-01-29-the-future-fits-in-your-pocket-00.png" :alt="title"></img>

I've just had one of those rare moments where you glimpse the future - not as a concept, but running right there in your hand, generating tokens at a comfortable pace on a mid-range Android phone.

The model? LFM 2.5 700M Thinking. Under a gigabyte of RAM. Tens of tokens per second on my Motorola G55. And genuinely helpful.

It reminds me of another moment, almost 20 years ago.

## "I Have Internet in My Pocket!"

It was 2008, I think. I had just gotten my first Android phone - a G1, if memory serves. I'd configured Google services, set everything up, and at a party with my then-girlfriend (now wife) and friends, I enthusiastically declared: "I have internet in my pocket!"

People laughed. Called me a nerd. What was the point of having internet always available? Nobody would use that. I talked about using Google Calendar to write down meetings directly. My girlfriend, a teacher, told me that normal people used a paper agenda for that.

I still remind them of that moment. Almost 20 years later, I think I was right.

Standing there with LFM 2.5 running on my phone, I get that same feeling. That sense of "people don't quite see it yet, but this is going to matter."

## The Context: When "Small" Meant "Toy"

For the past year, I've been running OpenAI's OSS model with 2 billion parameters on my M4 MacBook Air. It's been a revelation - having a ChatGPT 3-era assistant running entirely locally, helping with code tasks on planes, keeping sensitive work private. The 32GB of RAM handles it beautifully, and the experience feels... real. Not a compromise, but a genuine tool.

But there's a catch: it needs at least 16GB of RAM. That's a MacBook Air, not a phone. That's your desk setup, not your pocket.

I've tried smaller models before. The 1-3B parameter range has been the domain of cute demos and "well, it tried" responses. Useful for specific, constrained tasks maybe, but not something you'd reach for when you actually need help.

![A thinking model in my pocket](/img/posts/2026-01-29-the-future-fits-in-your-pocket-01.png)

## The Apollo Moment

I've always believed that the current energy consumption of AI is a temporary phase. The computer that guided Apollo 11 to the moon filled a hangar. My smartwatch has orders of magnitude more computing power and uses millions of times less energy. This pattern repeats throughout computing history: what starts as massive and power-hungry becomes small, efficient, and ubiquitous.

But believing in an eventual future and experiencing it are different things.

LFM 2.5 700M Thinking is more than 20 times smaller than the 2B model I run on my MacBook. It uses less than a gigabyte of RAM. And here's the thing: it's not a toy. It's a thinking model - one that can reason through problems, not just pattern-match responses. Running on a phone that costs a fraction of a flagship device.

The trajectory is clear once you see it. Just like having the internet in your pocket seemed silly until it became indispensable.

## Why This Matters

**Privacy and Ownership**: Every query you send to a cloud model is a data point. For personal questions, for proprietary code, for thoughts you're still forming - having a capable model running entirely on your device changes the equation. No API keys, no rate limits, no terms of service updates that change what you're allowed to ask.

**Availability**: Planes, trains, rural areas, countries with restricted internet. Or simply working on something you don't want interrupted by connectivity issues. Local inference means your tools work when and where you need them.

**Cost**: After the initial setup, there's no per-token pricing, no monthly subscription. The marginal cost of using the model is essentially zero - just the battery drain of your device.

**Latency**: No round-trip to a datacenter. The tokens start flowing immediately.

**Energy Efficiency**: Running inference locally on a phone's NPU uses milliwatts. A cloud query involves data center GPUs, network transmission, and associated infrastructure - the energy difference per query might seem small, but the physics matters. A model running on device-optimized silicon, doing exactly the work you need and nothing more, is fundamentally more efficient than the alternative. As these models become more capable, that efficiency multiplier becomes significant.

## The Technical Reality

I won't pretend this is matching GPT-4 or Claude Sonnet. It's not. But that's not the point.

The point is that a sub-1B parameter model can now be genuinely useful for real tasks. Code assistance, writing help, quick research, reasoning through problems - not as a novelty, but as a tool you'd actually choose to use.

The efficiency gains here are staggering. We're talking about model quantization, optimized inference engines, architecture innovations that squeeze more capability out of fewer parameters. The research community has been working on this for years, but we're hitting an inflection point where "small and efficient" crosses over from "interesting" to "practical."

## Try It Yourself

If you're curious about local LLMs but have been put off by the hardware requirements, this is worth exploring. LFM 2.5 700M runs on modest hardware - even an older phone with a decent amount of RAM can handle it.

The setup is remarkably simple. I'm using [Leap AI's Apollo](https://www.liquid.ai/apollo), which is completely free and takes about a minute to set up on both Android and iPhone. Download the app, select the model, and you're running.

For desktop use, tools like Ollama or LM Studio have made the process equally straightforward.

And once it's running? The experience of having a capable AI assistant that's truly yours, that works offline, that costs nothing per query - it changes how you think about these tools.

People might laugh now, just like they did about "internet in your pocket." But give it time.

## The Trajectory

We're in the early days of efficient AI. The narrative right now is dominated by ever-larger models, massive training runs, and data center build-outs. But I've always believed that's the beginning of the story, not the end.

History suggests that transformative technologies follow a path: first powerful but expensive and centralized, then increasingly efficient and distributed. Mainframes to minicomputers to PCs to phones. Cloud computing to edge computing. And now, perhaps, from massive cloud LLMs to capable local models.

LFM 2.5 700M Thinking isn't perfect. It's not replacing Claude or GPT-4 for complex tasks. But it's the first time I've used a sub-1B model and thought "this is useful" rather than "this is promising."

And if this is what we can do with 700 million parameters today, imagine what we'll do with similar-sized models in a year or two.

The future might be smaller than we think. And it might already fit in your pocket.

Just like it did in 2008.

P.S.: Many thanks [Mathieu Ancelin](https://bsky.app/profile/mathieuancelin.bsky.social) for making me discover this model family!