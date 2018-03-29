---
layout: post
title: Better priors
category: openproblem
---

Progress in learning (especially in unsupervised settings) is likely to be made through our ability to specify domain specific priors. This is because it is not possible to have a universally efficient algorithms.

- Want a nice easy way, a language, to specify priors.
- What different types of prior are there?

What we need is better, more flexible and efficient, ways to specify arbitrary priors on our models. [Adversarial autoencoders](https://arxiv.org/abs/1511.05644) are an example of this, where we are able to specify priors by example.

Why do we care? Priors allow us to forgo having to learn potentially complicated relationships and take the priors as given. Assumptions to build on. Thus we should expect better efficiency, in data, in compute, in errors, ... assuming our priors are correct. But, what about when our priors are not correct? How will we know?

What domains do we really care about and need to find better priors? How transferable are priors between different settings?


Can be in many forms. Transfer, a model, ... ???


## The 'right' geometry
(which priors to include in optimisation)

What is the right geometry for learning?


<!-- Pics of vector fields ![]() -->



Studied in online learning, ?,



Why do cts representations of weight make sense? Why as vectors?

Why does NAT learn better representations than AEs?

Embedding different logics into representations.

How does representation/structure effect function!

Embedding relations, memory, ... into distributed (linear?) representations


#### Approximators
(which priors to include in representation)

Can we find an representation that approximates arbitrary functions easily?
Which representations can approximate the types of 'natural' functions we care about?

What are the best algorithmic atoms to build out of?
Orthogonal ???s. Polynomials, vectors, graphs, ?,

A neural network is the combination of a few distinct ideas.

* Hierarchical layers
* Connectionist
* Linear parameterisation

Why are neural networks better than SVMs, or RBFs, or ...? Are NNs best for every application?

Current wisdom hints that local and hierarchical function approximations are !!, but ?

* The ReLU is discontinuous, is that important?

Why is it that (convolutional) neural networks work so well? Hierarchical, local, discontinuous, ?.
