---
layout: post
title: Counterfactuals
category: openproblem
---

Deep learning needs to see the same dataset many times, eventually learns some useful patterns, but not before wandering here and there to checkout what it would be like to do a crappy job.

#### One-shot (not really a counterfactual...)

We (seem to) have the ability to learn from a single example. How is this possible? Can we get computers to do it?

Trivially, this is just memorisation. The interesting part comes from trying to achieve a sub-linear memory footprint, aka some sort of online compression. And this is where we get back to deep learning. We need to pick some method to compress these examples we are shooting, and deep learning seems like a decent candidate, except for its data complexity.

Most definitions of learning (e.g. PAC) include some guarantee that a single example should not change the output of the learning algorithm by more than epsilon. This seems to preclude the ability to do one-shot learning?

<!-- How do current methods get around this? -->
<!-- Could be closer to memory, decompose new input into things already known, memorise signal over them. Then learning would be the how to decompose. Aka one-shot == memory. -->
