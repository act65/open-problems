---
layout: post
title: Sketching models
category: openproblem
---

What if there was a high level language for describing what a NN does/has learned? It could then make sense to communicate this, or to store it in compressed form, or ...?

Given enough trained models, and their respective data. It could make sense to learn a sketch of each!?

#### A meta representation of a neural network

Each 'network' should have;

* a callable fn f:x->y (most likely a parameterised network)
* a sketch of the inputs and outputs, (x, y) that it was trained on (some sort of generative model).
* some belief/knowledge about which labels is it good at. And which data is requires to get better at others.
* some description/embedding of how it labels a input, the method. What it pays attention to and how it processes it. (this needs to be some sort of graph?)

#### First class networks

Can we pass around models as first class functions?

* What about composing different learned models?
* Sketching/compressing a learned model into ???
*

#### Generating networks

If we can represent a network as just some data structure, then it makes sense to be able to generate one.

This program does X, this program does Y. Can compose them together to do Z. Effectively need a type system...!


#### Retired networks

Oh, I just found this old network lying around. What does it do??!
Especially important when thousands of hours have been spent training it.

But, can just test... feed data and see what happens?

Meta-data for a NN?

Alternatively, as a proof of work when a full test is too expensive!?