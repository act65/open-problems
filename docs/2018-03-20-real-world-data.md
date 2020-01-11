---
layout: post
title: Learning in the real world
category: openproblem
---

In the real world, data is messy, complicated, ... and it doesn't come how you want it.

## Complexity

Most real world problems are a little more complicated than differentiating between pictures of cats and dogs.
How can we learn complex functions (while remaining efficient?).

What make a function complex?

* The inter-relatedness of its input variables? So a function with many independent/separable components is not complex?
* the length of dependencies,
* the raw amount of possible cases/knowledge/information
* ?

Firstly, we will need to construct learnable classes of complex function, however, this is the problem! To capture many different types of complex function we need ... ??? exponentially large space. Thus complex functions are harder to approximate as there are more candidates to search through. We need more priors to help constrain this...

There are some approaches to this problem and they largely boil down to something related to Occam's razor. Start simple and build on that.

* Curriculum, (two types? target and capacity?)
* long-term and deep,
* Constructing more complex fns from simple ones. Starting with the simplest hypotheses.

## Correlated samples (non IID)

Pretty much every ML algorithm you come across has an often over looked assumption, that the dataset has been constructed from IID samples from the true data distribution. This is pretty much impossible to achieve in practice and there will always be some bias in the dataset (possibly just from the sampling, but more likely due to how it was constructed).

Game playing (typically with RL) ... this problem as ...?

Another setting where we see this is [Federated optimisation](https://arxiv.org/abs/1511.03575). (but not correlated in time, but in source?)

Related to life-long-learning?

<!-- However, people seem to be good at learning from highly correlated inputs (I actually dont think this is true). I think we use a trick to help us out, we generally have some idea of the space of plausible inputs-outputs and thus we can simulate/imagine the other inputs we are not seeing. -->



When the input distribution is a moving target, samples are correlated in time or ?.

Multi-agent learning
Online learning
Reinforcement learning

Self-play. Only explore subspace (related to diversity)

## Fairness


## Noise



## Privacy

...


## Aggregated/siloed data

Fundamentally, learning must be distributed because compute and memory must be distributed. (Computation and memory reduces to physics, and physics tells us there is a universal limit to information density and processing)
Typically, programming languages are designed to abstract us away from this. However, can we be smarter in designing our system to reflect the computations done in learning.

<!-- distributed in space or time or ??  memory in space == memory in time? -->

- what about when models are too big to fit on a single computer?

#### Efficient communication

Since we have distributed the compute, we need to collect and communicate .

Compress data before communicating (but at the lowest level possible)?
Each node/agent/? At the lowest level, the 'code' would be rather limited? Want to be able to tailor it to local conditions?

#### Inhomogenous compute

Note that if compute is distributed, then data will also need to be distributed.

* [Federated optimisation](https://arxiv.org/abs/1511.03575)

What if;
- inhomogenous compute, how can each node contribute most effectively? (related to multi-agent-systems?)
- low communication bandwidth,
-
