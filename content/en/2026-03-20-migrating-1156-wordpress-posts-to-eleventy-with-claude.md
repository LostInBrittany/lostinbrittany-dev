---
layout: layouts/post.webc
title: "Migrating 1156 WordPress Posts to Eleventy with Claude"
date: '2026-03-20'
permalink: '/en/migrating-1156-wordpress-posts-to-eleventy-with-claude/'
tags: ['posts']
locale: 'en'
social: 'posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png'
---

<img class="img-right img-250px" src="/img/posts/2026-03-20-migrer-1156-posts-01.png" :alt="title"></img>


Do you remember the golden age of the French blogosphere? Between roughly 2005 and 2012, there was a thriving community of French-language bloggers who all knew each other. People like [Korben](https://korben.info) (one of the most iconic French tech bloggers, still going strong today) were getting started, blogrolls were a thing, bloggers met up IRL, commented on each other's posts. It was a different web.

For those unfamiliar with this era, imagine a time before social media had swallowed everything. Blogs were where conversations happened. You had your corner of the internet, people came to visit, left comments, and you'd visit theirs. It was decentralized, personal, and surprisingly tight-knit.

It so happens that back then, twenty years ago, I had a blog. A pretty active one. [lostinbrittany.org](https://lostinbrittany.org/blog). I wrote about all sorts of things, went to blogger meetups, we put each other in blogrolls... It was a different internet.

![The LostInBrittany blog, WordPress era](/img/posts/2026-03-20-migrer-1156-posts-wordpress-vers-eleventy-avec-claude-social.png)

Between 2006 and 2012, I churned out around 1,300 posts, first on Dotclear (a French blogging platform, think of it as the Gallic alternative to WordPress), then migrated to WordPress. My colleague [Steven](https://www.linkedin.com/in/stevenleroux), CTO at Clever Cloud, remembers. He still teases me, twenty years later, about my posts covering every new WordPress release. Thanks Steven.

## The blog is dead, long live the blog

The blog hasn't been active in years. But here's the thing: I kept forcing myself to maintain WordPress. Patching it. Securing it. Updating plugins. Checking nothing had broken. For a blog nobody was reading anymore, it had become an absurd maintenance ritual, like mowing the lawn of an abandoned house.

At some point, I got fed up.

The trigger came from reading a post by Nicolas Martignole, from [Le Touilleur Express](https://www.touilleur-express.fr/2026/03/10/de-wordpress-a-golang-avec-claude-code/) (a well-known French tech blog), where he described his own WordPress migration. It resonated. That feeling of dragging a WordPress install around like a ball and chain, when lighter, simpler, better-suited solutions exist.

## Why Eleventy

If you follow this blog, you know I'm a fan of [Eleventy](https://11ty.dev/). I already have several sites running on it: this tech blog you're reading right now, [lostinbrittany.com](https://lostinbrittany.com) my personal site, [playtesting.org](https://playtesting.org) my tabletop RPG blog... and others.

I love the philosophy: static files, Markdown, [WebC](https://www.11ty.dev/docs/languages/webc/) components that I'm particularly fond of, no database, no server to maintain, no WordPress security vulnerabilities to patch on a Sunday morning. Just content that turns into HTML. Simple, fast, deployable anywhere.

So the decision was obvious: migrate the old blog to Eleventy.

## 1,156 posts. Yes, one thousand one hundred and fifty-six.

The project seemed massive. 1,156 posts to be exact. Years of content in every format imaginable: raw HTML, WordPress content with its shortcodes, images embedded in a thousand different ways, embedded videos... And the comments! I absolutely didn't want to lose the comments. They're half the soul of a blog from that era, the conversations people had there.

If I'd had to do it by hand, I'd still be at it five years from now. Even with scripts, the sheer number of edge cases made it daunting.

## Enter Claude

So I did what you do in 2026: I handed the job to Claude.

I gave it the template and code from this blog, the Eleventy project with its WebC components. I asked it to create a new project alongside it, and migrate all the WordPress content. Posts, comments, blogroll, images, everything.

The spec was simple:
- Migrate all 1,156 posts to Markdown with proper front matter
- Preserve comments, attached to each post
- Keep images and links functional
- Follow the Eleventy structure and WebC conventions of the blog

And a few hours later... it was done.

Not perfect on the first try, of course. There were iterations, adjustments, edge cases to handle. But the bulk of the work, this massive migration that would have taken me weeks, was knocked out in a few hours. Claude went through the WordPress export, transformed each post, handled the comments, cleaned up the HTML, structured everything.

## The result

[lostinbrittany.org](https://lostinbrittany.org/blog) is live. On Eleventy. No more WordPress.

No more security updates. No more plugins to maintain. No more MySQL database. Just static files, deployed in seconds.

And every post is there. All 1,156. With their comments. Twenty years of blog, preserved in a format that will outlast any WordPress instance.

## What this says about where we are

What struck me about this experience isn't so much that Claude did the work. It's that a task I'd been putting off for years because it seemed too big became doable in an afternoon.

There are plenty of tasks like this in our lives as developers. Migrations we postpone. Legacy code we don't dare touch. Refactorings we know are necessary but never start because the effort-to-benefit ratio seems too unfavorable.

Code assistants change that equation. Not by doing the work for us, but by making feasible the projects we'd never have undertaken alone.

And my old blog, the one that chronicled the early days of the iPhone, every WordPress release (yes Steven, I know), and a thousand other things, has finally found its final form. Static, lightweight, durable.

As it should have been from the start, really.
