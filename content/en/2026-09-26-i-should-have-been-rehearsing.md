---
layout: layouts/post.webc
title: "I should have been rehearsing"
description: "The morning before my Confitura talk, I fixed how a macOS voice reads hyphens instead of practising my English."
date: '2026-09-26'
permalink: '/en/i-should-have-been-rehearsing/'
tags: ['posts']
locale: 'en'
social: 'posts/2026-09-26-i-should-have-been-rehearsing-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-09-26-i-should-have-been-rehearsing.png" :alt="title"></img>

It's the morning before [my talk](/talks/2026/2026-09-26_Confitura_Wrap-Reshape-or-Redesign-Retrofitting-Your-APIs-for-a-World-of-Agents/) at [Confitura](https://confitura.pl), in Warsaw. The slides are done. What I wanted to do this morning was simple: listen to some parts of my talk read aloud, to check my English pronunciation.

Let me explain. I'm a Spaniard lost in Brittany. I have an accent in every language I speak, and English is always a bit of a challenge. Before a talk, hearing the tricky sentences said by someone else helps me a lot.

So I selected a paragraph, pressed the Speak Selection shortcut, and heard the native macOS voice. Let's be polite and say it hasn't improved much in years.

## Kokoro, as a system voice

I had heard good things about [Kokoro](https://huggingface.co/hexgrad/Kokoro-82M), an open-weight neural text-to-speech model. It's small (82 million parameters), it runs locally, and it sounds surprisingly human. Looking for a way to use it everywhere on my Mac, I found [KokoroVoice](https://github.com/vicnaum/kokoro-tts-macos): an app that registers Kokoro as a real macOS system voice, through an audio unit speech synthesis extension. Everything runs locally on Apple Silicon, with MLX. You choose "Kokoro Heart" in *System Settings → Accessibility → Spoken Content*, and every app that can speak now speaks with Kokoro.

It's great. Really. Except for one thing.

## The hyphen problem

My talk has this sentence:

> Collapse the multi-step human workflow into one outcome-shaped call.

And Kokoro read it like this:

> Collapse the multi. Step human workflow into one outcome. Shaped call.

Listen for yourself:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/1-hyphen.m4a"></audio>

Every hyphenated word got cut in two, with a falling end-of-sentence tone in the middle. And in technical English, hyphenated compounds are everywhere: *real-time*, *open-source*, *end-to-end*, *state-of-the-art*… My talk is full of them.

The reasonable thing to do was to ignore it and rehearse. But I have ADHD, and when my brain finds an interesting problem, hyperfocus kicks in. So I opened Claude Code in the KokoroVoice repository instead, and spent my morning on hyphens. Sometimes I hate my brain.

## Round one: a fix that passed the tests

I asked Claude to write an issue explaining the problem. Then, why not, to fork the repository, fix it, and open a pull request.

The first fix was the obvious one: in the text normalization step, turn a hyphen between two letters into a space. `multi-step` becomes `multi step`. Claude wrote a dozen test cases, all green, and opened the [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2). To its credit, it said clearly that it hadn't *heard* the result: there was no Xcode on my machine, so it had only tested the text transformation, not the voice.

So I installed Xcode, built the app, and listened.

It still paused.

## Round two: my ears against the phonemes

Claude then went on a hunt: maybe I was running the old version of the extension, maybe my text used a Unicode hyphen that only looks like `-`, maybe line breaks were adding periods… It wrote a little tool to capture the audio and measure silences, and found no silence at the hyphens. Everything looked right on paper.

At some point I stopped it, and told it what I actually heard. `multi step` now sounded almost natural. But `outcome shaped` still had a pause, because "outcome shaped" isn't something the model knows as a unit. And if I wrote it as a single word, `outcomeshaped`, it was read perfectly.

That was the missing piece. Kokoro doesn't read letters, it reads phonemes produced by a grapheme-to-phoneme library called Misaki. Looking at what Misaki produced for each option made everything clear:

| Written as | Misaki phonemes | What you hear |
|---|---|---|
| `outcome-shaped` | `ˈWtkˌʌm—ʃˈApt` | the hyphen becomes a dash (`—`), so a pause |
| `outcome shaped` | `ˈWtkˌʌm ʃˈApt` | two primary stresses (`ˈ`), so two separate phrases |
| `outcomeshaped` | `WtkˈʌmʃˌApt` | one word, it flows |

In English, a compound has its main stress on the first part: *OUT-come-shaped*, not *OUT-come SHAPED*. With a space, each word keeps its own primary stress, and the voice hears two phrases. That's the pause.

So, just join the words? No. Joining works for `outcomeshaped` because Misaki's neural fallback guesses it well. But the same trick turns `endtoend` into something like "end-TOHND", and `realtime` into "ree-ALL-time". Fine for one word, a disaster as a general rule.

Here is `real-time, end-to-end, state-of-the-art` with the words joined:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b3-joined.m4a"></audio>

## Round three: let me listen

This is the part I liked the most. Instead of arguing about phonemes, Claude rendered WAV files with the real model, for five different strategies, on my sentence and on a second one full of risky compounds (*real-time, end-to-end, state-of-the-art*). Then it opened the folder and asked me which ones sounded right.

The winner: keep the space, but use Misaki's own stress markup to demote every part after the first. `outcome-shaped` becomes `outcome [shaped](-1)`, and `state-of-the-art` becomes `state [of](-1) [the](-1) [art](-1)`. The phonemes now carry compound stress, the pause is gone, and word highlighting still works. It's not the most sophisticated option (building the joined word from dictionary pronunciations sounded good too, but needed a lot more code), but it was good enough for my ears, and the simplest.

Here is the talk sentence with the fix:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/4-space-destress.m4a"></audio>

And the risky compounds:

<audio controls preload="none" src="/assets/posts/2026-09-26-i-should-have-been-rehearsing/b4-space-destress.m4a"></audio>

The [pull request](https://github.com/vicnaum/kokoro-tts-macos/pull/2) is updated, with the whole story in the description. Now it's up to the maintainer.

## What I take from it

A few things, beyond "Horacio should rehearse more".

**The tests were green and the bug was still there.** They were good tests, but they checked the text, and the problem was in how the text sounded. An agent can only verify what it can observe. When the result is audio, the observer has to have ears.

**I was the useful part of the loop.** Not because I knew Misaki's internals (I didn't, until this morning), but because I could hear the difference between *multi step* and *outcome shaped*, and try *outcomeshaped* by hand. That one observation was worth more than all the hypotheses before it.

**Asking for a listening test changed everything.** The moment the question became "which of these five files sounds right?" instead of "is this regex correct?", we converged in minutes.

And now, if you'll excuse me, I have a talk to rehearse. With a voice that finally says *outcome-shaped* properly.
